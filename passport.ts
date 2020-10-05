import passport from 'passport';
import { knex } from './knex/knex';

export default () => {
    passport.serializeUser((user: any, done: any) => {
        console.log('inside ser');
        done(null, user.userId);
    });

    passport.deserializeUser((userId: any, done: any) => {
        console.log('inside des');
        knex('accounts').where({userId: userId}).first()
        .then((user) => { done(null, user); console.log(user)})
        .catch((err) => { done(err, null); console.log(`deserialoize Error ${err}`) });
    });
}