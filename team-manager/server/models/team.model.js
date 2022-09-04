const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "name is required"],
		minlength: [2, "name must be at least 2 characters long"]
	},
	position: { type: String },
	games: { type: Array },




},

	{ timestamps: true }
);

const team = mongoose.model("team", teamSchema);

module.exports = team;