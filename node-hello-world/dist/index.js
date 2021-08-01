"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
const port = 8080;
app.get("/", (_, res) => {
    res.status(200).send("hello world");
});
app.get("/goodbye", (_, res) => {
    res.status(200).send("goodbye world");
});
app.listen(port, () => console.log(`Running on port ${port}`));
//# sourceMappingURL=index.js.map