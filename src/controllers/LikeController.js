const Profile = require('../models/Profile');

module.exports = {
    async store(req, res) {
        const { user } = req.headers;
        const { profileId } = req.params;
        const loggedProfile = await Profile.findById(user);
        const targetProfile = await Profile.findById(profileId);
        if (!targetProfile) {
            return res.status(400).json({error: 'Profile not exists'});
        }
        if (targetProfile.likes.includes(loggedProfile._id)) {
            console.log('DEU MATCH');
        };
        loggedProfile.likes.push(targetProfile._id);
        await loggedProfile.save();
        return res.json(loggedProfile);
    }
};