const emailTemplate = {
  text: `Somebody sent you a request from the IMPACT MEDIA site
  The following data was sent:
  First Name: <%= request.firstName %>
  Last Name: <%= request.lastName %>
  Email: <%= request.email %>
  Request: <%= request.description %>
  Any particular service: <%= request.service %>
  `,
  html: `<h1>Somebody sent you a request from the IMPACT MEDIA site</h1>
  <h2>The following data was sent:</h2>
      <p>First Name: <%= request.firstName %><p>
      <br />
      <p>Last Name: <%= request.lastName %><p>
      <br />
      <p>Email: <%= request.email %><p>
      <br />
      <p>Request: <%= request.description %><p>
      <br />
      <p>Any particular service: <%= request.service %><p>
      `,
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
