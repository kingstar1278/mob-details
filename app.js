const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');


app.use(bodyParser.json());

//import routes
const postsRoute = require('./routes/posts');



app.use('/posts', postsRoute);
//route



app.get('/',(req,res) => {
    res.send('welcome to gunmart');
});


//connect to DB 
mongoose.connect( process.env.DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology : true}, 
() =>console.log('connected to DB')
);
//how to start listening

app.set('port', process.env.PORT || 4200)



app.listen(app.get('port'), () => console.log('listening on port ' + app.get('port')))
