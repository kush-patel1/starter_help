//const express = require('express');
//const server = express();
const userDatabase = require('mysql');

const connection = userDatabase.createConnection({
    host: 'localhost',
    user: 'WebAdmin',
    password: 'Web_Project24',
    database: 'careerDatabase'
});

connection.connect(function(err){
    if(err) {
        console.error('Error connecting to the database:', err.message);
        return;
    };
    console.log("Connected to Database!");
    connection.query("CREATE DATABASE userDatabase", function (err, result){
        if(err) {
            console.error('Error creating the database:', err.message);
            return;
        };
        console.log("Database created")
    });
})

//server.get('/', (req, res) => {res.send('Root node')});

//const port = process.env.PORT || 3000;
//server.listen(port, () => {console.log('Server is running on port ' + port)});