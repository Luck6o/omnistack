const axios = require('axios');
const Profile = require('../models/Profile');

module.exports = {
    async index(req, res) {
        const { user } = req.headers;
        const loggedProfile = await Profile.findById(user);
        const users = await Profile.find({
            $and: [
                { _id: { $ne: user } },
                { _id: { $nin: loggedProfile.likes } },
                { _id: { $nin: loggedProfile.dislikes } },
            ],
        })

        return res.json(users);
    },
    async store(req, res) {
        const { username } = req.body;

        const userExists = await Profile.findOne({user: username});

        if (userExists) {
            return res.json(userExists);
        }

        const response = await axios.get(`https://api.github.com/users/${username}`);

        const { name, bio, avatar_url: avatar } = response.data;

        const profile = await Profile.create({ 
            name,
            user: username,
            bio,
            avatar
        })
        return res.json(profile);
    }
};