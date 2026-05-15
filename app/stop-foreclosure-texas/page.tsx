import type { Metadata } from "next";
import SituationLayout from "@/components/SituationLayout";
import type { FaqItem } from "@/components/CityFaq";

export const metadata: Metadata = {
  title: "Stop Foreclosure in Texas | Sell Your House Fast | Honest Offer",
  description:
    "Facing foreclosure in Texas? Selling before the auction can protect your credit and recover your equity. We close fast — sometimes in 7 days. Cash offer in 24 hours.",
  alternates: { canonical: "https://dallas.honestofferhome.com/stop-foreclosure-texas" },
  robots: { index: true, follow: true },
};

const FAQ: FaqItem[] = [
  {
    q: "How much time do I have before foreclosure in Texas?",
    a: "Texas is a non-judicial foreclosure state — the lender doesn't have to go through court, and the process moves fast. From a Notice of Default to auction can be as little as 41 days after the lender sends you the required notices. Texas foreclosures take place on the first Tuesday of each month. If you've received a Notice of Default or Notice of Sale, time is short — but it's still on your side if you act now.",
  },
  {
    q: "Will selling pay off the mortgage balance?",
    a: "That depends on what you owe versus what the house is worth. If you have equity, we pay off your mortgage at closing and wire you the difference. If you owe more than the house is worth (underwater), we can discuss a short sale process — but we'll be honest with you upfront about whether that's a realistic path.",
  },
  {
    q: "Will a sale stop the foreclosure process?",
    a: "Yes. Once we close, the proceeds pay off your mortgage lender and the foreclosure case is dismissed. A completed sale is the most effective way to stop a foreclosure and protect your credit from the far worse impact of an actual foreclosure on your record.",
  },
  {
    q: "I'm embarrassed about the situation. Will this be discreet?",
    a: "Completely. We don't advertise your home, we don't put a sign in the yard, and the sale stays off the MLS. The only people who know about it are you, us, and the title company.",
  },
];

export default function Page() {
  return (
    <SituationLayout
      brandTagline="Foreclosure Prevention · Texas"
      heroEyebrow="Protect your credit · Keep your equity · Close fast"
      headline={<>Stop Foreclosure in <em>Texas</em> — Sell Before the Auction</>}
      heroIntro="If you're behind on mortgage payments in Texas, selling your house is almost always better than letting foreclosure proceed. A sale pays off the lender, stops the case, and protects your credit from a foreclosure that can follow you for years. We close fast — sometimes in 7 days."
      detailEyebrow="Behind on payments in Texas?"
      detailHeading={<>Selling before foreclosure is the most powerful thing you can do to protect yourself.</>}
      detailParagraphs={[
        "A foreclosure in Texas stays on your credit report for up to seven years and can make renting, buying again, or even getting certain jobs much harder. Selling before the auction eliminates the foreclosure entirely — and if you have equity in the home, you walk away with money in your pocket instead of nothing.",
        "Texas is a non-judicial foreclosure state, which means the process moves fast — sometimes auction within 41 days of the default notice. That timeline cuts both ways: it leaves less room to wait, but a fast sale can absolutely stop the auction if you start the conversation early.",
        "We can close in as little as 7 days once paperwork is signed. We work directly with your lender's payoff department to ensure the mortgage is satisfied at closing. You don't need to handle any of that coordination yourself.",
      ]}
      faqItems={FAQ}
      ctaHeadline={<>Get a cash offer and <em>stop foreclosure</em> in Texas today.</>}
    />
  );
}
