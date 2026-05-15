import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

// ─── Tracking IDs — set in .env.local, never hardcode here ───────────────────
// GTM_ID           → NEXT_PUBLIC_GTM_ID                       (e.g. GTM-XXXXXXX)
// GA4_ID           → NEXT_PUBLIC_GA4_ID                       (e.g. G-XXXXXXXXXX)
// CLARITY_ID       → NEXT_PUBLIC_CLARITY_ID                   (e.g. xxxxxxxxxx)
// GOOGLE_ADS_ID    → NEXT_PUBLIC_GOOGLE_ADS_ID                (e.g. AW-XXXXXXXXX)
// GADS_CONV_LABEL  → NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL  (e.g. AbCdEfGhIjK)
//                    Tahir provides both AW-XXXXXXXXX and the conversion label
// ─────────────────────────────────────────────────────────────────────────────
const GTM_ID           = process.env.NEXT_PUBLIC_GTM_ID;
const GA4_ID           = process.env.NEXT_PUBLIC_GA4_ID;
const CLARITY_ID       = process.env.NEXT_PUBLIC_CLARITY_ID;
const GOOGLE_ADS_ID    = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
const GADS_CONV_LABEL  = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL;
const META_PIXEL_ID    = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "1315456820690042";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Honest Offer Inc.",
  url: "https://dallas.honestofferhome.com",
  telephone: "+18887808805",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1720 Northwest Hwy",
    addressLocality: "Garland",
    addressRegion: "TX",
    postalCode: "75042",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 32.8635428,
    longitude: -96.6540402,
  },
  areaServed: [
    "Dallas, TX",
    "Fort Worth, TX",
    "Plano, TX",
    "Arlington, TX",
    "Irving, TX",
    "Garland, TX",
    "Mesquite, TX",
    "Carrollton, TX",
    "Richardson, TX",
    "Frisco, TX",
    "McKinney, TX",
    "Grand Prairie, TX",
    "Dallas County, TX",
    "Tarrant County, TX",
    "Collin County, TX",
    "Denton County, TX",
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "18:00",
  },
  description:
    "Locally owned cash home buyer serving Dallas, Fort Worth, and the entire DFW metroplex. Fair cash offers in 24 hours. No repairs, no agents, no fees. A+ BBB rated.",
  sameAs: ["https://honestofferhome.com", "https://www.google.com/maps/place/?cid=5992411411445359848"],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do you calculate your cash offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We look at what comparable renovated homes in your DFW neighborhood are selling for, subtract a realistic estimate of work needed, subtract our holding and selling costs, and keep a modest margin. We walk you through the math on the phone. No black box.",
      },
    },
    {
      "@type": "Question",
      name: "Is there really no obligation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Correct. You get a written offer and decide. If the number doesn't work, tell us and we're done. We don't hassle, we don't drip-campaign you, and we don't sell your info.",
      },
    },
    {
      "@type": "Question",
      name: "What if my house needs a lot of work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "That's our specialty. Foundation cracks (common in North Texas clay soil), leaking roofs from hail damage, fire damage, hoarder situations — we've bought all of it across the DFW metroplex. Don't clean, don't repair. Our contractors handle it after we close.",
      },
    },
    {
      "@type": "Question",
      name: "Who pays closing costs when selling in Texas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We do. Title fees, recording fees, prorated Texas property taxes — all of it. The offer amount we send you is what wires to your account. No deductions.",
      },
    },
    {
      "@type": "Question",
      name: "How fast can you close?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our fastest close on record is 5 business days. Most deals close in 10–21 days. If you need longer — 60 or 90 days — we can schedule that too.",
      },
    },
    {
      "@type": "Question",
      name: "How is Honest Offer different from Opendoor or national buyers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "iBuyers charge 5–8% service fees and renegotiate after inspection. We don't charge a service fee, we don't renegotiate, and we buy homes they won't touch. We're locally based in the Dallas-Fort Worth area.",
      },
    },
  ],
};

export const metadata: Metadata = {
  title: "We Buy Houses Dallas-Fort Worth | Cash Offer in 24 Hours | Honest Offer",
  description:
    "Get a fair cash offer for your Dallas or Fort Worth home in 24 hours. No repairs, no agents, no fees. Serving Dallas, Fort Worth, Plano, Arlington, Irving and all of DFW. A+ BBB rated.",
  openGraph: {
    title: "We Buy Houses Dallas-Fort Worth | Cash Offer in 24 Hours | Honest Offer",
    description:
      "Get a fair cash offer for your DFW home in 24 hours. No repairs, no agents, no fees. Local buyer, A+ BBB rated.",
    url: "https://dallas.honestofferhome.com",
    siteName: "Honest Offer",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "We Buy Houses Dallas-Fort Worth | Cash Offer in 24 Hours",
    description:
      "Get a fair cash offer for your DFW home in 24 hours. No repairs, no fees.",
  },
  alternates: {
    canonical: "https://dallas.honestofferhome.com",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#FAF5EB",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,400..900;1,400..900&display=swap"
          rel="stylesheet"
        />

        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        {/* Google Tag Manager <head> snippet — loads when GTM_ID is set */}
        {GTM_ID && (
          <Script id="gtm-head" strategy="beforeInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
          </Script>
        )}
      </head>
      <body>
        {/* Google Tag Manager <body> noscript fallback */}
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}

        {/* Meta Pixel (noscript fallback) */}
        {META_PIXEL_ID && (
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              alt=""
              src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
            />
          </noscript>
        )}

        <div className="grain" aria-hidden="true" />
        {children}

        {/* ── Phone-click conversion tracking — event delegation on all tel: links */}
        <Script id="phone-click-tracking" strategy="afterInteractive">
          {`document.addEventListener('click',function(e){
  var a=e.target.closest('a[href^="tel:"]');
  if(!a||typeof gtag!=='function')return;
  gtag('event','phone_call_click',{event_category:'engagement',event_label:a.getAttribute('href')});${
    GOOGLE_ADS_ID && GADS_CONV_LABEL
      ? `\n  gtag('event','conversion',{send_to:'${GOOGLE_ADS_ID}/${GADS_CONV_LABEL}'});`
      : ""
  }
});`}
        </Script>

        {/* ── GA4 + Google Ads — single gtag.js load, both configured ─── */}
        {(GA4_ID || GOOGLE_ADS_ID) && (
          <>
            <Script
              id="gtag-src"
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID ?? GOOGLE_ADS_ID}`}
            />
            <Script id="gtag-init" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());${GA4_ID ? `gtag('config','${GA4_ID}');` : ""}${GOOGLE_ADS_ID ? `gtag('config','${GOOGLE_ADS_ID}');` : ""}`}
            </Script>
          </>
        )}

        {/* ── Microsoft Clarity — loads when NEXT_PUBLIC_CLARITY_ID is set */}
        {CLARITY_ID && (
          <Script id="clarity" strategy="afterInteractive">
            {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${CLARITY_ID}");`}
          </Script>
        )}

        {/* ── Meta Pixel — fires PageView on load */}
        {META_PIXEL_ID && (
          <Script id="meta-pixel" strategy="afterInteractive">
            {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${META_PIXEL_ID}');fbq('track','PageView');`}
          </Script>
        )}
      </body>
    </html>
  );
}
