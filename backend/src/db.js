import knex from "knex";

const knexInstance = knex({
  client: "pg",
  connection: {
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
    pool: {
      min: 2,
      max: 30,
    },
  },
});

export default knexInstance;
