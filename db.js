import mongoose from "mongoose";
import dotenv from "dotenv";
// import path;

// dotenv.config({ path: "../.env" });
// dotenv.config({ path: path.join(__) });
dotenv.config();

console.log(process.env.MONGODB_ADMIN);

mongoose.connect(
	`mongodb+srv://someguy:F9CsrTJEmukpCVRc@cluster0.l8awxjs.mongodb.net/pojok-jatirogo?retryWrites=true&w=majority`
);

const conn = mongoose.connection;

conn.on("connected", () => {
	console.log("Successfully connected to MongoDB");
});

conn.on("disconnected", () => {
	console.log("Successfully disconnected to MongoDB");
});

conn.on("error", console.error.bind(console, "Connection error:"));

export default conn;
