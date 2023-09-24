// import mongoose from "mongoose";

import db from "./db.js";

function save_purchases() {
	data = {};
	document.getElementsByTagName("input").forEach((input) => {
		if (input.type !== "submit") {
			data[input.name] = input.value;
		}
	});
	db.collection.insertOne("purchases").insertOne(data);
}

document.getElementById("submit").addEventListener("click", save_purchases);

// async function save_purchases(data) {
// 	await db
// 		.collection("purchases")
// 		.insertOne({
// 			produk: data.produk,
// 			produk_unggulan: data.produk_unggulan,
// 			nama_toko: data.nama_toko,
// 			motto: data.motto,
// 			alamat: data.alamat,
// 			pesanan: data.pesanan,
// 		})
// 		.catch((err) => console.log(err));
// }

// export default save_purchases;
// window.save_purchases = save_purchases;
