import mongoose from "mongoose";
import config from "../config";
import Post from "../models/Post";
import Review from "../models/Review";
import User from "../models/User";

const connectDB = async () => {
  try {
    await mongoose.connect(config.mongoURI);

    mongoose.set("autoCreate", true);
    console.log("Mongoose Connected ...");
  
    User.createCollection().then(function (collection) {
      console.log("USer Collection is created!");
    });
    
    Post.createCollection().then(function (collection) {
      console.log("Post Collection is created!");
    });

    Review.createCollection().then(function (collection) {
      console.log("Review collection created");
    });
  } catch (err: any) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;
