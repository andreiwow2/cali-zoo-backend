import { Request, Response } from 'express';
import * as fs from 'fs';
import * as Path from 'path';
import passport = require('../../auth/local');
import { session } from 'passport';


export const userCreation = async (req: Request, res: Response) => {
    console.log('heree');
    console.log(req.user);
    console.log(req.session);
    console.log(req.headers);
    res.status(200).send(req.isAuthenticated())
    return;
}

export const userDeletion = async (req: Request, res: Response) => {

    return;
}

export const userLogIn = async (req: Request, res: Response) => {
    
    passport.default.authenticate('local', (err, user, info) => {
        if (err) { res.status(500).send('error'); console.log(err)}
        if (!user) { res.status(404).send('User not found!'); }
        if (user)
        {
            req.logIn(user, function (err) {
                if (err) { res.status(500).send('error'); console.log(err)}
                if(req.session){ 
                    req.session.save((err) => {
                        console.log(err);
                    });
                    res.status(200).send(req.session.cookie);
                    console.log(req.session);
                    console.log(req.sessionID);
                } else { res.status(500).send('error with session, no session'); }
            });
        }
    })(req, res);
}