module.exports = ({ env }) => ({
  "generate-data": {
    enabled: true,
  },
  email: {
    config: {
      provider: "strapi-provider-email-smtp",
      providerOptions: {
        host: env("EMAIL_HOST"), //SMTP Host
        port: env("EMAIL_PORT", 123), //SMTP Port
        secure: true,
        username: env("EMAIL_USER"),
        password: env("EMAIL_PASSWORD"),
        rejectUnauthorized: true,
        requireTLS: true,
        connectionTimeout: 1,
      },
    },
    settings: {
      from: env("EMAIL_FROM_ADDRESS"),
      replyTo: env("EMAIL_REPLYTO_ADDRESS"),
    },
  },
  seo: {
    enabled: true,
  },
  "preview-button": {
    enabled: true,
    config: {
      contentTypes: [
        {
          uid: "api::portfolio-element.portfolio-element",
          draft: {
            query: {
              type: "portfolio",
            },
            targetField: "slug",
          },
        },
        {
          uid: "api::blog-article.blog-article",
          draft: {
            targetField: "slug",
            query: {
              type: "blog",
            },
          },
        },
      ],
    },
  },
});
