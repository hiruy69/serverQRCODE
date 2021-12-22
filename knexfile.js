// Update with your config settings.

module.exports = {
  client: 'pg',
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized:false },
    }
  ,
  migrations: {
      directory: './migrations',
      tableName: 'knex_migrations'
    }
};
