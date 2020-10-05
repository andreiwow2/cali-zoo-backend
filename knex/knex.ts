const environment = process.env.NODE_ENV || 'development';
const config = require('../knexfile')[environment];
import kn = require('knex');
export const knex = kn(config);