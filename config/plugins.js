module.exports = ({ env }) => ({
  "generate-data": {
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
