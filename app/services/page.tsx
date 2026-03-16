"use client";

const services = [
  {
    title: "Hematology",
    anchorId: "hematology",
    icon: "🩸",
    description:
      "Checks your blood for signs of infections, anemia, and other conditions.We analyze your blood to detect issues like low hemoglobin, infections, and clotting problems. It's a key test to understand your overall health and immune system.",
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
    title: "Chemical Pathology - 1",
    anchorId: "chemical-pathology",
    icon: "🧪",
    description:
      "Measures your blood sugar levels for diabetes and glucose control.This set of tests tracks how your body handles sugar — helpful for diagnosing and managing diabetes or blood sugar-related concerns.",
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
    title: "Chemical Pathology - 2",
    icon: "🧪",
    description:
      "Tests your cholesterol, kidney health, and basic body chemistry.We check fat levels, kidney function, and essential minerals to assess heart health and body balance. Great for routine checkups and chronic condition monitoring.",
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
    title: "Chemical Pathology - 3",
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
    title: "Chemical Pathology - 4",
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
    <div className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-14">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
              Diagnostic Services Overview
            </h1>
            <p className="text-slate-600 mt-2">
              Comprehensive and precise medical diagnostics
            </p>
          </div>
        </div>

        {/* Service Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              id={service.anchorId}
              className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition scroll-mt-28"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                {/* <div className="w-14 h-14 rounded-lg bg-blue-600 flex items-center justify-center text-white text-2xl">
                  {service.icon}
                </div> */}

                <div>
                  <h2 className="text-xl font-semibold text-slate-900">
                    {service.title}
                  </h2>

                  <p className="text-sm text-slate-600 mt-1">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Tests */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-sm text-slate-700 mb-6">
                {service.tests.map((test, i) => (
                  <li key={i}>• {test}</li>
                ))}
              </ul>

              {/* Button */}
              <a
                href="tel:+94718227704"
                className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700"
              >
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition">
                  Book a Test
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
