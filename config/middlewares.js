module.exports = [
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        directives: {
          "connect-src": ["'self'", "https:", " https://fs.impact-media.eu"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            ` https://fs.impact-media.eu`,
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            ` https://fs.impact-media.eu`,
          ],
          "default-src": [
            "'self'",
            "data:",
            "blob:",
            ` https://fs.impact-media.eu`,
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  /* "strapi::cors", */
  {
    name: "strapi::cors",
    config: {
      enabled: true,
      header: "*",
      origin: ["https://fs.impact-media.eu"],
    },
  },
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
