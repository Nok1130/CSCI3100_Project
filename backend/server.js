/* eslint-disable no-unused-vars */
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { Admin, MongoClient, ServerApiVersion } from "mongodb";
import { mongoose } from "mongoose";
import dotenv from "dotenv";
import ENV from "./ENV.js";
dotenv.config();

// import all the routes
import userRoutes from "./route/userRoutes.js";
import postRoutes from './route/postRoutes.js';
import followerRoutes from "./route/followerRoutes.js";
import adminRoutes from "./route/adminRoutes.js";
import messageTextRoutes from "./route/messageTextRoutes.js";
import groupRoutes from "./route/groupRoutes.js";

const PORT = 8080;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use( express.static( "public" ) );

app.get('/', (request, response) => {
  console.log(request)
  return response.status(234).send('Unicon')
})

const db = new MongoClient(ENV.DB_CONNECTION, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await db.connect();
    // Send a ping to confirm a successful connection
    await db.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await db.close();
  }
}
run().catch(console.dir);

mongoose.connect(ENV.DB_CONNECTION, {
  serverApi: {
    version: "1",
    strict: true,
    deprecationErrors: true,
  },
});

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected to MongoDB!");
});

mongoose.connection.on("error", (err) => {
  console.log("Mongoose connection error: ", err);
});

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose is disconnected from MongoDB.");
});

// Routes
app.use("/api/user", userRoutes);
app.use("/api/follower", followerRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/post", postRoutes);
app.use("/api/messageText", messageTextRoutes)
app.use("/api/group", groupRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
