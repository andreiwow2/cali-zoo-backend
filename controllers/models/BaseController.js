"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseController = void 0;
var BaseController = /** @class */ (function () {
    function BaseController() {
    }
    // protected abstract executeImpl (
    //     req: Request, res: Response
    // ): Promise<void | any>;
    // public async execute (req: Request, res: Response): Promise<void> {
    //     try {
    //         await this.executeImpl(req, res);
    //     } catch(err) {
    //         console.log(`[BaseController] Uncaught controller error`);
    //         console.log(err);
    //         this.fail(res, `An unexpected error occured.`);
    //     }
    // }
    BaseController.jsonResponse = function (res, code, message) {
        return res.status(code).json({ message: message });
    };
    BaseController.prototype.ok = function (res, dto) {
        if (!!dto) {
            res.type('application/json');
            return res.status(200).json(dto);
        }
        else {
            return res.sendStatus(200);
        }
    };
    BaseController.prototype.created = function (res) {
        return res.sendStatus(201);
    };
    BaseController.prototype.clientError = function (res, message) {
        return BaseController.jsonResponse(res, 400, message ? message : 'Unauthorized');
    };
    BaseController.prototype.unauthorized = function (res, message) {
        return BaseController.jsonResponse(res, 401, message ? message : 'Unauthorized');
    };
    BaseController.prototype.paymentRequired = function (res, message) {
        return BaseController.jsonResponse(res, 402, message ? message : 'Payment required');
    };
    BaseController.prototype.forbidden = function (res, message) {
        return BaseController.jsonResponse(res, 403, message ? message : 'Forbidden');
    };
    BaseController.prototype.notFound = function (res, message) {
        return BaseController.jsonResponse(res, 404, message ? message : 'Not found');
    };
    BaseController.prototype.conflict = function (res, message) {
        return BaseController.jsonResponse(res, 409, message ? message : 'Conflict');
    };
    BaseController.prototype.tooMany = function (res, message) {
        return BaseController.jsonResponse(res, 429, message ? message : 'Too many requests');
    };
    BaseController.prototype.todo = function (res) {
        return BaseController.jsonResponse(res, 400, 'TODO');
    };
    BaseController.prototype.fail = function (res, error) {
        console.log(error);
        return res.status(500).json({
            message: error.toString()
        });
    };
    return BaseController;
}());
exports.BaseController = BaseController;
