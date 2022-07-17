const {  User } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require('../utils/auth');
const resolvers = {
  Query: {
   
    me: async (parent, args,context) => {
      
      return await User.findOne({ _id:context.user._id});
    },
  },
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      
      return { token, user };
    },
    login: async (parent, { username, password }) => {
      // Look up the user by the provided email address. Since the `email` field is unique, we know that only one person will exist with that email
      const user = await User.findOne({
        $or: [{ username: username }, { email: username }],
      });

      // If there is no user with that email address, return an Authentication error stating so
      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      // If there is a user found, execute the `isCorrectPassword` instance method and check if the correct password was provided
      const correctPw = await user.isCorrectPassword(password);

      // If the password is incorrect, return an Authentication error stating so
      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      // If email and password are correct, sign user into the application with a JWT

      // Return an `Auth` object that consists of the signed token and user's information
      const token = signToken(user);
      
      return { token, user };
    },
    saveBook: async (
      parent,
      {  bookId, authors, description, title, image },context
    ) => {
      console.log("fromserver");
      console.log(context);
      return User.findOneAndUpdate(
        { _id: context.user._id },
        {
          $addToSet: {
            savedBooks: { bookId, authors, description, title, image },
          },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    removeBook: async (parent, { bookId },context) => {
      return await User.findOneAndUpdate(
        { _id: context.user._id },
        { $pull: { savedBooks: { bookId: bookId } } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
