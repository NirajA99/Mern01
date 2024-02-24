const express = require('express');
const server = express();
const cors = require('cors');
const db = require('./db/mongoose');


server.use(cors());
server.use(express.json());

server.use('/users', require('./routes/userRoutes'))
server.use('/blogs', require('./routes/blogRoutes'))


server.listen(4000 ,()=>{
    console.log('server started!');
});