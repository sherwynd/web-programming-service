const express = require("express");
const router = express.Router();

//Validation

//Controller
const authController = require("../controllers/auth/authController");
//auth

router.get("/getAccount", authController.getAllAccount);
router.get("/getAccount/:refId", authController.getAccount);
router.get("/getToken", authController.authenticateToken); //Get Access Token
router.post("/refreshToken", authController.refreshToken); //Create New Access Token
router.post("/registerAccount", authController.registerAccount);
router.post("/loginAccount", authController.loginAccount);
router.delete("/logoutAccount", authController.logoutAccount);
router.patch("/editAccount/:refId", authController.editAccount); //Edit Account
router.get("/findUser/:refId", authController.findUser); //Get username
router.post("/forgotPassword/:refId", authController.forgotPassword);
router.delete("/deleteAccount/:id", authController.deleteAccount);

module.exports = router;
