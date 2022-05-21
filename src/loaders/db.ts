import mongoose from "mongoose";
import config from "../config";
import Post from "../models/Post";

const connectDB = async () => {
    try {
        await mongoose.connect(config.mongoURI);

        mongoose.set("autoCreate", true);

        console.log("Mongoose Connected ...");

        Post.createCollection().then(function (collection) {
            console.log("Post Collection is created!");
        });
    } catch (err: any) {
        console.error(err.message);
        process.exit(1);
    }
};

export default connectDB;
