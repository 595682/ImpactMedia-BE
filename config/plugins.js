module.exports = ({ env }) => ({
  "generate-data": {
    enabled: true,
  },
  email: {
    provider: "smtp",
    providerOptions: {
      host: "smtp.gmail.com", //SMTP Host
      port: 465, //SMTP Port
      secure: true,
      username: "my.username@gmail.com",
      password: "my.password",
      rejectUnauthorized: true,
      requireTLS: true,
      connectionTimeout: 1,
    },
    settings: {
      from: "my.username@gmail.com",
      replyTo: "my.username@gmail.com",
    },
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
