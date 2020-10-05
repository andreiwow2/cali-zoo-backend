import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';

import init = require('../passport');
import { knex } from '../knex/knex';
import * as bcrypt from 'bcrypt';

const options = {
    usernameField: 'email',
    passwordField: 'password'
};

init.default();

export default passport.use(new LocalStrategy(options, (username, password, done) => {
    knex('accounts').where({userEmail: username}).first()
    .then((user) => {
        if (!user) return done(null, false)
        if(!bcrypt.compareSync(password, user.userPassword)) {
            return done(null, false);
        }
        else {
            return done(null, user);
        }
    })
    .catch((err) => { return done(err); });
}));