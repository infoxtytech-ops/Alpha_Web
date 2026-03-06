'use client';

import { useState } from 'react';
import { 
  Search, Microscope, Activity, Heart, 
  Brain, Bone, ShieldCheck, Info, 
  Clock, ClipboardCheck, Users, Droplets
} from 'lucide-react';
import { motion } from 'motion/react';

const categories = [
  { id: 'all', name: 'All Services', icon: ShieldCheck },
  { id: 'hematology', name: 'Hematology', icon: Droplets },
  { id: 'chemical-pathology', name: 'Chemical Pathology', icon: Activity },
  { id: 'hormones', name: 'Hormone Tests', icon: Brain },
  { id: 'urine-stool', name: 'Urine & Stool', icon: ClipboardCheck },
  { id: 'channeling', name: 'Doctor Channeling', icon: Users },
  { id: 'animal', name: 'Animal Testing', icon: Bone },
];

const services = [
  // Hematology Data
  {
    id: 1,
    category: 'hematology',
    name: 'Full Blood Count (FBC)',
    description: 'Checks your blood for signs of infections, anemia, and other conditions. It is a key test to understand your overall health and immune system.',
    price: 'LKR 850/-',
    tat: '4 Hours',
    prep: 'No fasting required'
  },
  // Chemical Pathology - 1
  {
    id: 2,
    category: 'chemical-pathology',
    name: 'Fasting Blood Sugar (FBS)',
    description: 'Measures your blood sugar levels for diabetes and glucose control. Helpful for diagnosing and managing sugar-related concerns.',
    price: 'LKR 350/-',
    tat: '2 Hours',
    prep: '10-12 hours fasting required'
  },
  // Chemical Pathology - 2
  {
    id: 3,
    category: 'chemical-pathology',
    name: 'Renal Profile',
    description: 'Tests your kidney health and basic body chemistry. Great for routine checkups and chronic condition monitoring.',
    price: 'LKR 2,200/-',
    tat: '6 Hours',
    prep: 'Overnight fasting recommended'
  },
  // Chemical Pathology - 3
  {
    id: 4,
    category: 'chemical-pathology',
    name: 'Liver Profile (LFT)',
    description: 'Evaluates your liver function and checks vital body enzymes. Gives a clearer picture of how your organs are working.',
    price: 'LKR 2,500/-',
    tat: '6 Hours',
    prep: 'Fasting preferred'
  },
  // Chemical Pathology - 4
  {
    id: 5,
    category: 'chemical-pathology',
    name: 'Dengue NS1 Ag',
    description: 'Detects infections like dengue early. This panel screens for viruses and immune responses.',
    price: 'LKR 1,800/-',
    tat: '4 Hours',
    prep: 'No special prep'
  },
  // Hormone Tests
  {
    id: 6,
    category: 'hormones',
    name: 'TSH (Thyroid Hormone)',
    description: 'Advanced hormone level testing to find imbalances and guide treatment for conditions like fatigue.',
    price: 'LKR 1,500/-',
    tat: '8 Hours',
    prep: 'No special prep'
  },
  // Urine & Stool
  {
    id: 7,
    category: 'urine-stool',
    name: 'Urine Full Report (UFR)',
    description: 'Detects infections and tracks kidney and gut health through a full-body check from the inside out.',
    price: 'LKR 450/-',
    tat: '2 Hours',
    prep: 'Mid-stream sample required'
  },
   // Doctor Channeling
  {
    id: 8,
    category: 'channeling',
    name: 'Doctor Channeling',
    description: 'Connect with specialized healthcare professionals.Get expert medical advice and treatment by connecting with our panel of specialized doctors — from general health to complex care.',
    price: 'LKR 1,000/-',
    tat: '2 Hours',
    prep: 'Mid-stream sample required'
  },
    // Doctor Channeling
  {
    id: 9,
    category: 'channeling',
    name: 'animal testing',
    description: "Lab tests to monitor your pet's health accurately.Just like humans, pets need medical checkups too! We provide reliable lab testing for animals to detect and monitor various health conditions.",
    price: 'LKR 1,000/-',
    tat: '2 Hours',
    prep: 'Mid-stream sample required'
  }
];

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = services.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white text-slate-900">
      
      {/* Hero Section */}
      {/* <section className="bg-slate-50 border-b border-slate-100 py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-2xl">
            <span className="text-blue-600 font-black text-[10px] uppercase tracking-[0.3em] mb-4 block">ALPHA MEDI LABORATORY</span>
            <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6">
              Test <span className="text-blue-600">Directory</span>
            </h1>
            <p className="text-lg text-slate-500 mb-10 leading-relaxed font-medium">
              Browse through our comprehensive range of clinical investigations and specialized diagnostic services.
            </p>
            
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                <Search className="text-slate-400 group-focus-within:text-blue-600" size={20} />
              </div>
              <input 
                type="text"
                className="block w-full pl-14 pr-6 py-5 rounded-2xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all text-lg"
                placeholder="Search tests (e.g. FBC, Lipid, Liver)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Sidebar Categories */}
            <aside className="w-full lg:w-72 shrink-0">
              <div className="sticky top-28">
                <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 ml-4">Department</h3>
                <nav className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl text-sm font-bold transition-all ${
                        activeCategory === cat.id 
                        ? 'bg-blue-600 text-white shadow-xl shadow-blue-200' 
                        : 'text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <cat.icon size={20} className={activeCategory === cat.id ? 'text-white' : 'text-blue-600'} />
                      {cat.name}
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Services Grid */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-10 pb-6 border-b border-slate-100">
                <h2 className="text-2xl font-black text-slate-900">
                  {activeCategory === 'all' ? 'All Investigations' : categories.find(c => c.id === activeCategory)?.name}
                  <span className="ml-3 text-sm font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">{filteredServices.length} Results</span>
                </h2>
              </div>

              {filteredServices.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredServices.map((service) => (
                    <motion.div 
                      key={service.id}
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="group bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-black text-slate-900 group-hover:text-blue-600 leading-tight">{service.name}</h3>
                        <div className="text-xl font-black text-blue-600">{service.price}</div>
                      </div>
                      
                      <p className="text-sm text-slate-500 mb-8 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-8 p-5 bg-slate-50 rounded-2xl">
                        <div>
                          <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1 flex items-center gap-1">
                            <Clock size={12} className="text-blue-600" /> Result Time
                          </p>
                          <p className="text-sm font-bold text-slate-700">{service.tat}</p>
                        </div>
                        <div>
                          <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1 flex items-center gap-1">
                            <ClipboardCheck size={12} className="text-blue-600" /> Preparation
                          </p>
                          <p className="text-sm font-bold text-slate-700">{service.prep}</p>
                        </div>
                      </div>

                      <div className="flex gap-3 mt-auto">
                        <button 
                           onClick={() => window.location.href = 'tel:+94718227704'}
                           className="flex-1 py-4 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-blue-600 transition-all shadow-lg"
                        >
                          Book Test
                        </button>
                        <button className="p-4 rounded-xl border border-slate-200 text-slate-400 hover:text-blue-600 hover:border-blue-600 transition-all">
                          <Info size={20} />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="bg-slate-50 rounded-[3rem] p-20 text-center border-2 border-dashed border-slate-200">
                  <h3 className="text-xl font-black text-slate-900 mb-2">No matching tests</h3>
                  <p className="text-slate-500 font-medium">Please check your spelling or select a different category.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}