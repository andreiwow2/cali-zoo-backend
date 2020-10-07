"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
var passport = require("../../auth/local");
var BaseController_1 = require("../models/BaseController");
var UserController = /** @class */ (function (_super) {
    __extends(UserController, _super);
    function UserController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // protected async executeImpl (req: Request, res: Response): Promise<void | any> {
    //     try {
    //         if (!req.body) return this.isAuthenticated(req, res);
    //         const { email, password } = req.body;
    //         knex('accounts').count('userId').first().then((total: any) => {
    //             if(total.count) this.userLogIn(req, res)
    //         });
    //     } catch(err) {
    //     }
    // }
    UserController.isAuthenticated = function (req, res) {
        try {
            //const code = (req.isAuthenticated() ? 500 : 200);
            res.status(200).send(req.isAuthenticated());
        }
        catch (err) {
            console.log(err);
        }
    };
    UserController.userLogIn = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            passport.default.authenticate('local', function (err, user, info) {
                if (err) {
                    res.status(500).send('error');
                    console.log(err);
                }
                if (!user) {
                    res.status(404).send('User not found!');
                }
                if (user) {
                    req.logIn(user, function (err) {
                        if (err) {
                            res.status(500).send('error');
                            console.log(err);
                        }
                        if (req.session) {
                            req.session.save(function (err) {
                                console.log(err);
                            });
                            res.status(200).send(req.session.cookie);
                            console.log(req.session);
                            console.log(req.sessionID);
                        }
                        else {
                            res.status(500).send('error with session, no session');
                        }
                    });
                }
            })(req, res);
            return [2 /*return*/];
        });
    }); };
    return UserController;
}(BaseController_1.BaseController));
exports.UserController = UserController;
// export const userCreation = async (req: Request, res: Response) => {
//     console.log('heree');
//     console.log(req.user);
//     console.log(req.session);
//     console.log(req.headers);
//     res.status(200).send(req.isAuthenticated())
//     return;
// }
// export const userDeletion = async (req: Request, res: Response) => {
//     return;
// }
// export const userLogIn = async (req: Request, res: Response) => {
//     passport.default.authenticate('local', (err, user, info) => {
//         if (err) { res.status(500).send('error'); console.log(err)}
//         if (!user) { res.status(404).send('User not found!'); }
//         if (user)
//         {
//             req.logIn(user, function (err) {
//                 if (err) { res.status(500).send('error'); console.log(err)}
//                 if(req.session){ 
//                     req.session.save((err) => {
//                         console.log(err);
//                     });
//                     res.status(200).send(req.session.cookie);
//                     console.log(req.session);
//                     console.log(req.sessionID);
//                 } else { res.status(500).send('error with session, no session'); }
//             });
//         }
//     })(req, res);
// }
