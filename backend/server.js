const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.port || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB database connection established successfully'))
.catch(err => console.log('Error in connection : ', err));

/*const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});*/

const tasksRouter = require('./routes/tasks');
app.use('/tasks', tasksRouter);;

app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
});