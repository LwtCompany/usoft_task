
export default {
  testing: {
    client: "pg",
    connection:  {
      // connectionString: process.env.DATABASE_URL,
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      database: process.env.DB_NAME,
      password: process.env.DB_PASSWORD
    },
    migrations: {
      directory: "src/db/migrations",
    },
    seeds: {
      directory: "src/db/seeds",
    },
  },
  local: {
    client: "pg",
    connection:  {
      // connectionString: process.env.DATABASE_URL,
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      database: process.env.DB_NAME,
      password: process.env.DB_PASSWORD
    },
    migrations: {
      directory: "src/db/migrations",
    },
    seeds: {
      directory: "src/db/seeds",
    },
  },
  production: {
    client: "pg",
    connection:  {
      // connectionString: process.env.DATABASE_URL,
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      database: process.env.DB_NAME,
      password: process.env.DB_PASSWORD
    },
    migrations: {
      directory: "src/db/migrations",
    },
    seeds: {
      directory: "src/db/seeds",
    },
  },
} ;
