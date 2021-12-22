// Update with your config settings.

module.exports = {
  client: 'pg',
  connection: process.env.DATABASE_URL,
  migrations: {
      directory: './migrations',
      tableName: 'knex_migrations'
    }
};
