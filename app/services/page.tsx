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
    <section className="bg-gradient-to-b from-white via-slate-50/50 to-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 lg:mb-20 max-w-3xl">
          <p className="mb-4 inline-flex rounded-full border border-slate-200 bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500 shadow-sm">
            Diagnostic Services
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Services &amp; Testing Overview
          </h1>
          <p className="mt-5 text-base leading-7 text-slate-600 lg:text-lg">
            Comprehensive and precise medical diagnostics, all under one roof.
            Designed for clarity, trust, and easy access to every key service.
          </p>
        </div>

        {/* Services */}
        <div className="space-y-6">
          {services.map((service, index) => (
            <section
              key={index}
              id={service.anchorId}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-200/60 lg:p-8"
            >
              {/* Accent Line */}
              <div className="absolute left-0 top-0 h-full w-1 bg-slate-900 opacity-80" />

              <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
                {/* Number */}
                <div className="lg:col-span-1">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-sm font-semibold text-white shadow-lg">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Main content */}
                <div className="lg:col-span-5">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
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
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 lg:p-6">
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                      {service.listTitle}
                    </p>

                    <div className="flex flex-wrap gap-2.5">
                      {service.tests.map((test, i) => (
                        <span
                          key={i}
                          className="rounded-full border border-slate-200 bg-white px-3.5 py-2 text-xs font-medium text-slate-700 transition-all duration-200 hover:border-slate-400 hover:bg-slate-100"
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
                    className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-900 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-300 transition-all duration-200 hover:bg-slate-800 lg:w-auto"
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
  );
}