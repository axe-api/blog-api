const dotenv = require("dotenv");
const knex = require("knex");
dotenv.config();

const config = {
  client: process.env.DB_CLIENT || "mysql",
  connection: {
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "user",
    password: process.env.DB_PASSWORD || "password",
    // database: process.env.DB_DATABASE || "database",
    filename: `${process.env.DB_DATABASE}.sqlite`, // For SQLite
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: "knex_migrations",
  },
};

const main = async () => {
  const db = knex(config);

  await db.raw("DROP DATABASE blog;");

  await db.raw(
    "CREATE DATABASE blog CHARACTER SET utf8 COLLATE utf8_general_ci;"
  );

  console.log("Done!");
  process.exit(0);
};

main();
