//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // functions for deletions: deleteMany(), deleteOne(), findOneAndDelete()
    // db.collection('Todos').deleteMany({text: "Eat lunch"}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Todos').deleteOne({text: "Eat lunch"}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Users').deleteMany({firstName: "Gustav"}).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndDelete({firstName: "Olaf"}).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    });

    // db.close();
});