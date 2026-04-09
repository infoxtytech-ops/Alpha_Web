/* eslint-disable @next/next/no-img-element */
"use client";

const services = [
  {
    title: "Hematology",
    anchorId: "hematology",
    description:
      "We analyze your blood to detect issues like low hemoglobin, infections, and clotting problems — a key test to understand your overall health and immune system.",
    listTitle: "Available Tests",
    tests: [
      "Full Blood Count (FBC)",
      "ESR",
      "Platelet Count",
      "Peripheral Blood Film",
      "Reticulocyte Count",
      "Coagulation Profile",
    ],
  },
  {
    title: "Chemical Pathology — 1",
    anchorId: "chemical-pathology",
    description:
      "This set of tests tracks how your body handles sugar — helpful for diagnosing and managing diabetes or blood sugar-related concerns.",
    listTitle: "Available Tests",
    tests: [
      "Fasting Blood Sugar (FBS)",
      "Random Blood Sugar (RBS)",
      "PPBS",
      "HbA1c",
      "Lipid Profile",
      "Cholesterol / Triglycerides",
    ],
  },
  {
    title: "Chemical Pathology — 2",
    description:
      "We check fat levels, kidney function, and essential minerals to assess heart health and body balance. Great for routine checkups and chronic condition monitoring.",
    listTitle: "Available Tests",
    tests: [
      "Renal Profile",
      "Serum Creatinine",
      "Blood Urea",
      "Electrolytes",
      "Uric Acid",
      "Fasting Lipid Profile",
    ],
  },
  {
    title: "Chemical Pathology — 3",
    description:
      "Tests focusing on liver function and important body enzymes to detect liver and digestive issues.",
    listTitle: "Available Tests",
    tests: [
      "TIBC (UIBC)",
      "Serum Iron",
      "LDH",
      "Amylase",
      "Liver Profile (LFT)",
      "AST (SGOT)",
      "ALT (SGPT)",
      "Alkaline Phosphatase (ALP)",
      "Gamma GT (GGT)",
      "Serum Albumin",
      "Total Protein",
      "Bilirubin Total / Direct",
    ],
  },
  {
    title: "Chemical Pathology — 4",
    description:
      "Infection and autoimmune screening panels to detect illnesses early and guide treatment.",
    listTitle: "Available Tests",
    tests: [
      "ANA",
      "Leptospira Antibodies",
      "Influenza Ag (H1N1)",
      "Dengue NS1 Ag",
      "Dengue IgG / IgM",
      "CRP",
      "Rheumatoid Factor",
      "HIV",
      "SAT / ASOT",
      "VDRL",
      "Hepatitis B Surface Ag",
      "Hepatitis A / C Antibodies",
    ],
  },
  {
    title: "Hormone Tests",
    anchorId: "hormone-tests",
    description:
      "Advanced hormone testing for thyroid, reproductive, and stress-related conditions.",
    listTitle: "Available Tests",
    tests: [
      "Troponin I - Titre",
      "Ferritin",
      "T3",
      "T4",
      "TSH",
      "FSH",
      "LH",
      "Prolactin",
      "Testosterone",
      "Progesterone",
      "Vitamin D",
      "Serum beta HCG",
      "Total PSA",
      "CA 125",
      "CEA",
    ],
  },
  {
    title: "Doctor Channeling",
    anchorId: "doctor-channeling",
    description:
      "Connect with our panel of experienced specialists for expert medical advice and ongoing care.",
    listTitle: "Specialities",
    tests: [
      "General Physician",
      "Dermatologist",
      "Paediatrician",
      "Chest Physician",
      "Haematologist",
      "Psychiatrist",
      "Cardiologist",
      "Counsellor",
    ],
  },
  {
    title: "Animal Testing",
    anchorId: "animal-testing",
    description:
      "Dedicated laboratory services for pets to monitor health and detect disease early.",
    listTitle: "Specialties",
    tests: [
      "FBC (Full Blood Count)",
      "Liver Enzymes",
      "Renal Function Tests",
      "Electrolytes",
      "Infection Screening",
      "And many more",
    ],
  },
  {
    title: "Other Services",
    description:
      "Additional services designed for your convenience including home visits and cardiac checks.",
    listTitle: "Specialties",
    tests: ["ECG", "Home Visits", "Blood Pressure Monitoring"],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 py-20 lg:py-32">
  <div className="absolute inset-0">
    <img
      src="/alphaHeroWeb1.png"
      alt="Medical Laboratory Background"
      className="h-full w-full object-cover opacity-80"
    />
  </div>

  <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-4xl text-center">
      <h1 className="text-4xl font-bold tracking-tight text-black sm:text-5xl lg:text-6xl">
        Health Packages for
      </h1>

      <h2 className="mt-2 text-4xl font-bold tracking-tight text-[var(--primary)] sm:text-5xl lg:text-6xl">
        Every Lifestyle
      </h2>

      <p className="mt-6 text-base leading-7 text-black/80 lg:text-lg">
        Special limited-time offers. Choose from our curated health checkup
        packages to give you a complete picture of your health.
      </p>
    </div>
  </div>
</section>

      {/* Services Section */}
      <section className="bg-gradient-to-b from-white via-slate-50/50 to-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Services */}
        <div className="space-y-6">
          {services.map((service, index) => (
            <section
              key={index}
              id={service.anchorId}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-200/60 lg:p-8 }"
              style={{
                backgroundImage: index % 2 === 0 ? 'url(/services-pink.png)' : 'url(/services-card-bg.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'top-center',
              }}
            >
              {/* Background Overlay */}
              <div className={`absolute inset-0 rounded-3xl backdrop-blur-sm ${
                index % 2 === 0 ? 'bg-[var(--accent)]/2' : 'bg-[var(--primary)]/5'
              }`} />
              
              <div className="relative z-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
                {/* Number */}
                <div className="lg:col-span-1">
                  <span className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl text-sm font-semibold text-white shadow-lg ${
                    index % 2 === 0 ? 'bg-[#eb0a8c]' : 'bg-[#2b8fcd]'
                  }`}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Main content */}
                <div className="lg:col-span-5">
                  <p className={`mb-3 text-xs font-semibold uppercase tracking-[0.22em] ${
                    index % 2 === 0 ? 'text-[#eb0a8c]' : 'text-[#2b8fcd]'
                  }`}>
                    {service.listTitle === "Available Tests" ? "Laboratory Service" : "Medical Service"}
                  </p>

                  <h2 className="mb-4 text-2xl font-bold tracking-tight text-slate-900 lg:text-3xl">
                    {service.title}
                  </h2>

                  <p className="text-sm leading-7 text-slate-600 lg:text-base">
                    {service.description}
                  </p>
                </div>

                {/* Tests */}
                <div className="lg:col-span-4">
                  <div className={`rounded-2xl border-2 p-5 lg:p-6 ${
                    index % 2 === 0 
                      ? 'border-[#eb0a8c]/20 bg-[#eb0a8c]/5' 
                      : 'border-[#2b8fcd]/20 bg-[#2b8fcd]/5'
                  }`}>
                    <p className={`mb-4 text-xs font-semibold uppercase tracking-[0.2em] ${
                      index % 2 === 0 ? 'text-[#eb0a8c]' : 'text-[#2b8fcd]'
                    }`}>
                      {service.listTitle}
                    </p>

                    <div className="flex flex-wrap gap-2.5">
                      {service.tests.map((test, i) => (
                        <span
                          key={i}
                          className={`rounded-full border px-3.5 py-2 text-xs font-medium transition-all duration-200 ${
                            index % 2 === 0
                              ? 'border-[#eb0a8c]/30 bg-white text-[#eb0a8c] hover:border-[#eb0a8c]/60 hover:bg-[#eb0a8c]/10'
                              : 'border-[#2b8fcd]/30 bg-white text-[#2b8fcd] hover:border-[#2b8fcd]/60 hover:bg-[#2b8fcd]/10'
                          }`}
                        >
                          {test}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="lg:col-span-2 lg:flex lg:items-start lg:justify-end">
                  <a
                    href="tel:+94718227704"
                    className={`inline-flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-200 lg:w-auto ${
                      index % 2 === 0 
                        ? 'bg-[#eb0a8c] shadow-[#eb0a8c]/50 hover:bg-[#d10875]' 
                        : 'bg-[#2b8fcd] shadow-[#2b8fcd]/50 hover:bg-[#1f6ba3]'
                    }`}
                  >
                    Book a Test
                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </section>
          ))}
        </div>
        </div>
      </section>
    </>
  );
}