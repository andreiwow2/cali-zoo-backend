"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var userController_1 = require("./controllers/userController/userController");
var router = express_1.Router();
router.get('/', function (req, res) {
    return res.send('It worked!');
});
router.get('/test', userController_1.UserController.isAuthenticated);
router.post('/login', userController_1.UserController.userLogIn);
router.post('/admin/logout', function (req, res) {
    if (req.session)
        req.session.destroy(function (err) {
            res.status(200).json({ message: "User logged out" });
            if (err)
                console.log('[/admin/logout]', err);
        });
});
exports.default = router;
