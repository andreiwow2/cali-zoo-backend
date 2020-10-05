const bcrypt = require('bcrypt');

exports.seed = function(knex) {
  return knex('accounts').del()
    .then(function () {
      
      const salt = bcrypt.genSaltSync();
      const hash = bcrypt.hashSync('somepassword', salt);

      return knex('accounts').insert([
        { userName: 'andrei', userPassword: hash, userEmail: 'andreigames9@gmail.com' }
      ]);
    });
};
