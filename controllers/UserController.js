
const UserController = {
    index: (req, res) => {
        const {user} = req.session;

        return res.render('user', { user });
    }
};

module.exports = UserController;