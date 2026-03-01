
type City = {
  city: string;
  label: string;
  lat: number;
  lng: number;
};

const CITY_LOCATIONS: City[] = [
  { city: "Lagos", label: "Lagos, Nigeria", lat: 6.5244, lng: 3.3792 },
  { city: "London", label: "London, United Kingdom", lat: 51.5074, lng: -0.1278 },
  { city: "Accra", label: "Accra, Ghana", lat: 5.6037, lng: -0.187 },
  { city: "Abidjan", label: "Abidjan, Côte d’Ivoire", lat: 5.3453, lng: -4.0244 },
  { city: "New York", label: "New York, United States", lat: 40.7128, lng: -74.0060 },
  { city: "Dubai", label: "Dubai, UAE", lat: 25.2048, lng: 55.2708 },
  { city: "Toronto", label: "Toronto, Canada", lat: 43.6532, lng: -79.3832 },
  { city: "Atlanta", label: "Atlanta, United States", lat: 33.7490, lng: -84.3880 },
  { city: "Dakar", label: "Dakar, Senegal", lat: 14.7167, lng: -17.4677 },
  { city: "Lomé", label: "Lomé, Togo", lat: 6.1375, lng: 1.2123 },
  { city: "Manchester", label: "Manchester, United Kingdom", lat: 53.4808, lng: -2.2475 },
  { city: "Montreal", label: "Montreal, Canada", lat: 45.5017, lng: -73.5673 },
  { city: "Cairo", label: "Cairo, Egypt", lat: 30.0444, lng: 31.2357 },
  { city: "Paris", label: "Paris, France", lat: 48.8566, lng: 2.3522 },
  { city: "Luanda", label: "Luanda, Angola", lat: -8.8383, lng: 13.2344 },
  { city: "Houston", label: "Houston, United States", lat: 29.7604, lng: -95.3698 },
  { city: "Dublin", label: "Dublin, Ireland", lat: 53.3498, lng: -6.2603 },
  { city: "Mombasa", label: "Mombasa, Kenya", lat: -4.0435, lng: 39.6682 },
  { city: "Berlin", label: "Berlin, Germany", lat: 52.52, lng: 13.405 },
  { city: "Indianapolis", label: "Indianapolis, United States", lat: 39.7684, lng: -86.1581 },
  { city: "Cape Town", label: "Cape Town, South Africa", lat: -33.9249, lng: 18.4241 },
  { city: "Copenhagen", label: "Copenhagen, Denmark", lat: 55.6761, lng: 12.5683 },
  { city: "Helsinki", label: "Helsinki, Finland", lat: 60.1699, lng: 24.9384 },
  { city: "Dar es Salaam", label: "Dar es Salaam, Tanzania", lat: -6.7924, lng: 39.2083 },
];

export default function CitiesPage() {
  return (
    <main className="min-h-screen bg-black text-sprntText pt-[calc(48px+32px)] px-[20px] md:px-[40px] pb-16">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* HEADER */}
        <header className="space-y-2">
          
          <h1 className="text-[32px] md:text-[48px] leading-tight font-pp">
            Cities we currently serve.
          </h1>
          <p className="text-[12px] md:text-[14px] text-sprntDarkGrey max-w-2xl">
            This list updates as Sprnt expands across key logistics corridors. Lagos and London are our central hubs.
          </p>
        </header>

        {/* GRID */}
        <section className="border border-sprntBorder bg-[#111111]/80 backdrop-blur-md">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {CITY_LOCATIONS.map((c, idx) => (
              <div
                key={c.city}
                className={`p-5 md:p-6 border-sprntBorder ${
                  idx % 2 === 0 ? "md:border-r" : ""
                } ${idx < CITY_LOCATIONS.length - 2 ? "border-b" : ""}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-[16px] md:text-[18px] font-pp tracking-tight">
                      {c.city}
                    </div>
                    <div className="text-[12px] text-sprntDarkGrey font-ocr tracking-tight">
                      {c.label}
                    </div>
                  </div>

                  <div className="text-right text-[11px] font-ocr text-sprntDarkGrey leading-tight">
                    <div>Lat {c.lat.toFixed(4)}</div>
                    <div>Lon {c.lng.toFixed(4)}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="text-[11px] text-sprntDarkGrey font-ocr tracking-tight">
          Don’t see your city? Use{" "}
          <span className="text-sprntAccent" >
            <a href="/quotes">
            QUOTES
            </a>
            </span> and we’ll confirm availability.
        </div>
      </div>
    </main>
  );
}