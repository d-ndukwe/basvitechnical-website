export const companyData = {
  name: "BASVI Technical Services Ltd",
  rcNumber: "RC 1601462",
  phone: "+234 708 179 1860",
  email: "info@basvitechnical.com",
  address1: "No. 8 Gbenga Ashafa Street Park View Estate, Ikoyi, Lagos, Nigeria",
  address2: "V150A RIVTAF Golf Estate, Trans-Amadi, Port Harcourt, Rivers, Nigeria",

  // High-Trust Badges
  certifications: [
    { name: "CAC Registered", code: "RC 1601462" },
    { name: "NEMSA Certified", code: "CC/CEIF/PR/03377" },
    { name: "COREN Registered", code: "Engineering Council" },
    { name: "BPP Compliant", code: "Federal Procurement" },
    { name: "PENCOM & ITF", code: "Fully Compliant" }
  ],

  // Past High-Value Track Record
  // Ensure your projects array in src/data/company.ts looks like this:
projects: [
  {
    title: "Solar Boreholes & 100,000L Overhead Storage Tank",
    client: "Gombe State Ministry of Works",
    location: "Billiri-Dongol-Kashere, Gombe State",
    value: "Undisclosed",
    year: "2021",
    category: "Water & Civil",
    verified: true,
    certificateRef: "GS/MOW/DHW/562/VOL.3"
  },
  {
    title: "330KV Line Trace Maintenance (Delta-Benin Line 1)",
    client: "Huscan Nigeria Limited / TCN Network",
    location: "Delta – Benin Corridor",
    value: "Undisclosed",
    year: "2021",
    category: "High Voltage Power",
    verified: true,
    certificateRef: "Huscan Completion Cert"
  },
  {
    title: "330KV Line Trace Maintenance (Osogbo-Ikeja West)",
    client: "Dune Engineering & Construction Co.",
    location: "Osogbo – Ikeja West Corridor",
    value: "Undisclosed",
    year: "2020",
    category: "High Voltage Power",
    verified: true,
    certificateRef: "DECL Completion Cert"
  },
  {
    title: "Staff Quarters Borehole & Overhead Water Infrastructure",
    client: "DESOPADEC (Delta State)",
    location: "Asaba, Delta State",
    value: "Undisclosed",
    year: "2020",
    category: "Water & Civil",
    verified: true,
    certificateRef: "DES/CTB14/TRSP4/6/15"
  },
  {
    title: "19nos Industrial Solar Street Lighting Installation",
    client: "National Universities Commission (NUC)",
    location: "Abuja Secretariat, FCT",
    value: "Undisclosed",
    year: "2021",
    category: "Solar & Renewable",
    verified: true,
    certificateRef: "NUC/DESO/PD/044/VOL.1"
  },
  {
    title: "Provision & Installation of 12nos Solar Street Lights",
    client: "Nigerian Shippers' Council",
    location: "Kaduna & Lokoja Area Offices",
    value: "Undisclosed",
    year: "2021",
    category: "Solar & Renewable",
    verified: true,
    certificateRef: "NSC/PROC/2020/IFT/KAD-LOK/LOT 13"
  },
  {
    title: "60,000+ Meters LV Lines Procurement & Installation",
    client: "Cross River State Collaboration",
    location: "Cross River State",
    value: "Undisclosed",
    year: "2021",
    category: "Power Grid",
    verified: true,
    certificateRef: "Field Project Entry"
  }
],

  // Executive Leadership
  // Add or update the leadership array inside src/data/company.ts
leadership: [
  {
    name: "Engr. Felix B. Ebiware",
    role: "Managing Director / CEO",
    qualifications: "COREN Registered (R. 32,627) | NEMSA Certified",
    experience: "20+ Years Practice",
    specialty: "Gas Turbine, Substation & High-Voltage Power Installations",
    bio: "Certified electrical engineer leading corporate strategy, high-voltage line projects, and large-scale grid deployments across Nigeria."
  },
  {
    name: "Engr. Etumnu M. Prince",
    role: "Project Manager",
    qualifications: "B.Eng., M.Sc., C.Eng | COREN (R. 6142) | MNSE",
    experience: "30+ Years Practice",
    specialty: "Hydro Power, Water Infrastructure & SCADA Systems",
    bio: "Decades of engineering management leading multi-million Naira dam, hydroelectric power generation, and regional water supply projects."
  },
  {
    name: "Engr. Michael Sunday Ajayi",
    role: "Senior Electrical Engineer",
    qualifications: "B.Eng | COREN (R. 14,040) | MNSE",
    experience: "20+ Years Practice",
    specialty: "MEP Design, High/Low Voltage Distribution & Switchgears",
    bio: "Expert in MEP infrastructure design, BEME preparation, and technical supervision for high-capacity power distribution systems."
  },
  {
    name: "Engr. Francis Mouneke",
    role: "Chief Electrical Engineer",
    qualifications: "Certified Electrical Engineer",
    experience: "8+ Years Practice",
    specialty: "Renewable Energy, Solar Mini-Grids & Storage Systems",
    bio: "Specialist in solar mini-grid architectural designs, commercial street lighting, and industrial battery bank systems."
  }
],

  services: [
  {
    id: "power-energy",
    title: "High-Voltage & Power Infrastructure",
    subtitle: "LV/HV Grid Stringing, Substation & Panel Engineering",
    description: "Certified design, installation, and maintenance of high and low-voltage electrical distribution networks, changeover switchgears, and power distribution systems.",
    icon: "bolt", // Icon identifier
    capabilities: [
      "330KV & 33KV Transmission Line Trace Maintenance",
      "Low Voltage (LV) Lines Stringing & Pole Installation",
      "Transformer Sizing, Installation & Commissioning",
      "LV Panel Fabrication (Switchgears, Feeder Pillars, AMF Panels)",
      "Industrial DC Battery Banks & Control Systems"
    ]
  },
  {
    id: "renewable-solar",
    title: "Renewable Energy & Solar Mini-Grids",
    subtitle: "Commercial Solar, Street Lighting & Storage Systems",
    description: "Turnkey solar energy solutions designed to deliver uninterrupted, clean power for public infrastructure, corporate campuses, and off-grid facilities.",
    icon: "sun",
    capabilities: [
      "Solar Mini-Grid Design & High-Capacity SHS Installation",
      "Municipal & Institutional Solar Street Lighting Projects",
      "Solar Control Room, Inverter & Storage Bank Installations",
      "Solar Panel Array Mounting & Cable Termination",
      "Renewable Energy Audit & Efficiency Optimization"
    ]
  },
  {
    id: "water-infrastructure",
    title: "Water Engineering & Civil Works",
    subtitle: "Industrial Boreholes, Storage Tanks & Treatment Plants",
    description: "End-to-end water supply infrastructure development, combining deep exploratory drilling, solar pumping systems, and large-capacity elevated storage tanks.",
    icon: "droplet",
    capabilities: [
      "Deep Exploratory Borehole Drilling & Instrumentation",
      "Heavy-Duty Overhead Steel Tanks (Up to 100,000L Capacity)",
      "Solar-Powered Borehole Pumping & Automation Systems",
      "Water Treatment Plant Piping & Instrumentation (SCADA/PLC)",
      "Civil Foundation Strengthening & Retaining Works"
    ]
  },
  {
    id: "procurement-pm",
    title: "Technical Procurement & Project Management",
    subtitle: "OEM Sourcing, QA/QC & Site Supervision",
    description: "Streamlined sourcing of critical industrial components through direct OEM relationships, paired with rigorous site management to eliminate project delays.",
    icon: "briefcase",
    capabilities: [
      "Strategic Sourcing of Critical Electrical & Civil Components",
      "Direct OEM Partnering to Reduce Lead Time & Mitigate Risk",
      "Quality Assurance & Quality Control (QA/QC) Supervision",
      "Bill of Engineering Measurement and Evaluation (BEME)",
      "Construction Yard Fabrication Support & Testing"
    ]
  }
]
};