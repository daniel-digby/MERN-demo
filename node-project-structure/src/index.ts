import express = require("express");
import { authRouter } from "./routes/authRouter";

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.use("/api/auth/", authRouter);

app.get("/", (_, res) => {
	res.status(200).send("hello world");
});

app.listen(port, () => console.log(`Running on port ${port}`));
