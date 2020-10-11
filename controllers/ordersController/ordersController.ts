import express from 'express';
import { Request, Response } from 'express';
import { knex } from '../../knex/knex';

interface Order {
    id: number,
    orderId: string,
    orderedByDbId: number,
    productDbIdOrdered: number,
    orderStatus: 'Pending' | 'Processing' | 'Delivered' | 'Shipped' | 'Returned' | 'Canceled',
    placed_at: string
}

export class ordersController {

    public static loadOrders(req: Request, res: Response): void{
        knex.select().table('orders_table').limit(20).orderBy('id', 'desc').then((tables) => {
            res.status(200).send(tables);
        });
    }
}