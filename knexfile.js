// Update with your config settings.



require('dotenv').config();

module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DB_URL,
    migrations: {
      directory: './knex/migrations',
    },
    seeds: { directory: './knex/seeds' },
  },

  testing: {
    client: 'pg',
    connection: process.env.DB_URL,
    migrations: {
      directory: './knex/migrations',
    },
    seeds: { directory: './knex/seeds' },
  },

  production: {
    client: 'pg',
    connection: process.env.DB_URL,
    migrations: {
      directory: './knex/migrations',
    },
    seeds: { directory: './knex/seeds' },
  },
};

