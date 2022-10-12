module.exports = () => {
  return async (ctx, next) => {
    console.info(
      "Connection email alert middleware hit! Trying to send alert email"
    );
    console.log(ctx.request.body);

    try {
      await strapi.plugins["email"].services.email.send({
        to: "istvan@boostern.com",
        from: process.env.EMAIL_FROM_ADDRESS,
        subject: "The Strapi Email plugin worked successfully",
        text: "Hello world!",
        html: "Hello world!",
      });

      console.log("Alert email sent");
    } catch (e) {
      console.error("Could not send alert email!");
      console.error(e);
    }
  };
};
