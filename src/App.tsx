import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Login from "./pages/Login";

const COMMITMENT_STEPS = [
  {
    id: "we-are-sprnt",
    label: "we are sprnt,",
    detail:
      "whether you're shipping from agege to lekki, or from lagos to dakar, we've got you. we're also here to break the mold of boring courier services. we've got packaging to intrigue your customers, the latest tech in the business, flexible time slots, a large network of city-centre hubs, 24/7 support, carbon offsetting by recycling... did i mention lightning speed? the sprnt is not just a brand name.",
  },
  {
    id: "global-logistics",
    label: "a logistics technology",
    detail:
      "yes, the complex web of supply chains is the backbone of thriving businesses, but we already serve that. we started as a simple delivery solution for local businesses in lagos; the commercial and entertainment capital of africa. we know how to be cool. even though we are now an international logistics operation.",
  },
  {
    id: "courier-company",
    label: "and courier company,",
    detail:
      "upgrading to us preserves the core of your system, yet gives your customers a taste of another world. we don't just take your product to your customer; we let them know they're patronising quality. we let them know you have taste. because you chose us. i mean... is DHL this cool?",
  },
  {
    id: "making-a-commitment",
    label: "and we're making a promise.",
    detail:
      "with a business model that aims to make getting things across, from and to africa more seamless, we intentionally reduced the paperwork involved in the whole process. fret not, we still have the necessary insurance covering our clients' items.",
  },
];

