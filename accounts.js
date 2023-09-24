import bcrypt from "bcryptjs";
// import mongoose from "mongoose";
// import dotenv from "dotenv";

import db from "./db";

// dotenv.config({ path: "../.env" });
// dotenv.config();

// mongoose.connect(
// 	`mongodb+srv://${process.env.MONGODB_ADMIN}:${process.env.MONGODB_PASSWORD}@cluster0.l8awxjs.mongodb.net/pojok-jatirogo?retryWrites=true&w=majority`
// );

// const conn = mongoose.connection;

// conn.on("connected", () => {
// 	console.log("Successfully connected to MongoDB");
// });

// conn.on("disconnected", () => {
// 	console.log("Successfully disconnected to MongoDB");
// });

// conn.on("error", console.error.bind(console, "Connection error:"));

async function login() {
	const noTelp = document.getElementById("no-telp");
	const password = document.getElementById("password");
	const user = await conn.collection("users").findOne({ phone: noTelp });
	if (!user) {
		res.status(404).send({ message: "User Not Found" });
		return;
	}
	var checkPassword = bcrypt.compareSync(password, user.password);
	if (!checkPassword) alert("Invalid password!");
}

async function register() {
	const nama = document.getElementById("nama-daftar");
	const noTelp = document.getElementById("no-telp-daftar");
	const password = document.getElementById("password-daftar");
	await conn
		.collection("users")
		.findOne({ phone: noTelp })
		.then((results) => {
			if (results) {
				alert("User has already been registered");
			}
		});
	await conn
		.collection("users")
		.insertOne({
			name: nama,
			// address: req.body.address,
			phone: noTelp,
			password: bcrypt.hashSync(password, 8),
		})
		.catch((err) => {
			console.log(err);
		});
}

// export default { }
