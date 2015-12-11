module.exports = {

    getTodos: function(userId, next) {
        Todo.find().where({'userId':userId}).exec(function(err, todos) {
            if(err) throw err;
            next(todos);
        });
    },
    addTodo: function(todoVal, userId, next) {
        Todo.create({userId: userId, value: todoVal}).exec(function(err, todo) {
            if(err) throw err;
            next(todo);
        });
    },
    removeTodo: function(todoVal, next) {
        Todo.destroy({value: todoVal}).exec(function(err, todo) {
            if(err) throw err;
            next(todo);
        });
    }
};