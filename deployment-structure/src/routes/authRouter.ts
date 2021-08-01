import express = require("express");

// require the controller
import authController = require("../controllers/authController");

// define a router
const authRouter = express.Router();

// handle POST req for login
authRouter.post("/login", authController.login);

// handle POST req for logout
authRouter.post("/logout", authController.logout);

// export the router
export { authRouter };
