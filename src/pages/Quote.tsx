

import * as React from "react";


export default function Quote() {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    // later: send to API / webhook etc.
  };

  return (
    <main className="min-h-screen bg-sprntBg text-sprntText pt-[calc(48px+32px)] px-[20px] md:px-[40px] pb-16">
      <div className="max-w-4xl mx-auto space-y-10">
        
        <header className="space-y-2">
          <p className="text-[11px] tracking-[0.24em] uppercase text-sprntMuted font-ocr">
            BOOKING
          </p>
          <h1 className="text-[32px] md:text-[48px] leading-[1.0] font-pp">
            Get a quote for your next shipment.
          </h1>
          <p className="text-[13px] md:text-[14px] text-sprntMuted max-w-2xl">
            Tell us where it’s going, what it is, and how fast you need it there.
            We’ll reply with an indicative rate and next steps.
          </p>
        </header>

       
        <form
          onSubmit={handleSubmit}
          className="space-y-10 border border-sprntBorder bg-[#111111]/80 backdrop-blur-md p-5 md:p-8"
        >
          
          <section className="space-y-4">
            <h2 className="text-[13px] tracking-[0.18em] uppercase text-sprntMuted font-ocr">
              ROUTE
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-[11px] uppercase tracking-[0.16em] text-sprntMuted font-ocr">
                  From
                </label>
                <input
                  required
                  name="from"
                  placeholder="City, Country"
                  className="w-full bg-[#151515] border border-sprntBorder px-3 py-2 text-sm focus:outline-none focus:border-sprntAccent"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[11px] uppercase tracking-[0.16em] text-sprntMuted font-ocr">
                  To
                </label>
                <input
                  required
                  name="to"
                  placeholder="City, Country"
                  className="w-full bg-[#151515] border border-sprntBorder px-3 py-2 text-sm focus:outline-none focus:border-sprntAccent"
                />
              </div>
            </div>
          </section>

         
          <section className="space-y-4">
            <h2 className="text-[13px] tracking-[0.18em] uppercase text-sprntMuted font-ocr">
              PARCEL DETAILS
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-[11px] uppercase tracking-[0.16em] text-sprntMuted font-ocr">
                  Parcel type
                </label>
                <select
                  required
                  name="parcelType"
                  className="w-full bg-[#151515] border border-sprntBorder px-3 py-2 text-sm focus:outline-none focus:border-sprntAccent"
                >
                  <option value="">Select a parcel type</option>
                  <option>Documents &amp; Letters</option>
                  <option>Small Parcels (500g)</option>
                  <option>Clothing &amp; Shoes (1kg)</option>
                  <option>Packaged Food (1kg)</option>
                  <option>Perfumes, Toiletries (1kg)</option>
                  <option>Wigs, Extensions, Hair Products (1kg)</option>
                  <option>Gadgets (4kg and less)</option>
                  <option>Backpack (3kg)</option>
                  <option>Briefcase (5kg)</option>
                  <option>Duffel Bag (15kg)</option>
                  <option>Suitcase (28&quot;/32&quot;/38&quot;)</option>
                  <option>Checkered Woven “GMG” Bag</option>
                  <option>Other (describe below)</option>
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[11px] uppercase tracking-[0.16em] text-sprntMuted font-ocr">
                  Approx. weight (kg)
                </label>
                <input
                  required
                  type="number"
                  step="0.1"
                  min="0"
                  name="weight"
                  placeholder="e.g. 15"
                  className="w-full bg-[#151515] border border-sprntBorder px-3 py-2 text-sm focus:outline-none focus:border-sprntAccent"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-[11px] uppercase tracking-[0.16em] text-sprntMuted font-ocr">
                  Declared value (optional)
                </label>
                <input
                  name="value"
                  placeholder="Currency + amount (e.g. £350)"
                  className="w-full bg-[#151515] border border-sprntBorder px-3 py-2 text-sm focus:outline-none focus:border-sprntAccent"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[11px] uppercase tracking-[0.16em] text-sprntMuted font-ocr">
                  Service speed
                </label>
                <div className="flex gap-3 text-[13px]">
                  <label className="inline-flex items-center gap-1">
                    <input
                      type="radio"
                      name="speed"
                      value="standard"
                      defaultChecked
                      className="accent-sprntAccent"
                    />
                    <span>Standard</span>
                  </label>
                  <label className="inline-flex items-center gap-1">
                    <input
                      type="radio"
                      name="speed"
                      value="express"
                      className="accent-sprntAccent"
                    />
                    <span>Express</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[11px] uppercase tracking-[0.16em] text-sprntMuted font-ocr">
                Extra notes
              </label>
              <textarea
                name="notes"
                rows={3}
                placeholder="Anything fragile, time-sensitive, or unusual we should know?"
                className="w-full bg-[#151515] border border-sprntBorder px-3 py-2 text-sm focus:outline-none focus:border-sprntAccent resize-none"
              />
            </div>
          </section>

         
          <section className="space-y-4">
            <h2 className="text-[13px] tracking-[0.18em] uppercase text-sprntMuted font-ocr">
              CONTACT
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-[11px] uppercase tracking-[0.16em] text-sprntMuted font-ocr">
                  Name
                </label>
                <input
                  required
                  name="name"
                  placeholder="Your full name"
                  className="w-full bg-[#151515] border border-sprntBorder px-3 py-2 text-sm focus:outline-none focus:border-sprntAccent"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[11px] uppercase tracking-[0.16em] text-sprntMuted font-ocr">
                  Email
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="w-full bg-[#151515] border border-sprntBorder px-3 py-2 text-sm focus:outline-none focus:border-sprntAccent"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-[11px] uppercase tracking-[0.16em] text-sprntMuted font-ocr">
                  WhatsApp number
                </label>
                <input
                  required
                  name="whatsapp"
                  placeholder="+44… or +234…"
                  className="w-full bg-[#151515] border border-sprntBorder px-3 py-2 text-sm focus:outline-none focus:border-sprntAccent"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[11px] uppercase tracking-[0.16em] text-sprntMuted font-ocr">
                  Preferred contact
                </label>
                <select
                  name="contactPreference"
                  className="w-full bg-[#151515] border border-sprntBorder px-3 py-2 text-sm focus:outline-none focus:border-sprntAccent"
                >
                  <option>Email</option>
                  <option>WhatsApp</option>
                  <option>Either</option>
                </select>
              </div>
            </div>
          </section>

         
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-4 border-t border-sprntBorder">
            <div className="text-[11px] md:text-[12px] text-sprntMuted max-w-md">
              Rates provided here are{" "}
              <span className="text-sprntText">indicative only</span> and may
              change based on final weight, dimensions, contents and route.
            </div>

            <button
              type="submit"
              className="
                inline-flex items-center justify-center
                bg-sprntAccent text-sprntBg
                px-6 py-3
                text-[11px] md:text-[12px]
                tracking-[0.2em] uppercase font-ocr
                border border-sprntAccent
                hover:bg-transparent hover:text-sprntAccent
                transition-colors
              "
            >
              Request quote
            </button>
          </div>

          {submitted && (
            <p className="text-[12px] text-sprntAccent mt-2">
              Got it. We’ll review this and get back to you shortly.
            </p>
          )}
        </form>
      </div>
    </main>
  );
}
