
const {Schema, model} = require('mongoose');
const moment = require('moment');

const CommentSchema = new Schema({
    CommentText : {
        type: String, required: false, minLength: 1, maxLength:1000
    },
    CommentAuthor: {
        type: String,
        required: true,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        get: (data) => moment(data).format("MMM DD, YYY [at] hh:mm a")
    },
    user: [{
         type: Schema.Types.ObjectId,
         ref: "user"
         }],


})
const Comment = model('comment', CommentSchema);

module.exports = Comment;