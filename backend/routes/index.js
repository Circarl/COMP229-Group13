var express = require('express');
var router = express.Router();
const userController = require("../controllers/userController");

/* GET home page. */
let indexController = require('../controller/index');
router.get('/', indexController.displayMainPage);
router.get('/home', indexController.displayHomePage);
router.get('/about', indexController.displayAboutPage);

router.get('/login' , indexController.displayLoginPage);
router.post('/login', indexController.processLoginPage);

router.get('/register' , indexController.displayRegisterPage);
router.post("/register", userController.signUp);

router.get('/logout', indexController.performLogout);


module.exports = router;
