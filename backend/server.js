/* eslint-disable no-unused-vars */
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { MongoClient, ServerApiVersion } from 'mongodb';
import { mongoose } from 'mongoose';
import dotenv from 'dotenv';
import ENV from './ENV.js';
dotenv.config();

// import all the routes
import userRoute from './route/userRoutes.js';
// import postRoute from './route/postRoutes.js';
import followerRoute from './route/followerRoutes.js';


const PORT = 5001;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// const dbConnection = "mongodb+srv://uniconadmin:123@unicondb.lwxmdyy.mongodb.net/?retryWrites=true&w=majority&appName=uniconDB";
// const dbConnection = Env.DB_CONNECTION;

const db = new MongoClient(ENV.DB_CONNECTION, {
serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
}
});
async function run() {
try {
    // Connect the client to the server	(optional starting in v4.7)
    await db.connect();
    // Send a ping to confirm a successful connection
    await db.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
} finally {
    // Ensures that the client will close when you finish/error
    await db.close();
}
}
run().catch(console.dir);

mongoose.connect(ENV.DB_CONNECTION, {

serverApi: {
    version: '1',
    strict: true,
    deprecationErrors: true,
}
});

mongoose.connection.on('connected', () => {
console.log('Mongoose is connected to MongoDB!');
});

mongoose.connection.on('error', (err) => {
console.log('Mongoose connection error: ', err);
});

mongoose.connection.on('disconnected', () => {
console.log('Mongoose is disconnected from MongoDB.');
});

// Routes
app.use('/api/user', userRoute);
app.use('/api/follower', followerRoute);
// app.use('/api/post', postRoute);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});




