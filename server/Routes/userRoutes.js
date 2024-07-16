const express = require('express');
const router = express.Router();

const userController = require('../Controllers/usercontrollers.js');
router.get('/',async(req, res) => {res.send('welcome to server')})
router.post('/signup',userController.getUserData)
router.post('/login',userController.checkUserData)
router.post('/order',userController.getUserOrder)
//router.get('getinfo',userController.getInfo)
router.post('/updatename',userController.updateName)
router.post('/updatepassword',userController.updatePassword)
module.exports = router;