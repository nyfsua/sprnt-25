import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Track from "./pages/Track";
import Ship from "./pages/Ship";
import Quote from "./pages/Quote";
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
    cities: ["Lagos", "Accra", "Abidjan", "Dakar", "Lome", "Cairo", "Luanda", "Mombasa", "Cape Town", "Dar es Salam", "Harare" ],
    rows: [
      {
        label: "Documents & Letters",
        prices: ["£3", "£3", "£3", "£3", "£3.50", "£4", "£5", "£5", "£5", "£5", "£5"],
      },
      {
        label: "Small Parcels (500g)",
        prices: ["£5", "£5", "£5", "£5", "£5.50", "£7", "£7", "£7", "£7", "£7", "£7"],
      },
      {
        label: "Large Parcels (1kg)",
        prices: ["£7", "£7", "£7", "£7", "£7.50", "£8", "£8", "£8", "£8", "£8", "£8"],
      },
      {
        label: "Packaged Food (1kg)",
        prices: ["£8", "£8", "£8", "£8", "£8", "£9", "£10", "£10", "£10", "£10", "£10"],
      },
      {
        label: "Perfumes, Toiletries (1kg)",
        prices: ["£7", "£7", "£7", "£7", "£7.50", "£8", "£8", "£8", "£8", "£8", "£8"],
      },
      {
        label: "Wigs, Extensions, Hair Products (1kg)",
        prices: ["£10", "£10", "£10", "£10", "£12", "£12", "£15", "£15", "£15", "£18", "£18"],
      },
      {
        label: "Gadgets (4kg and less)",
        prices: ["£15", "£15", "£15", "£15", "£15", "£18", "£18", "£18", "£18", "£18", "£18"],
      },
      {
        label: "Luxury Items (1kg, £299+)",
        prices: ["£20", "£20", "£20", "£22.50", "£20", "£25", "£30", "£30", "£30", "£30", "£30"],
      },
      {
        label: "Backpack (3kg)",
        prices: ["£100", "£100", "£100", "£120", "£120", "£150", "£150", "£150", "£150", "£180", "£180"],
      },
      
      {
        label: "Briefcase (5kg)",
        prices: ["£200", "£200", "£200", "£225", "£225", "£250", "£250", "£250", "£250", "£280", "£280"],
      },
      
      {
        label: "Duffel Bag (15kg)",
        prices: ["£400", "£400", "£400", "£400", "£400", "£450", "£450", "£500", "£500", "£500", "£500"],
      },
      {
        label: "Size 28 Suitcase (23kg)",
        prices: ["£500", "£500", "£500", "£500", "£500", "£550", "£550", "£600", "£600", "£600", "£600"],
      },
      {
        label: "Size 32 Suitcase (32kg)",
        prices: ["£700", "£700", "£700", "£700", "£700", "£750", "£800", "£800", "£800", "£850", "£850"],
      },
      {
        label: "Size 38 Suitcase (45kg)",
        prices: ["£800", "£800", "£800", "£800", "£800", "£850", "£900", "£900", "£900", "£950", "£950"],
      },
      {
        label: "Checkered Woven 'GMG' Bag (25kg)",
        prices: ["£520", "£520", "£520", "£520", "£520", "£575", "£575", "£620", "£620", "£620", "£620"],
      },
      {
        label: "Checkered Woven 'GMG' Bag (38kg)",
        prices: ["£750", "£750", "£750", "£750", "£750", "£800", "£850", "£850", "£850", "£900", "£900"],
      },
      {
        label: "Checkered Woven 'GMG' Bag (50kg)",
        prices: ["£850", "£850", "£850", "£850", "£850", "£900", "£950", "£950", "£950", "£1000", "£1000"],
      },

    ],
  },

  toYou: {
    label: "TO YOU",
    cities: ["Lagos", "Accra", "Abidjan", "Dakar", "Lome", "Cairo", "Luanda", "Mombasa", "Cape Town", "Dar es Salam", "Harare" ],
    rows: [
      {
        label: "Documents & Letters",
        prices: ["£3", "£3", "£3", "£3", "£3.50", "£4", "£5", "£5", "£5", "£5", "£5"],
      },
      {
        label: "Small Parcels (500g)",
        prices: ["£5", "£5", "£5", "£5", "£5.50", "£7", "£7", "£7", "£7", "£7", "£7"],
      },
      {
        label: "Large Parcels (1kg)",
        prices: ["£7", "£7", "£7", "£7", "£7.50", "£8", "£8", "£8", "£8", "£8", "£8"],
      },
      {
        label: "Packaged Food (1kg)",
        prices: ["£8", "£8", "£8", "£8", "£8", "£9", "£10", "£10", "£10", "£10", "£10"],
      },
      {
        label: "Perfumes, Toiletries (1kg)",
        prices: ["£7", "£7", "£7", "£7", "£7.50", "£8", "£8", "£8", "£8", "£8", "£8"],
      },
      {
        label: "Wigs, Extensions, Hair Products (1kg)",
        prices: ["£10", "£10", "£10", "£10", "£12", "£12", "£15", "£15", "£15", "£18", "£18"],
      },
      {
        label: "Gadgets (4kg and less)",
        prices: ["£15", "£15", "£15", "£15", "£15", "£18", "£18", "£18", "£18", "£18", "£18"],
      },
      {
        label: "Luxury Items (1kg, £299+)",
        prices: ["£20", "£20", "£20", "£22.50", "£20", "£25", "£30", "£30", "£30", "£30", "£30"],
      },
      {
        label: "Backpack (3kg)",
        prices: ["£100", "£100", "£100", "£120", "£120", "£150", "£150", "£150", "£150", "£180", "£180"],
      },
      
      {
        label: "Briefcase (5kg)",
        prices: ["£200", "£200", "£200", "£225", "£225", "£250", "£250", "£250", "£250", "£280", "£280"],
      },
      
      {
        label: "Duffel Bag (15kg)",
        prices: ["£400", "£400", "£400", "£400", "£400", "£450", "£450", "£500", "£500", "£500", "£500"],
      },
      {
        label: "Size 28 Suitcase (23kg)",
        prices: ["£500", "£500", "£500", "£500", "£500", "£550", "£550", "£600", "£600", "£600", "£600"],
      },
      {
        label: "Size 32 Suitcase (32kg)",
        prices: ["£700", "£700", "£700", "£700", "£700", "£750", "£800", "£800", "£800", "£850", "£850"],
      },
      {
        label: "Size 38 Suitcase (45kg)",
        prices: ["£800", "£800", "£800", "£800", "£800", "£850", "£900", "£900", "£900", "£950", "£950"],
      },
      {
        label: "Checkered Woven 'GMG' Bag (25kg)",
        prices: ["£520", "£520", "£520", "£520", "£520", "£575", "£575", "£620", "£620", "£620", "£620"],
      },
      {
        label: "Checkered Woven 'GMG' Bag (38kg)",
        prices: ["£750", "£750", "£750", "£750", "£750", "£800", "£850", "£850", "£850", "£900", "£900"],
      },
      {
        label: "Checkered Woven 'GMG' Bag (50kg)",
        prices: ["£850", "£850", "£850", "£850", "£850", "£900", "£950", "£950", "£950", "£1000", "£1000"],
      },
    ],
  },
};

