module.exports = ({ env }) => ({
  "generate-data": {
    enabled: false,
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
      settings: {
        defaultFrom: env("EMAIL_FROM_ADDRESS", "matthias.tonitz@impact-media.be"),
        defaultReplyTo: env("EMAIL_REPLYTO_ADDRESS", "matthias.tonitz@impact-media.be"),
      },
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
  upload: {
    config: {
      provider: "strapi-provider-upload-ftp-v2",
      providerOptions: {
        host: env("FTP_HOST"),
        port: env("FTP_PORT"),
        user: env("FTP_USER"),
        password: env("FTP_PASSWORD"),
        basePath: env("FTP_BASEPATH"),
        baseUrl: env("FTP_BASEURL"),
      },
    },
  },
});
