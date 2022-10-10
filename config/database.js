module.exports = ({ env }) => {
  const environment = env("NODE_ENV");

  if (environment === "production") {
    return {
      connection: {
        client: "mysql",
        connection: {
          host: env("DATABASE_HOST", "127.0.0.1"),
          port: env.int("DATABASE_PORT", 5432),
          database: env("DATABASE_NAME", "strapi"),
          user: env("DATABASE_USERNAME", "strapi"),
          password: env("DATABASE_PASSWORD", "strapi"),
          schema: env("DATABASE_SCHEMA", "public"), // Not required
          ssl: {
            rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false), // For self-signed certificates
          },
        },
        debug: false,
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
