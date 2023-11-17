import mailchannelsPlugin from "@cloudflare/pages-plugin-mailchannels";

export const onRequest = mailchannelsPlugin({
  personalizations: [
    {
      to: [{ name: "ACME Support", email: "steve@steveansell.co.uk" }],
    },
  ],
  from: { name: "Enquiry", email: "no-reply@example.com" },
  respondWith: () =>
    new Response(null, {
      status: 302,
      headers: { Location: "/thank-you" },
    }),
});
