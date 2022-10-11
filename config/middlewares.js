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
          "video-src": [
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
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
