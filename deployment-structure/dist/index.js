"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
app.use(express.json());
const authRouter = require("./routes/authRouter");
app.use("/api/auth", authRouter);
app.get("/", (_, res) => {
    res.status(200).send("hello world");
});
app.listen(port, () => console.log(`Running on port ${port}`));
//# sourceMappingURL=index.js.map