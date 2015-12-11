/**
 * TodoController
 *
 * @description :: Server-side logic for managing Todoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    getTodos: function(req, res) {
        var userId = req.session.passport.user;

        TodoService.getTodos(userId, function(todos) {
            res.json(todos);
        });
    },

    addTodo: function(req, res) {
        var userId = req.session.passport.user;
        var todoVal = (req.body.value) ? req.body.value : undefined;
        TodoService.addTodo(todoVal, userId, function(success) {
            res.json(success);
        });
    },

    removeTodo: function(req, res) {
        var todoVal = (req.body.value) ? req.body.value : undefined;
        TodoService.removeTodo(todoVal, function(success) {
            res.json(success);
        });
    }

};

