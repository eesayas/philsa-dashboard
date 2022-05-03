const path = require("path");

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "philsa-db"),
      user: env("DATABASE_USERNAME", "philsa"),
      password: env("DATABASE_PASSWORD"),
    },
    useNullAsDefault: true,
  },
});
