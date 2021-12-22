// Update with your config settings.

module.exports = {
  client: 'pg',
  connection: process.env.DATABASE_URL || {user:'hiruy',database:'demo',password:'2012'}
};
