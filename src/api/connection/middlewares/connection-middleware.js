const emailTemplate = {
  text: `Welcome to mywebsite.fr!
      Your account is now linked with: <%= request.email %>.`,
  html: `<h1>Welcome to mywebsite.fr!</h1>
      <p>Your account is now linked with: <%= request.email %>.<p>`,
};

module.exports = () => {
  return async (ctx, next) => {
    console.info(
      "Connection email alert middleware hit! Trying to send alert email"
    );
    console.log(ctx.request.body);

    /* {
ctx.request.body= {
  isQuot:Boolean
  firstName:String
  lastName:String
  email:String
  description:String
  service:String
}
} */

    try {
      await strapi.plugins["email"].services.email.sendTemplatedEmail(
        {
          to: "istvan@boostern.com",
          from: process.env.EMAIL_FROM_ADDRESS,
        },
        {
          ...emailTemplate,
          subject: ctx.request.body.isQuot
            ? "New quotation request from the IMPACT MEDIA site"
            : "New contact request from the IMPACT MEDIA site",
        },
        {
          request: ctx.request.body,
        }
      );

      console.log("Alert email sent");
    } catch (e) {
      console.error("Could not send alert email!");
      console.error(e);
    }
  };
};
