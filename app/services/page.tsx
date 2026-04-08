"use client";

const services = [
  {
    title: "Hematology",
    anchorId: "hematology",
    icon: "🩸",
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
    icon: "🧪",
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
    icon: "🧪",
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
    icon: "🩹",
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
    icon: "🧪",
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
    icon: "⚗️",
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
    icon: "👨‍⚕️",
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
    icon: "🐶",
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
    icon: "🩺",
    description:
      "Additional services designed for your convenience including home visits and cardiac checks.",
    listTitle: "Specialties",
    tests: ["ECG", "Home Visits", "Blood Pressure Monitoring"],
  },
];

export default function ServicesPage() {
  return (
    <section className="bg-white py-14 lg:py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 border-b border-slate-200 pb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">
            Diagnostic Services
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-3">
            Services &amp; Testing Overview
          </h1>
          <p className="text-base text-slate-600 font-light">
            Comprehensive and precise medical diagnostics, all under one roof.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-0">
          {services.map((service, index) => (
            <section
              key={index}
              id={service.anchorId}
              className="border-b border-slate-200 py-12 lg:py-14 transition-colors duration-200 hover:bg-slate-50 relative group"
            >
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-slate-900 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
                {/* Number Column */}
                <div className="hidden lg:block lg:col-span-1 pt-1">
                  <span className="text-xs font-light text-slate-400 tracking-wide">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Main Info */}
                <div className="lg:col-span-5">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 flex-shrink-0 text-base">
                      {service.icon}
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-1.5 rounded">
                      Service
                    </span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-semibold text-slate-900 mb-3">
                    {service.title}
                  </h2>
                  <p className="text-sm lg:text-base text-slate-600 font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Tests Column */}
                <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-slate-200 pt-6 lg:pt-0 lg:pl-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
                    {service.listTitle}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.tests.map((test, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200 hover:border-slate-300 transition-colors duration-150"
                      >
                        {test}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="lg:col-span-2 flex items-start">
                  <a
                    href="tel:+94718227704"
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-900 border border-slate-900 rounded hover:bg-slate-900 hover:text-white transition-colors duration-200 whitespace-nowrap"
                  >
                    Book a Test
                    <span className="transition-transform duration-200 group-hover:translate-x-0.5">
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