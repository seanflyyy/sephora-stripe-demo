import {NextResponse} from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {items} = body;

    if (!items || items.length === 0) {
      return NextResponse.json(
        {error: "Please provide items to checkout"},
        {status: 400}
      );
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      line_items: items.map((item: any) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: item.name,
            images: [item.image],
          },
          unit_amount: Math.round(item.price * 100),
        },
        quantity: item.quantity,
      })),
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/cart`,
    });

    return NextResponse.json({sessionId: session.id});
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({error: "Something went wrong"}, {status: 500});
  }
}
