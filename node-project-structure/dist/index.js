"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const authRouter_1 = require("./routes/authRouter");
const app = express();
const port = process.env.PORT || 8080;
app.use(express.json());
app.use("/api/auth", authRouter_1.authRouter);
app.get("/", (_, res) => {
    res.status(200).send("hello world");
});
app.listen(port, () => console.log(`Running on port ${port}`));
//# sourceMappingURL=index.js.map