const PARCEL_IMAGES: Record<string, string> = {
  "Documents & Letters": "public/images/parcel-docs.png",
  "Small Parcels (500g)": "/images/parcel-small.png",
  "Large Parcels (1kg)": "/images/parcel-large.png",
  "Packaged Food (1kg)": "/images/parcel-food.png",
  "Perfumes, Toiletries (1kg)": "/images/parcel-perfume.png",
  "Wigs, Extensions, Hair Products (1kg)": "/images/parcel-hair.png",
  "Gadgets (4kg and less)": "/images/parcel-gadgets.png",
  "Luxury Items (1kg, £299+)": "/images/parcel-luxury.png",
  "Backpack (3kg)": "/images/parcel-backpack.png",
  "Briefcase (5kg)": "/images/parcel-briefcase.png",
  "Duffel Bag (15kg)": "/images/parcel-duffel.png",
  "Size 28 Suitcase (23kg)": "/images/parcel-28.png",
  "Size 32 Suitcase (32kg)": "/images/parcel-32.png",
  "Size 38 Suitcase (45kg)": "/images/parcel-38.png",
  "Checkered Woven 'GMG' Bag (25kg)": "/images/parcel-gmg-25.png",
  "Checkered Woven 'GMG' Bag (38kg)": "/images/parcel-gmg-38.png",
  "Checkered Woven 'GMG' Bag (50kg)": "/images/parcel-gmg-50.png",
};


export default function App() {
  return (
    <div className="min-h-screen bg-black relative">
      <SiteNav />
      <LandingHero />
      <div className="h-screen" /> {/* spacer */}
      <SectionOne />
      <Marquee />
      <SectionTwo />
      <Marquee2 />
      <FooterSection />
      <Routes>
        <Route path="/track" element={<Track />} />
        <Route path="/ship" element={<Ship />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

function SiteNav() {
  const navItems = [
    { label: "(S)", type: "internal" as const, to: "#top" },

    {
      label: "GET A QUOTE",
      type: "external" as const,
      href: "/quote",
    },
    {
      label: "SHIP NOW",
      type: "external" as const,
      href: "/ship",
    },
    {
      label: "SUPPORT",
      type: "external" as const,
      href: "mailto:sfyn@sprnt.one?subject=tell%20me%20more%20about%20sprnt.",
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
      <div className="hidden md:flex items-center gap-3 font-ocr">
        {/* DATE TAGS (visible on desktop, left of button) */}
        <div className="flex items-center gap-[2px]">
          <NavTag>{day}</NavTag>
          <NavTag>{month}</NavTag>
          <NavTag>{year}</NavTag>
        </div>

        {/* DASHBOARD BUTTON (visible on desktop, right of dates) */}
        <Link
          to="/track"
          target="_blank"
          rel="noopener noreferrer"
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
          TRACK A PARCEL
        </Link>
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
          Might as well {" "}
          <Link to="/ship" className="text-sprntAccent">
            ship something
          </Link>{" "}
          if you’ve scrolled this far. That said, we’ve got other cool
          products.
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