const { AuthenticationError } = require("apollo-server-express");
const {User, Comment} = require('../models')
const {signToken} = require('../utils/auth')

const resolvers = {
    Query: {
        users: async () => {
            return User.find().populate('comment')
        },
        user: async (parent, {name}) => {
            return User.findOne({name}).populate('comment')
        },
        comments: async (parent, {name}) => {
            const params = name ? {name} : {}
            return Comment.find(params)
        },
        comment: async (parent, {CommentId}) => {
            return Comment.findOne({_id: Comment.id})
        },
        me: async (parent, arg, context) => {
           try {
            if(context.user) {
                return User.findOne({_id: context.user._id}).populate('comment')
            }
           } catch (error) {
            throw new AuthenticationError("Please log in")
           }
        }
    },
    // Begin mutation
    Mutation: {
        createUser: async(parent, {name, email,password}) => {
            const user = await User.create({name, email, password});
            const token = signToken(user);
            return {token, user}
        },
        login: async (parent, {email, password}) => {
            const user = await User.findOne({email})
            if(!user) {
                throw new AuthenticationError("No email found in database")
            }
            const correctPw = await user.isCorrectPassword(password);
            if(!correctPw) {
                throw new AuthenticationError("Invalid password provided")
            }
            const token = signToken(user);
            return {token, user}
        },
        addComment: async (parent, {CommentText}, context) => {
                if(!context.user) {
                    const comment = await Comment.create({
                        CommentText, CommentAuthor: context.user.name
                    });
                    await User.findOneAndUpdate(
                        {_id: context.user._id},
                        {$addToSet: { comments: comment._id}}
                    );
                    return comment;
                }
                throw new AuthenticationError("needed to log in")
            }
        
    }
}

module.exports = resolvers;