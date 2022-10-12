"use strict";

/**
 * connection router.
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::connection.connection", {
  config: {
    create: {
      middlewares: ["api::connection.connection-middleware"],
    },
  },
});
