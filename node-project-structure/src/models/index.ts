// Set up Mongoose
require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
	dbName: "node-project-demo",
});

const db = mongoose.connection;
db.on("error", (err: Error) => {
	console.error(err);
	process.exit(1);
});

db.once("open", async () => {
	console.log("Mongo connection started on " + db.host + ":" + db.port);
});

// Require individual models
require("./item");

export {};