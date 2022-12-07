import knex from 'knex';

const db = knex({
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    port: 3306,
    user: 'user01',
    password: 'admin',
    database: 'livraria',
  },
});

export default db;
