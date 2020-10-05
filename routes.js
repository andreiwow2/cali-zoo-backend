"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var userController_1 = require("./controllers/userController/userController");
var router = express_1.Router();
router.get('/', function (req, res) {
    return res.send('It worked!');
});
router.get('/test', userController_1.userCreation);
router.post('/login', userController_1.userLogIn);
exports.default = router;