const TABLE_DATA = {
  fromYou: {
    label: "FROM YOU",
    cities: [
      "Lagos",
      "Accra",
      "Abidjan",
      "Dakar",
      "Lome",
      "Cairo",
      "Luanda",
      "Mombasa",
      "Cape Town",
      "Dar es Salam",
      "Harare",
    ],
    rows: [
      {
        label: "Documents & Letters",
        prices: [
          "£3",
          "£3",
          "£3",
          "£3",
          "£3.50",
          "£4",
          "£5",
          "£5",
          "£5",
          "£5",
          "£5",
        ],
      },
      {
        label: "Small Parcels (500g)",
        prices: [
          "£5",
          "£5",
          "£5",
          "£5",
          "£5.50",
          "£7",
          "£7",
          "£7",
          "£7",
          "£7",
          "£7",
        ],
      },
      {
        label: "Large Parcels (1kg)",
        prices: [
          "£7",
          "£7",
          "£7",
          "£7",
          "£7.50",
          "£8",
          "£8",
          "£8",
          "£8",
          "£8",
          "£8",
        ],
      },
      {
        label: "Packaged Food (1kg)",
        prices: [
          "£8",
          "£8",
          "£8",
          "£8",
          "£8",
          "£9",
          "£10",
          "£10",
          "£10",
          "£10",
          "£10",
        ],
      },
      {
        label: "Perfumes, Toiletries (1kg)",
        prices: [
          "£7",
          "£7",
          "£7",
          "£7",
          "£7.50",
          "£8",
          "£8",
          "£8",
          "£8",
          "£8",
          "£8",
        ],
      },
      {
        label: "Wigs, Extensions, Hair Products (1kg)",
        prices: [
          "£10",
          "£10",
          "£10",
          "£10",
          "£12",
          "£12",
          "£15",
          "£15",
          "£15",
          "£18",
          "£18",
        ],
      },
      {
        label: "Gadgets (4kg and less)",
        prices: [
          "£15",
          "£15",
          "£15",
          "£15",
          "£15",
          "£18",
          "£18",
          "£18",
          "£18",
          "£18",
          "£18",
        ],
      },
      {
        label: "Luxury Items (1kg, £299+)",
        prices: [
          "£20",
          "£20",
          "£20",
          "£22.50",
          "£20",
          "£25",
          "£30",
          "£30",
          "£30",
          "£30",
          "£30",
        ],
      },
      {
        label: "Backpack (3kg)",
        prices: [
          "£100",
          "£100",
          "£100",
          "£120",
          "£120",
          "£150",
          "£150",
          "£150",
          "£150",
          "£180",
          "£180",
        ],
      },

      {
        label: "Briefcase (5kg)",
        prices: [
          "£200",
          "£200",
          "£200",
          "£225",
          "£225",
          "£250",
          "£250",
          "£250",
          "£250",
          "£280",
          "£280",
        ],
      },

      {
        label: "Duffel Bag (15kg)",
        prices: [
          "£400",
          "£400",
          "£400",
          "£400",
          "£400",
          "£450",
          "£450",
          "£500",
          "£500",
          "£500",
          "£500",
        ],
      },
      {
        label: "Size 28 Suitcase (23kg)",
        prices: [
          "£500",
          "£500",
          "£500",
          "£500",
          "£500",
          "£550",
          "£550",
          "£600",
          "£600",
          "£600",
          "£600",
        ],
      },
      {
        label: "Size 32 Suitcase (32kg)",
        prices: [
          "£700",
          "£700",
          "£700",
          "£700",
          "£700",
          "£750",
          "£800",
          "£800",
          "£800",
          "£850",
          "£850",
        ],
      },
      {
        label: "Size 38 Suitcase (45kg)",
        prices: [
          "£800",
          "£800",
          "£800",
          "£800",
          "£800",
          "£850",
          "£900",
          "£900",
          "£900",
          "£950",
          "£950",
        ],
      },
      {
        label: "Checkered Woven 'GMG' Bag (25kg)",
        prices: [
          "£520",
          "£520",
          "£520",
          "£520",
          "£520",
          "£575",
          "£575",
          "£620",
          "£620",
          "£620",
          "£620",
        ],
      },
      {
        label: "Checkered Woven 'GMG' Bag (38kg)",
        prices: [
          "£750",
          "£750",
          "£750",
          "£750",
          "£750",
          "£800",
          "£850",
          "£850",
          "£850",
          "£900",
          "£900",
        ],
      },
      {
        label: "Checkered Woven 'GMG' Bag (50kg)",
        prices: [
          "£850",
          "£850",
          "£850",
          "£850",
          "£850",
          "£900",
          "£950",
          "£950",
          "£950",
          "£1000",
          "£1000",
        ],
      },
    ],
  },

  toYou: {
    label: "TO YOU",
    cities: [
      "Lagos",
      "Accra",
      "Abidjan",
      "Dakar",
      "Lome",
      "Cairo",
      "Luanda",
      "Mombasa",
      "Cape Town",
      "Dar es Salam",
      "Harare",
    ],
    rows: [
      {
        label: "Documents & Letters",
        prices: [
          "£3",
          "£3",
          "£3",
          "£3",
          "£3.50",
          "£4",
          "£5",
          "£5",
          "£5",
          "£5",
          "£5",
        ],
      },
      {
        label: "Small Parcels (500g)",
        prices: [
          "£5",
          "£5",
          "£5",
          "£5",
          "£5.50",
          "£7",
          "£7",
          "£7",
          "£7",
          "£7",
          "£7",
        ],
      },
      {
        label: "Large Parcels (1kg)",
        prices: [
          "£7",
          "£7",
          "£7",
          "£7",
          "£7.50",
          "£8",
          "£8",
          "£8",
          "£8",
          "£8",
          "£8",
        ],
      },
      {
        label: "Packaged Food (1kg)",
        prices: [
          "£8",
          "£8",
          "£8",
          "£8",
          "£8",
          "£9",
          "£10",
          "£10",
          "£10",
          "£10",
          "£10",
        ],
      },
      {
        label: "Perfumes, Toiletries (1kg)",
        prices: [
          "£7",
          "£7",
          "£7",
          "£7",
          "£7.50",
          "£8",
          "£8",
          "£8",
          "£8",
          "£8",
          "£8",
        ],
      },
      {
        label: "Wigs, Extensions, Hair Products (1kg)",
        prices: [
          "£10",
          "£10",
          "£10",
          "£10",
          "£12",
          "£12",
          "£15",
          "£15",
          "£15",
          "£18",
          "£18",
        ],
      },
      {
        label: "Gadgets (4kg and less)",
        prices: [
          "£15",
          "£15",
          "£15",
          "£15",
          "£15",
          "£18",
          "£18",
          "£18",
          "£18",
          "£18",
          "£18",
        ],
      },
      {
        label: "Luxury Items (1kg, £299+)",
        prices: [
          "£20",
          "£20",
          "£20",
          "£22.50",
          "£20",
          "£25",
          "£30",
          "£30",
          "£30",
          "£30",
          "£30",
        ],
      },
      {
        label: "Backpack (3kg)",
        prices: [
          "£100",
          "£100",
          "£100",
          "£120",
          "£120",
          "£150",
          "£150",
          "£150",
          "£150",
          "£180",
          "£180",
        ],
      },

      {
        label: "Briefcase (5kg)",
        prices: [
          "£200",
          "£200",
          "£200",
          "£225",
          "£225",
          "£250",
          "£250",
          "£250",
          "£250",
          "£280",
          "£280",
        ],
      },

      {
        label: "Duffel Bag (15kg)",
        prices: [
          "£400",
          "£400",
          "£400",
          "£400",
          "£400",
          "£450",
          "£450",
          "£500",
          "£500",
          "£500",
          "£500",
        ],
      },
      {
        label: "Size 28 Suitcase (23kg)",
        prices: [
          "£500",
          "£500",
          "£500",
          "£500",
          "£500",
          "£550",
          "£550",
          "£600",
          "£600",
          "£600",
          "£600",
        ],
      },
      {
        label: "Size 32 Suitcase (32kg)",
        prices: [
          "£700",
          "£700",
          "£700",
          "£700",
          "£700",
          "£750",
          "£800",
          "£800",
          "£800",
          "£850",
          "£850",
        ],
      },
      {
        label: "Size 38 Suitcase (45kg)",
        prices: [
          "£800",
          "£800",
          "£800",
          "£800",
          "£800",
          "£850",
          "£900",
          "£900",
          "£900",
          "£950",
          "£950",
        ],
      },
      {
        label: "Checkered Woven 'GMG' Bag (25kg)",
        prices: [
          "£520",
          "£520",
          "£520",
          "£520",
          "£520",
          "£575",
          "£575",
          "£620",
          "£620",
          "£620",
          "£620",
        ],
      },
      {
        label: "Checkered Woven 'GMG' Bag (38kg)",
        prices: [
          "£750",
          "£750",
          "£750",
          "£750",
          "£750",
          "£800",
          "£850",
          "£850",
          "£850",
          "£900",
          "£900",
        ],
      },
      {
        label: "Checkered Woven 'GMG' Bag (50kg)",
        prices: [
          "£850",
          "£850",
          "£850",
          "£850",
          "£850",
          "£900",
          "£950",
          "£950",
          "£950",
          "£1000",
          "£1000",
        ],
      },
    ],
  },
};

// Very simple example – change numbers to match your table.
const QUOTE_PRICE_MAP: Record<string, number> = {
  "Documents & Letters": 3,
  "Small Parcels (500g)": 5,
  "Clothing & Shoes (1kg)": 7,
  "Packaged Food (1kg)": 8,
  "Perfumes, Toiletries (1kg)": 7,
  "Wigs, Extensions, Hair Products (1kg)": 10,
  "Gadgets (4kg and less)": 15,
  "Luxury Items (1kg, £299+)": 20,
  "Backpack (3kg)": 100,
  "Briefcase (5kg)": 200,
  "Duffel Bag (15kg)": 400,
  "Size 28 Suitcase (23kg)": 500,
  "Size 32 Suitcase (32kg)": 700,
  "Size 38 Suitcase (45kg)": 800,
  "Checkered Woven 'GMG' Bag (25kg)": 520,
  "Checkered Woven GMG Bag (38kg)": 750,
  "Checkered Woven GMG Bag (50kg)": 850,
  Other: 20,
};

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = React.useState(false);
  const [isTrackOpen, setIsTrackOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-black relative">
      <SiteNav
        onOpenQuote={() => setIsQuoteOpen(true)}
        onOpenTrack={() => setIsTrackOpen(true)}
      />
      <LandingHero />
      <div className="h-screen" /> {/* spacer */}
      <SectionOne />
      <Marquee />
      <SectionTwo />
      <Marquee2 />
      <FooterSection />
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      {isQuoteOpen && <QuoteModal onClose={() => setIsQuoteOpen(false)} />}
      {isTrackOpen && <TrackingModal onClose={() => setIsTrackOpen(false)} />}
    </div>
  );
}

