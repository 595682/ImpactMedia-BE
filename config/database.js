module.exports = ({ env }) => {
  const environment = env("NODE_ENV");

  if (environment === "production") {
    return {
      connection: {
        client: "mysql",
        connection: {
          host: env("DATABASE_HOST"),
          port: env.int("DATABASE_PORT"),
          database: env("DATABASE_NAME"),
          user: env("DATABASE_USERNAME"),
          schema: env("DATABASE_SCHEMA", "public"),
          password: env("DATABASE_PASSWORD"),
          ssl: {
            rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false), // For self-signed certificates
          },
        },
        debug: true,
      },
    };
  } else {
    return {
      connection: {
        client: "sqlite",
        connection: {
          filename: env("DATABASE_FILENAME", ".tmp/data.db"),
        },
        useNullAsDefault: true,
        debug: false,
      },
    };
  }
};
