module.exports = [
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        directives: {
          "connect-src": [
            "'self'",
            "https:",
            "blob:",
            "https://fs.impact-media.eu",
          ],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            `https://fs.impact-media.eu`,
            `strapi.io`,
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            `https://fs.impact-media.eu`,
            `strapi.io`,
          ],
          "default-src": [
            "'self'",
            "data:",
            "blob:",
            `https://fs.impact-media.eu`,
            `strapi.io`,
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  /* "strapi::cors", */
  "strapi::poweredBy",
  {
    name: "strapi::cors",
    config: {
      enabled: true,
      headers: "*",
      origin: ["https://backend.impact-media.eu", "https://fs.impact-media.eu"],
    },
  },

  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