function QuoteModal({ onClose }: { onClose: () => void }) {
  const [submitted, setSubmitted] = React.useState(false);
  const [quote, setQuote] = React.useState<{
    price: number;
    currency: string;
    from: string;
    to: string;
    parcelType: string;
    weight: number;
    name: string;
  } | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const from = ((data.get("from") as string) || "").trim();
    const to = ((data.get("to") as string) || "").trim();
    const parcelTypeRaw = (data.get("parcelType") as string) || "Other";
    const parcelType = parcelTypeRaw || "Other";
    const weightRaw = data.get("weight") as string;
    const weight = weightRaw ? Number(weightRaw) : 0;

    const name = ((data.get("name") as string) || "").trim();

    const base = QUOTE_PRICE_MAP[parcelType] ?? QUOTE_PRICE_MAP["Other"];
    const price = base; // you can layer weight-based logic later
    const currency = "£";

    setQuote({
      price,
      currency,
      from,
      to,
      parcelType,
      weight,
      name,
    });

    setSubmitted(true);
  };

  // build mailto and WhatsApp links when quote is available
  // replace with your real WhatsApp number in international format
  const SPRNT_WHATSAPP_NUMBER = "447304178216";

  const whatsappShipNowHref =
    quote &&
    (() => {
      const textLines = [
        `Hi Sprnt – I'd like to ship a parcel asap.`,
        ``,
        `Name: ${quote.name || "-"}`,
        `Route: ${quote.from || "?"} → ${quote.to || "?"}`,
        `Parcel: ${quote.parcelType} (~${quote.weight || "?"}kg)`,
        ``,
        `Indicative price you showed me: ${quote.currency}${quote.price.toFixed(
          2
        )}.`,
        ``,
        `Please confirm, send payment details and drop-off instructions.`,
      ];
      const text = encodeURIComponent(textLines.join("\n"));
      return `https://wa.me/${SPRNT_WHATSAPP_NUMBER}?text=${text}`;
    })();

  const whatsappScheduleHref =
    quote &&
    (() => {
      const textLines = [
        `Hi Sprnt – I'd like to schedule a shipment for next week.`,
        ``,
        `Name: ${quote.name || "-"}`,
        `Route: ${quote.from || "?"} → ${quote.to || "?"}`,
        `Parcel: ${quote.parcelType} (~${quote.weight || "?"}kg)`,
        ``,
        `Indicative price you showed me: ${quote.currency}${quote.price.toFixed(
          2
        )}.`,
        ``,
        `Please confirm availability next week and share next steps.`,
      ];
      const text = encodeURIComponent(textLines.join("\n"));
      return `https://wa.me/${SPRNT_WHATSAPP_NUMBER}?text=${text}`;
    })();

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#111111] border border-sprntBorder px-5 py-6 md:px-8 md:py-8">
        {/* CLOSE */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-3 text-[16px] uppercase tracking-[0.16em] text-sprntMuted font-pp hover:text-sprntAccent"
        >
          X
        </button>

        {/* HEADER */}
        <div className="space-y-2 pr-10">
          <h2 className="text-[24px] md:text-[32px] leading-tight font-pp">
            Estimated cost of your next shipment.
          </h2>
          <p className="text-[12px] md:text-[16px] text-sprntText tracking-tight leading-tight">
            Rates shared are{" "}
            <span className="text-sprntAccent">indicative only</span> and may
            change based on final weight, dimensions, route and customs.
          </p>
        </div>

        {/* FORM */}
        {!quote && (
          <form onSubmit={handleSubmit} className="mt-6 space-y-8">
            {/* ROUTE */}
            <section className="space-y-3">
              <h3 className="text-[16px] uppercase text-sprntText font-pp tracking-tight">
                ROUTE
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex flex-col gap-1">
                  <label className="text-[11px] uppercase tracking-[0.16em] text-sprntText font-pp tracking-tight">
                    From
                  </label>
                  <input
                    required
                    name="from"
                    placeholder="City, Country"
                    className="w-full bg-[#151515] border border-sprntBorder px-3 py-2 text-[12px] md:text-sm focus:outline-none focus:border-sprntAccent font-ocr tracking-tight"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[11px] uppercase tracking-[0.16em] text-sprntText font-pp tracking-tight">
                    To
                  </label>
                  <input
                    required
                    name="to"
                    placeholder="City, Country"
                    className="w-full bg-[#151515] border border-sprntBorder px-3 py-2 text-[12px] md:text-sm focus:outline-none focus:border-sprntAccent font-ocr tracking-tight"
                  />
                </div>
              </div>
            </section>

            {/* PARCEL */}
            <section className="space-y-3">
              <h3 className="text-[16px] uppercase text-sprntText font-pp tracking-tight">
                PARCEL
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex flex-col gap-1">
                  <label className="text-[11px] uppercase tracking-[0.16em] text-sprntText font-pp tracking-tight">
                    Parcel type
                  </label>
                  <select
                    required
                    name="parcelType"
                    className="w-full bg-[#151515] border border-sprntBorder px-3 py-2 text-[12px] md:text-sm focus:outline-none focus:border-sprntAccent font-ocr tracking-tight"
                  >
                    <option value="">Select a parcel type</option>
                    <option>Documents &amp; Letters</option>
                    <option>Small Parcels (500g)</option>
                    <option>Clothing &amp; Shoes (1kg)</option>
                    <option>Packaged Food (1kg)</option>
                    <option>Perfumes, Toiletries (1kg)</option>
                    <option>Wigs, Extensions, Hair Products (1kg)</option>
                    <option>Gadgets (4kg and less)</option>
                    <option>Luxury Items (1kg, £299+)</option>
                    <option>Backpack (3kg)</option>
                    <option>Briefcase (5kg)</option>
                    <option>Duffel Bag (15kg)</option>
                    <option>Size 28 Suitcase (23kg)</option>
                    <option>Size 32 Suitcase (32kg)</option>
                    <option>Size 38 Suitcase (45kg)</option>
                    <option>Checkered Woven 'GMG' Bag (25kg)</option>
                    <option>Checkered Woven GMG Bag (38kg)</option>
                    <option>Checkered Woven GMG Bag (50kg)</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-[11px] uppercase tracking-[0.16em] text-sprntText font-pp tracking-tight">
                    Approx. weight (kg)
                  </label>
                  <input
                    required
                    type="number"
                    step="0.1"
                    min="0"
                    name="weight"
                    placeholder="e.g. 15"
                    className="w-full bg-[#151515] border border-sprntBorder px-3 py-2 text-[12px] md:text-sm focus:outline-none focus:border-sprntAccent font-ocr tracking-tight"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[16px] uppercase text-sprntText font-pp tracking-tight">
                  Notes (optional)
                </label>
                <textarea
                  name="notes"
                  rows={3}
                  placeholder="Fragile? Time-sensitive? Anything unusual?"
                  className="w-full bg-[#151515] border border-sprntBorder px-3 py-2 text-[12px] md:text-sm focus:outline-none focus:border-sprntAccent font-ocr tracking-tight"
                />
              </div>
            </section>

            {/* CONTACT */}
            <section className="space-y-3">
              <h3 className="text-[16px] uppercase text-sprntText font-pp tracking-tight">
                CONTACT
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex flex-col gap-1">
                  <label className="text-[11px] uppercase tracking-[0.16em] text-sprntText font-pp tracking-tight">
                    Name
                  </label>
                  <input
                    required
                    name="name"
                    placeholder="Your full name"
                    className="w-full bg-[#151515] border border-sprntBorder px-3 py-2 text-[12px] md:text-sm focus:outline-none focus:border-sprntAccent font-ocr tracking-tight"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[11px] uppercase tracking-[0.16em] text-sprntText font-pp tracking-tight">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    className="w-full bg-[#151515] border border-sprntBorder px-3 py-2 text-[12px] md:text-sm focus:outline-none focus:border-sprntAccent font-ocr tracking-tight"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex flex-col gap-1">
                  <label className="text-[11px] uppercase tracking-[0.16em] text-sprntText font-pp tracking-tight">
                    WhatsApp
                  </label>
                  <input
                    required
                    name="whatsapp"
                    placeholder="+44… or +234…"
                    className="w-full bg-[#151515] border border-sprntBorder px-3 py-2 text-[12px] md:text-sm focus:outline-none focus:border-sprntAccent font-ocr tracking-tight"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[11px] uppercase tracking-[0.16em] text-sprntText font-pp tracking-tight">
                    Preferred contact
                  </label>
                  <select
                    name="contactPreference"
                    className="w-full bg-[#151515] border border-sprntBorder px-3 py-2 text-[12px] md:text-sm focus:outline-none focus:border-sprntAccent font-ocr tracking-tight"
                  >
                    <option>Email</option>
                    <option>WhatsApp</option>
                    <option>Either</option>
                  </select>
                </div>
              </div>
            </section>

            {/* FOOTER + QUOTE DISPLAY */}
            <div className="flex flex-col gap-3 pt-4 border-t border-sprntBorder">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <p className="text-[11px] text-sprntText max-w-md pr-8">
                  Rates shared are{" "}
                  <span className="text-sprntAccent">indicative only</span> and
                  may change based on final weight, dimensions, route and
                  customs.
                </p>
                <button
                  type="submit"
                  className="
                  inline-flex items-center justify-center
                  px-5 py-2.5
                  text-[12px] md:text-[10px]
                  tracking-[0.2em] uppercase font-ocr
                  border border-sprntAccent
                  bg-[#151515]
                  uppercase
                  text-sprntAccent
                  transition-colors
                  hover:bg-sprntAccent
                  hover:text-sprntBg
                  hover:border-sprntAccent
                "
                >
                  Request quote
                </button>
              </div>

              {submitted && !quote && (
                <p className="text-[11px] text-sprntAccent mt-2">
                  Something went wrong calculating your quote. Please try again.
                </p>
              )}
            </div>
          </form>
        )}

        {quote && (
          <div className="mt-3 space-y-2 border border-sprntBorder bg-[#151515] px-4 py-3">
            <p className="text-[24px] font-pp">
              Estimated price:{" "}
              <span className="font-semibold">
                {quote.currency}
                {quote.price.toFixed(2)}
              </span>
            </p>
            <p className="text-[11px] text-sprntText">
              {quote.parcelType} (~{quote.weight || "?"}kg) |{" "}
              {quote.from || "?"} → {quote.to || "?"}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {whatsappShipNowHref && (
                <a
                  href={whatsappShipNowHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                        inline-flex items-center justify-center
                        px-3 py-1.5 font-ocr
                        text-[10px] uppercase tracking-[0.18em]
                        border border-sprntAccent
                        text-sprntAccent
                        hover:bg-sprntAccent hover:text-sprntBg
                        transition-colors
                      "
                >
                  Ship Now
                </a>
              )}
              {whatsappScheduleHref && (
                <a
                  href={whatsappScheduleHref}
                  className="
                        inline-flex items-center justify-center
                        px-3 py-1.5 font-ocr
                        text-[10px] uppercase tracking-[0.18em]
                        border border-sprntBorder
                        text-sprntText
                        hover:border-sprntAccent hover:text-sprntAccent
                        transition-colors
                      "
                >
                  Schedule shipping
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const CITY_LOCATIONS = [
  { city: "Lagos", label: "Lagos, Nigeria", lat: 6.5244, lng: 3.3792 },
  { city: "Accra", label: "Accra, Ghana", lat: 5.6037, lng: -0.187 },
  {
    city: "Abidjan",
    label: "Abidjan, Côte d’Ivoire",
    lat: 5.3453,
    lng: -4.0244,
  },
  { city: "Dakar", label: "Dakar, Senegal", lat: 14.7167, lng: -17.4677 },
  { city: "Lome", label: "Lomé, Togo", lat: 6.1375, lng: 1.2123 },
  { city: "Cairo", label: "Cairo, Egypt", lat: 30.0444, lng: 31.2357 },
  { city: "Luanda", label: "Luanda, Angola", lat: -8.8383, lng: 13.2344 },
  { city: "Mombasa", label: "Mombasa, Kenya", lat: -4.0435, lng: 39.6682 },
  {
    city: "Cape Town",
    label: "Cape Town, South Africa",
    lat: -33.9249,
    lng: 18.4241,
  },
  {
    city: "Dar es Salam",
    label: "Dar es Salaam, Tanzania",
    lat: -6.7924,
    lng: 39.2083,
  },
];

type TrackingLocation = {
  city: string;
  label: string;
  lat: number;
  lng: number;
};

function pickCityFromTracking(trackingId: string): TrackingLocation {
  if (!trackingId) return CITY_LOCATIONS[0];

  const sum = trackingId
    .split("")
    .reduce((acc, ch) => acc + ch.charCodeAt(0), 0);

  return CITY_LOCATIONS[sum % CITY_LOCATIONS.length];
}

function TrackingModal({ onClose }: { onClose: () => void }) {
  const [submitted, setSubmitted] = React.useState(false);
  const [trackingInfo, setTrackingInfo] = React.useState<{
    trackingId: string;
    reference?: string;
    email?: string;
    phone?: string;
    location: TrackingLocation;
  } | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const trackingId = ((data.get("trackingId") as string) || "").trim();
    const reference = ((data.get("reference") as string) || "").trim();
    const email = ((data.get("email") as string) || "").trim();
    const phone = ((data.get("phone") as string) || "").trim();

    const location = pickCityFromTracking(trackingId);

    setTrackingInfo({
      trackingId,
      reference,
      email,
      phone,
      location,
    });
    setSubmitted(true);
  };

  // map placeholder
  const markerStyle =
    trackingInfo &&
    (() => {
      const { lat, lng } = trackingInfo.location;
      const x = ((lng + 180) / 360) * 100; // 0–100%
      const y = ((90 - lat) / 180) * 100; // 0–100%
      return {
        left: `${x}%`,
        top: `${y}%`,
      };
    })();

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#111111] border border-sprntBorder px-5 py-6 md:px-8 md:py-8">
        {/* CLOSE */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-3 text-[16px] uppercase tracking-[0.16em] text-sprntMuted font-pp hover:text-sprntAccent"
        >
          X
        </button>

        {/* HEADER */}
        <div className="space-y-2 pr-10">
          <h2 className="text-[24px] md:text-[32px] leading-tight font-pp">
            Track a parcel.
          </h2>
          <p className="text-[12px] md:text-[16px] text-sprntText tracking-tight leading-tight">
            Locations shown are{" "}
            <span className="text-sprntAccent">approximate</span> and for
            indicative tracking only.
          </p>
        </div>

        {/* FORM — hides after submit */}
        {!trackingInfo && (
          <form onSubmit={handleSubmit} className="mt-6 space-y-8">
            {/* TRACKING */}
            <section className="space-y-3">
              <h3 className="text-[16px] uppercase text-sprntText font-pp tracking-tight">
                TRACKING DETAILS
              </h3>
              <div className="flex flex-col gap-1">
                <label className="text-[11px] uppercase tracking-[0.16em] text-sprntText font-pp tracking-tight">
                  Tracking number
                </label>
                <input
                  required
                  name="trackingId"
                  placeholder="e.g. SPRNT-90642-ABC123"
                  className="w-full bg-[#151515] border border-sprntBorder px-3 py-2 text-[12px] md:text-sm font-ocr tracking-tight focus:outline-none focus:border-sprntAccent"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[11px] uppercase tracking-[0.16em] text-sprntText font-pp tracking-tight">
                  Reference (optional)
                </label>
                <input
                  name="reference"
                  placeholder="Order ID, name, or internal reference"
                  className="w-full bg-[#151515] border border-sprntBorder px-3 py-2 text-[12px] md:text-sm font-ocr tracking-tight focus:outline-none focus:border-sprntAccent"
                />
              </div>
            </section>

            {/* CONTACT (for context, even if not used programmatically yet) */}
            <section className="space-y-3">
              <h3 className="text-[16px] uppercase text-sprntText font-pp tracking-tight">
                CONTACT
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex flex-col gap-1">
                  <label className="text-[11px] uppercase tracking-[0.16em] text-sprntText font-pp tracking-tight">
                    Email (optional)
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    className="w-full bg-[#151515] border border-sprntBorder px-3 py-2 text-[12px] md:text-sm font-ocr tracking-tight focus:outline-none focus:border-sprntAccent"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[11px] uppercase tracking-[0.16em] text-sprntText font-pp tracking-tight">
                    Phone / WhatsApp (optional)
                  </label>
                  <input
                    name="phone"
                    placeholder="+44… or +234…"
                    className="w-full bg-[#151515] border border-sprntBorder px-3 py-2 text-[12px] md:text-sm font-ocr tracking-tight focus:outline-none focus:border-sprntAccent"
                  />
                </div>
              </div>
            </section>

            {/* SUBMIT */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 pt-4 border-t border-sprntBorder">
              <p className="text-[11px] text-sprntText max-w-md pr-8">
                Locations shown are{" "}
                <span className="text-sprntAccent">approximate</span> and for
                indicative tracking only.
              </p>
              <button
                type="submit"
                className="
                  inline-flex items-center justify-center
                  px-5 py-2.5
                  text-[12px] md:text-[10px]
                  tracking-[0.2em] uppercase font-ocr
                  border border-sprntAccent
                  bg-[#151515]
                  text-sprntAccent
                  transition-colors
                  hover:bg-sprntAccent
                  hover:text-sprntBg
                  hover:border-sprntAccent
                "
              >
                Locate parcel
              </button>
            </div>

            {submitted && !trackingInfo && (
              <p className="text-[11px] text-sprntAccent mt-2">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        )}

        {/* RESULT VIEW — map + details */}
        {trackingInfo && (
          <div className="mt-6 space-y-4">
            <div className="space-y-1">
              <p className="text-[11px] uppercase tracking-[0.16em] text-sprntText font-pp tracking-tight">
                CURRENT STATUS
              </p>
              <p className="text-[16px] md:text-[20px] font-pp text-sprntText leading-tight">
                Your parcel was last seen – near{" "}
                <span className="text-sprntAccent">
                  {trackingInfo.location.label}
                </span>{" "}
                1 minutes ago and is making its way to you.
              </p>
              <p className="text-[11px] text-sprntText font-ocr tracking-tight pt-2">
                Tracking ID: {trackingInfo.trackingId}
                {trackingInfo.reference && (
                  <> · Ref: {trackingInfo.reference}</>
                )}
              </p>
            </div>

            {/* MAP */}
            <div className="mt-2 h-64 md:h-72 bg-[#151515] border border-sprntBorder rounded-sm relative overflow-hidden">
              {/* Optional: put a placeholder map image in /public/map-placeholder.png */}
              <img
                src="/map-placeholder.png"
                alt="Couldn't load map"
                className="w-full h-full object-cover opacity-60"
              />

              {markerStyle && (
                <div
                  className="absolute w-4 h-4 rounded-full bg-sprntAccent border-2 border-sprntBg shadow-lg"
                  style={{
                    transform: "translate(-50%, -50%)",
                    ...markerStyle,
                  }}
                />
              )}

              <div className="absolute left-4 bottom-4 bg-black/1  text-[10px] font-ocr text-sprntText  leading-tight">
                <div>{trackingInfo.location.label}</div>
                <div>
                  Lat {trackingInfo.location.lat.toFixed(4)}, Lon{" "}
                  {trackingInfo.location.lng.toFixed(4)}
                </div>
                <div className="text-sprntAccent mt-[2px] leading-tight">
                  {new Date().toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>
              </div>
            </div>

            {/* FOOTER TEXT */}
            <p className="text-[11px] text-[#7f7f7f] font-pp tracking-tight">
              For exact status, handover times, and delivery ETA, contact{" "}
              <span className="text-sprntAccent">+44 (0) 730 4178 216 </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function SiteNav({
  onOpenQuote,
  onOpenTrack,
}: {
  onOpenQuote: () => void;
  onOpenTrack: () => void;
}) {
  const navItems = [
    { label: "(S)", type: "internal" as const, to: "#top" },

    {
      label: "QUOTES",
      type: "quote" as const,
    },
    {
      label: "SHIP",
      type: "external" as const,
      href: "https://wa.me/447304178216?text=Hi%20Sprnt%2C%20I%20want%20to%20ship%20a%20parcel.",
    },
    {
      label: "SUPPORT",
      type: "external" as const,
      href: "mailto:sfyn@sprnt.one?subject=tell%20me%20more%20about%20spr.",
    },
    {
      label: "ACCOUNT",
      type: "external" as const,
      href: "/login",
    },
  ];

  const [day, setDay] = React.useState("");
  const [month, setMonth] = React.useState("");
  const [year, setYear] = React.useState("");

  React.useEffect(() => {
    const now = new Date();

    setDay(String(now.getDate()).padStart(2, "0"));
    setMonth(String(now.getMonth() + 1).padStart(2, "0"));
    setYear(String(now.getFullYear()));
  }, []);

  return (
    <header
      className="
        fixed
        top-[10px] left-[20px] right-[20px]
        h-12
        flex items-center justify-between
        z-50
        bg-transparent
        font-pp
      "
    >
      {/* LEFT: links */}
      <div className="flex items-center gap-[2px] md:gap-3 font-ocr">
        <nav className="flex items-center gap-[2px] md:gap-2">
          {navItems.map((item) => {
            if (item.type === "internal" && item.to) {
              return (
                <Link
                  key={item.label}
                  to="#"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="
           hidden                 /* hide on mobile */
    md:inline-flex         /* show on desktop */
    items-center
    bg-[#151515]
  backdrop-blur-md
    border border-sprntBorder
    px-4 py-[6px]
    text-[11px]
    uppercase tracking-[0.22em]
    text-sprntText
    transition-colors
    hover:text-sprntAccent
    hover:border-sprntAccent
"
                >
                  {item.label}
                </Link>
              );
            }

            if (item.type === "quote") {
              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={onOpenQuote}
                  className="
          inline-flex items-center
          bg-[#151515]
          backdrop-blur-md
          border border-sprntBorder
          px-2 py-[2px]
          text-[8px]
          tracking-[0.14em]
          md:px-4 md:py-[6px]
          md:text-[11px]
          md:tracking-[0.22em]
          uppercase
          text-sprntText
          transition-colors
          hover:text-sprntAccent
          hover:border-sprntAccent
        "
                >
                  {item.label}
                </button>
              );
            }

            return (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="
          inline-flex items-center
  bg-[#151515]
  backdrop-blur-md
  border border-sprntBorder

  px-2 py-[2px]       /* mobile */
  text-[8px]          /* mobile */
  tracking-[0.14em]   /* mobile */

  md:px-4 md:py-[6px] /* desktop */
  md:text-[11px]
  md:tracking-[0.22em]

  text-sprntText
  transition-colors
  hover:text-sprntAccent
  hover:border-sprntAccent
        "
              >
                {item.label}
              </a>
            );
          })}
        </nav>
      </div>

      {/* RIGHT: date + dashboard */}
      <div className=" md:flex items-center gap-3 font-ocr">
        {/* DATE TAGS (visible on desktop, left of button) */}
        <div className="hidden md:flex items-center gap-[2px]">
          <NavTag>{day}</NavTag>
          <NavTag>{month}</NavTag>
          <NavTag>{year}</NavTag>
        </div>

        <button
          type="button"
          onClick={onOpenTrack}
          className="
    inline-flex items-center
    bg-[#151515]
    border border-sprntAccent
    px-3 py-[4px] text-[9px] tracking-[0.14em] 
    md:px-5 md:py-[6px] md:text-[11px] md:tracking-[0.1em] 
    uppercase 
    text-sprntAccent
    transition-colors
    hover:bg-sprntAccent
    hover:text-sprntBg
    hover:border-sprntAccent
  "
        >
          TRACKING
        </button>
      </div>
    </header>
  );
}

function NavTag({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="
        inline-flex items-center justify-center
        bg-[#151515]
        border border-sprntBorder
        px-3
        h-8
        min-w-[46px]
        text-[11px]
        uppercase tracking-[0.22em]
        text-sprntText
      "
    >
      {children}
    </span>
  );
}

function LandingHero() {
  return (
    <section
      className="
        fixed inset-0
        z-0
        pt-[calc(48px+24px)] px-[20px]
        bg-cover bg-center bg-no-repeat
      "
      style={{
        backgroundImage: "url('/landing.png')",
      }}
    >
      {/* put hero text/content here if you want it sitting on the image */}
    </section>
  );
}

function SectionOne() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const stepRefs = React.useRef<(HTMLDivElement | null)[]>([]);

  React.useEffect(() => {
    const stepObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute("data-index"));
            if (!Number.isNaN(idx)) setActiveIndex(idx);
          }
        });
      },
      {
        threshold: 0.4, // a bit earlier / smoother feeling
      }
    );

    stepRefs.current.forEach((el) => el && stepObserver.observe(el));

    return () => {
      stepObserver.disconnect();
    };
  }, []);

  return (
    <section className="relative z-10 bg-sprntAccent text-siliconOrange">
      <div className="relative min-h-[300vh]">
        {/* STICKY VIEWPORT */}
        <div
          className="
            sticky top-0
            h-screen
            px-[20px] md:px-[40px]
            pt-[calc(48px+16px)]
            pb-4
            flex flex-col justify-between
            z-20
          "
        >
          {/* HEADLINE */}
          <div className="max-w-5xl leading-[0.90] font-pp space-y-2 md:space-y-3">
            <p className="text-[40px] md:text-[64px]">
              {COMMITMENT_STEPS.map((step, idx) => (
                <span
                  key={step.id}
                  className={`
                    transition-all duration-500
                    ${
                      idx === activeIndex
                        ? "text-anthracite opacity-100"
                        : "text-siliconOrange opacity-100"
                    }
                  `}
                >
                  {step.label}{" "}
                </span>
              ))}
            </p>
          </div>

          {/* EXPLAINER – fixed to bottom of this sticky viewport */}
          <p
            key={COMMITMENT_STEPS[activeIndex].id}
            className="
              mt-8
              max-w-[1280px]
              text-anthracite
              transition-opacity duration-400
    
    text-[24px]          /* mobile */
    leading-[1.0]        /* mobile spacing */
    md:text-[40px]       /* desktop */
    md:leading-[1.12]    /* desktop */
    tracking-tight
            "
          >
            {COMMITMENT_STEPS[activeIndex].detail}
          </p>
        </div>

        {/* SCROLL STEPS */}
        <div className="pointer-events-none">
          {COMMITMENT_STEPS.map((step, idx) => (
            <div
              key={step.id}
              data-index={idx}
              ref={(el) => {
                stepRefs.current[idx] = el;
              }}
              className="h-screen"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [
    "AFRICA TO THE WORLD... LITERALLY",
    "*",
    "info@sprnt.one",
    "*",
    "+44 (0) 730 4178 216 –– 24/7 WhatsApp",
    "*",
    "+234 (0) 809 9483 973 –– Daytime Tracking",
    "*",
    "90642 Inc",
    "*",
  ];

  return (
    <section
      style={{ backgroundColor: "#151515" }} // anthracite, forced
      className="z-20 marquee-strip font-ocr text-sprntAccent"
    >
      <div className="marquee background-anthracite border-b border-siliconOrange py-3">
        <div className="marquee__inner background-anthracite">
          {items.concat(items).map((item, i) => (
            <span
              key={i}
              className="mx-6 text-[12px] md:text-xs uppercase tracking-tight whitespace-nowrap"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionTwo() {
  const [view, setView] = React.useState<"fromYou" | "toYou">("fromYou");
  const data = TABLE_DATA[view];
  const [activeCol, setActiveCol] = React.useState(0);

  const handleSwitch = (v: "fromYou" | "toYou") => {
    setView(v);
    setActiveCol(0);
  };

  return (
    <section className="relative z-30 bg-[#E2E1DF] text-black px-[20px]">
      {/* sticky, full viewport shell */}
      <div className="sticky top-0 pb-2 h-screen py-16 flex flex-col">
        {/* HEADER */}
        <h2 className="text-[48px] font-pp tracking-tight mb-4 pb-2">
          PRICE GUIDE
        </h2>

        <div className="w-full mb-2">
          <div className="flex pb-2 w-full border-[#151515]">
            {/* FROM YOU */}
            <button
              onClick={() => handleSwitch("fromYou")}
              className={`
        cursor-pointer w-1/2 flex justify-center pb-4 pt-4 transition-all hover:text-sprntAccent border-r-1
        ${
          view === "fromYou"
            ? "border-[#151515] text-[#151515] font-semibold"
            : "border-transparent text-[#C6C6C8]"
        }
      `}
            >
              FROM LONDON, TO
            </button>

            {/* TO YOU */}
            <button
              onClick={() => handleSwitch("toYou")}
              className={`
        cursor-pointer w-1/2 flex justify-center pb-4 pt-4 transition-all hover:text-sprntAccent border-l-1
        ${
          view === "toYou"
            ? "border-[#151515] text-[#151515] font-semibold"
            : "border-transparent text-[#C6C6C8]"
        }
      `}
            >
              TO LONDON, FROM
            </button>
          </div>
        </div>

        {/* SCROLLABLE TABLE AREA INSIDE THE 100VH SECTION */}
        <div className="flex-1 overflow-y-auto p-0 m-0 bg-[#E2E1DF]">
          <PricingTable
            data={data}
            activeCol={activeCol}
            onColumnChange={(idx) => setActiveCol(idx)}
          />
        </div>
      </div>
    </section>
  );
}

function PricingTable({
  data,
  activeCol,
  onColumnChange,
}: {
  data: any;
  activeCol: number;
  onColumnChange: (idx: number) => void;
}) {
  return (
    <div className="overflow-x-auto h-full fade-in-up">
      <table className="w-full min-w-full border-collapse font-pp text-[14px] leading-tight">
        {/* header – sticky “cities” panel */}
        <thead className="sticky top-0 z-40">
          <tr className="bg-[#C6C6C8]">
            <th className="text-left font-normal px-4 py-3 whitespace-nowrap"></th>

            {data.cities.map((city: string, idx: number) => (
              <th
                key={city}
                onMouseEnter={() => onColumnChange(idx)}
                onFocus={() => onColumnChange(idx)}
                className={`
                  text-left font-normal px-4 py-3 whitespace-nowrap cursor-pointer
                  transition-colors
                  ${
                    idx === activeCol
                      ? "bg-[#E2E1DF] text-black"
                      : "bg-[#C6C6C8] text-[#333333]"
                  }
                `}
              >
                {city}
              </th>
            ))}
          </tr>
        </thead>

        {/* body – scrolls under header */}
        <tbody>
          {data.rows.map((row: any) => (
            <tr key={row.label} className="border-t border-[#C6C6C8]">
              <td className="px-4 py-3 font-medium whitespace-nowrap">
                {row.label}
              </td>

              {row.prices.map((price: string, idx: number) => (
                <td
                  key={idx}
                  className={`
                    px-4 py-3 font-ocr whitespace-nowrap transition-colors
                    ${
                      idx === activeCol
                        ? "bg-white/70 font-semibold"
                        : "bg-transparent"
                    }
                  `}
                >
                  {price}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Marquee2() {
  const items = [
    "AFRICA TO THE WORLD... LITERALLY",
    "*",
    "info@sprnt.one",
    "*",
    "+44 (0) 730 4178 216 –– 24/7 WhatsApp",
    "*",
    "+234 (0) 809 9483 973 –– Daytime Tracking",
    "*",
    "90642 Inc",
    "*",
  ];

  return (
    <section
      style={{ backgroundColor: "#B74735" }} // anthracite, forced
      className="z-20 marquee-strip font-ocr text-sprntText"
    >
      <div className="marquee background-sprntAccent border-b border-sprntText py-3">
        <div className="marquee__inner background-sprntAccent">
          {items.concat(items).map((item, i) => (
            <span
              key={i}
              className="mx-6 text-[12px] md:text-xs uppercase tracking-tight whitespace-nowrap"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function FooterSection() {
  return (
    <section className="relative z-40 mt-0 px-[20px] pt-[40px] bg-anthracite">
      <div className="w-[100%]">
        {/* HERO SVG */}
        <img
          src="/footer-hero.svg"
          alt="You have reached the Footer!"
          className="w-[96%] hidden md:block"
        />
        <img
          src="/footer-mobile.svg"
          alt="You have reached the Footer!"
          className="w-full block md:hidden"
        />

        {/* SUBTITLE */}
        <p
          className="mt-8
    max-w-[1200px]
    text-[24px]          /* mobile */
    leading-[1.0]        /* mobile spacing */
    md:text-[40px]       /* desktop */
    md:leading-[1.12]    /* desktop */
    text-sprntText
    tracking-tight"
        >
          Might as well{" "}
          <a
            href="https://wa.me/447304178216?text=Hi%20Sprnt%2C%20I%20want%20to%20ship%20a%20parcel."
            target="_blank"
            rel="noopener noreferrer"
            className="text-sprntAccent"
          >
            ship something
          </a>{" "}
          if you’ve scrolled this far. That said, we’ve got other cool products.
        </p>

        {/* TOP STRIP: /25 / NVG8 / KANO */}
        <div
          className="mt-6 border-b border-sprntText pb-0 font-ocr text-[11px] uppercase tracking-[0.22em] text-sprntText flex gap-10 hidden md:block
"
        >
          <img
            src="/footer-top.svg"
            alt=" "
            className="w-full h-full object-cover hidden md:block
"
          />
        </div>

        {/* THREE PRODUCT CARDS */}
        <div className="border-b border-sprntText pt-4 pb-6 grid gap-0 lg:grid-cols-3">
          <div className="flex flex-col gap-4 lg:pr-2 border-sprntText lg:border-r pb-8 md:pb-4">
            <img src="/ONE.svg" alt=" " className="w-full object-cover mt-4" />

            <a
              href="https://sprnt.one"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex w-fit border border-sprntBorder items-center bg-[#151515] px-4 py-[6px] font-ocr text-[11px] uppercase tracking-tight text-sprntText hover:text-sprntAccent hover:border-sprntAccent transition-colors"
            >
              VISIT SPRNT.ONE ↗
            </a>
          </div>

          <div className="flex flex-col gap-4 lg:px-6 border-sprntText lg:border-r pt-6 md:pt-4 border-sprntText lg:border-b-0 lg:pt-0 pb-8 md:pb-4">
            <img src="/NVG8.svg" alt=" " className="w-full object-cover mt-4" />
            <a
              href="/nvg8-whitepaper.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className=" mt-4 inline-flex w-fit border border-sprntBorder items-center
    bg-[#151515] px-4 py-[6px] font-ocr text-[11px]
    uppercase tracking-tight text-sprntText
    hover:text-sprntAccent hover:border-sprntAccent transition-colors"
            >
              READ THE WHITEPAPER ↗
            </a>
          </div>

          <div className="flex flex-col gap-4 lg:pl-6 pt-4 md:pt-2 lg:pt-0 border-sprntText lg:border-b-0">
            <img src="/KANO.svg" alt=" " className="w-full object-cover mt-4" />
            <a
              href="https://kano.sprnt.one"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex w-fit border border-sprntBorder items-center bg-[#151515] px-4 py-[6px] font-ocr text-[11px] uppercase tracking-tight text-sprntText hover:text-sprntAccent hover:border-sprntAccent transition-colors"
            >
              VISIT KANO.SPRNT ↗
            </a>
          </div>
        </div>
      </div>

      <img
        src="/footer-remarks.svg"
        alt=" "
        className="w-full h-full object-cover w-full  mt-2 py-4 hidden md:block
"
      />
      <img
        src="/footer-barcode.svg"
        alt=" "
        className="w-full h-full object-cover mt-4 "
      />
    </section>
  );
}
