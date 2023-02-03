const stripe = require("stripe")(process.env.STRIPE_SECTRET_KEY);

exports.handler = async (e) => {
  try {
    const { amount } = JSON.parse(e.body);

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "EUR",
      payment_method_types: ["card"],
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ paymentIntent }),
    };
  } catch (error) {
    console.log({ error });

    return {
      status: 400,
      body: JSON.stringify({ error }),
    };
  }
};
