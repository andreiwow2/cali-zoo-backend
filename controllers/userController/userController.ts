import { Request, Response } from 'express';
import passport = require('../../auth/local');
import { BaseController } from '../models/BaseController';
import { User } from '../../helpers/interfaces/User';
import { knex } from '../../knex/knex';




export class UserController extends BaseController {

    static isAuthenticated(req: Request, res: Response) {
        try {
            res.status(200).send(req.isAuthenticated());
        } catch(err) {
            console.log(err);
        }
    }

    static userLogIn = async (req: Request, res: Response) => {
    
        passport.default.authenticate('local', (err, user, info) => {
            if (err) { res.status(500).send('error'); console.log(err)}
            if (!user) { res.status(404).send('User not found!'); }
            if (user)
            {
                req.logIn(user, function (err) {
                    if (err) { res.status(500).send('error'); console.log(err)}
                    if(req.session){ 
                        req.session.save((err) => {
                            
                        });
                        res.status(200).send(req.session.cookie);
                    } else { res.status(500).send('error with session, no session'); }
                });
            }
        })(req, res);
    }
}