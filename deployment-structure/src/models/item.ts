const mongoose = require("mongoose");

// define the Item schema
const itemSchema = new mongoose.Schema({
	name: { type: String, required: true },
	photo: { type: String, required: true },
	tagline: { type: String, required: true },
	description: { type: String, required: true },
	price: { type: Number, required: true },
	category: { type: String, required: true },
});

// compile into Model
const Item = mongoose.model("Item", itemSchema);

module.exports = Item;