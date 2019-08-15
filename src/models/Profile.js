const { Schema, model } = require('mongoose');

const ProfileSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    user: {
        type: String,
        required: true,
    },
    bio: String,
    avatar: {
        type: String,
        required: true,
    },
    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'Profile',
    }],
    dislikes: [{
        type: Schema.Types.ObjectId,
        ref: 'Profile',
    }],
}, {
    timestamps: true,
});

module.exports = model('Profile', ProfileSchema);