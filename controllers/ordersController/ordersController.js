"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordersController = void 0;
var knex_1 = require("../../knex/knex");
var ordersController = /** @class */ (function () {
    function ordersController() {
    }
    ordersController.loadOrders = function (req, res) {
        knex_1.knex.select().table('orders_table').limit(20).orderBy('id', 'desc').then(function (tables) {
            res.status(200).send(tables);
        });
    };
    return ordersController;
}());
exports.ordersController = ordersController;
