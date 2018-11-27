// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: postgresql//localhost/studentlist

  },

  production: {
    client: 'postgresql',
    connection: process.env.studentlist,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
