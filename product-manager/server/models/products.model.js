const mongoose = require("mongoose");

const ProductsSchema = new mongoose.Schema({
	title:{
		type:String,
		required:[true,"title is required"],
		minlength:[2,"title must be at least 2 characters long"]
	},
	price:{
		type:Number,
		required:[true,"price is required"]
	},
	description:{
        type:String,
		required:[true,"description is required"],
		minlength:[10,"description must be at least 10 characters long"]
	},
	
},
{ timestamps:true}
);

const Products = mongoose.model("Products", ProductsSchema);

module.exports = Products;