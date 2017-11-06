var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

// // var newTodo = new Todo({
// //     text: "Cook dinner"
// // });

// var newTodo = new Todo({
//     text: "    Edit this video     "
// });

// newTodo.save().then((doc) => {
//     console.log('Saved todo', JSON.stringify(doc, undefined, 2));
// }, (e) => {
//     console.log('Unable to save todo');
// });


var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
});

var newUser = new User({
    email: "gustavstromfelt@hotmail.com"
});

newUser.save().then((doc) => {
    console.log("User created", JSON.stringify(doc, undefined, 2));
}, (e) => {
    console.log('Unable to create new user', e);
});