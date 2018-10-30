const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true }, function(err, client) {
    if(err) {
        console.log('\x1b[91m%s\x1b[0m', 'Failed to connect to MongoDB server.');
        return;
    }

    console.log('\x1b[32m%s\x1b[0m', 'Connected to MongoDB server...');
    // Select the database by name
    const db = client.db('TodoApp');

    /*db.collection('Todos').insertOne({
        text: "Some other Task",
        completed: false
    }, (err, result) => {
        if(err) {
            console.log('\x1b[91m%s\x1b[0m', 'Unable to add to MongoDB, err: ' + err);
            return;
        }

        console.log('\x1b[32m%s\x1b[0m', "Task added successfully");
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    db.collection('Users').insertOne({
        name: "Vivek Kaushik",
        age: 20,
        location: "Badarkha, Baghpat, Uttar Pradesh"
    }, (err, result) => {
        if(err) {
            console.log('\x1b[91m%s\x1b[0m', 'Error while saving to database, err: ' + err);
            return;
        }

        console.log('\x1b[32m%s\x1b[0m', "User added successfully");
        console.log(JSON.stringify(result.ops, undefined, 2));
    });*/


    db.collection('Users').find().toArray((err, doc) => {
        if(err) {
            console.log('\x1b[91m%s\x1b[0m', 'Error while processing query database, err: ' + err);
            return;
        }

        console.log(JSON.stringify(doc, undefined, 2));
    });

    client.close();
});