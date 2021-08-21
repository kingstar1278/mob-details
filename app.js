const express = require("express");
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv/config');

app.use(cors());
app.use(bodyParser.json());

const postsRoute = require('./routes/posts');

app.use('/posts' , postsRoute);



app.get('/' , (req,res) => {
    res.send("Getting mobile details")
});





mongoose.connect(
    process.env.DB_CONNECTION, 
    { useUnifiedTopology: true , useNewUrlParser : true} ,

    () => console.log('connected to DB!')
);



app.set('port' , process.env.PORT || 4200 )


app.listen(app.get('port'), () => console.log('listening on port' + app.get('port')));