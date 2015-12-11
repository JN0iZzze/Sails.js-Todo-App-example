/**
 * HomeController
 *
 * @description :: Home
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    index: function(req, res) {
        var userId = req.session.passport.user;

        User
            .findOne()
            .where({ id: userId })
            .exec(function(err, user) {
                res.view('homepage', {user: user});
            });
    }

};

