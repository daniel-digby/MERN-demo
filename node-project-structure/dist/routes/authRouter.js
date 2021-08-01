"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express = require("express");
// require the controller
const authController = require("../controllers/authController");
// define a router
const authRouter = express.Router();
exports.authRouter = authRouter;
// handle POST req for login
authRouter.post("/login", authController.login);
// handle POST req for logout
authRouter.post("/logout", authController.logout);
//# sourceMappingURL=authRouter.js.map