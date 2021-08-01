const express = require("express");
// define a router
const authRouter = express.Router();
// require the controller
const authController = require("../controllers/authController");
// handle POST req for login
authRouter.post("/login", authController.login);
// handle POST req for logout
authRouter.post("/logout", authController.logout);
// export the router
module.exports = authRouter;
//# sourceMappingURL=authRouter.js.map