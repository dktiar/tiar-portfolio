// Static fallback data — used when Sanity is not yet configured
// This seed data comes from the BRD

import { Profile, Experience, Project, Certification, Skill, Stat } from "@/types";

export const fallbackProfile: Profile = {
  name: "Tiar Dwi Krisnanto",
  title: "IT Section Head / Senior Supervisor",
  company: "PT Modernland Realty Tbk",
  location: "Jakarta, Indonesia",
  email: "dktiar@gmail.com",
  phone: "+62 878-2797-8061",
  tagline: "IT Leader | Infrastructure & Security | ISO 27001 | Property Tech",
  education: "S1 Informatika — Universitas Kristen Duta Wacana, Yogyakarta (IPK 3.56/4.0)",
  bioId: "IT Section Head dengan pengalaman mengelola infrastruktur IT, kepatuhan ISO 27001:2022, pengembangan aplikasi internal, dan koordinasi operasional lintas departemen di perusahaan properti publik. Memimpin operasional IT lintas 6 gedung kantor dan 8 show unit, mencakup ~138 karyawan dan ~180 perangkat.",
  bioEn: "IT Section Head with experience managing IT infrastructure, ISO 27001:2022 compliance, internal application development, and cross-departmental operational coordination at a publicly listed property company. Leading IT operations across 6 office buildings and 8 show units, covering ~138 employees and ~180 devices.",
  linkedin: "https://linkedin.com/in/tiardwi",
  github: "https://github.com/tiardwi",
};

export const fallbackExperiences: Experience[] = [
  {
    _id: "exp-1",
    company: "PT Modernland Realty Tbk",
    title: "Senior Supervisor / IT Section Head — Management Trainee Batch MT04",
    location: "Jakarta (multi-site: Jakarta Garden City & seluruh site Modernland)",
    startDate: "2023-07",
    isCurrent: true,
    descriptionId: "Memimpin operasional IT lintas 6 gedung kantor dan 8 show unit, mencakup infrastruktur, keamanan siber, kepatuhan ISO 27001:2022, dan pengembangan sistem internal.",
    descriptionEn: "Leading IT operations across 6 office buildings and 8 show units, covering infrastructure, cybersecurity, ISO 27001:2022 compliance, and internal system development.",
    achievements: [
      { textId: "Optimasi anggaran lisensi dari Rp 607 juta → Rp 432 juta (efisiensi Rp 175 juta/tahun)", textEn: "License budget optimization from IDR 607M → IDR 432M (IDR 175M/year savings)" },
      { textId: "Eliminasi dependensi server lokal: penghematan Rp 90 juta/tahun", textEn: "Local server dependency elimination: IDR 90M/year savings" },
      { textId: "Pengelolaan ~138 karyawan aktif dan ~180 perangkat di seluruh site", textEn: "Managing ~138 active employees and ~180 devices across all sites" },
      { textId: "Implementasi CrowdStrike Falcon SOAR: 4 workflow notifikasi Telegram otomatis", textEn: "CrowdStrike Falcon SOAR implementation: 4 automated Telegram notification workflows" },
      { textId: "Memimpin uplift dokumentasi ISO 27001:2022 lintas 49 dokumen & 7 departemen", textEn: "Led ISO 27001:2022 documentation uplift across 49 documents & 7 departments" },
      { textId: "Koordinasi multimedia & AV untuk event korporat skala besar", textEn: "Multimedia & AV coordination for large-scale corporate events" },
    ],
    order: 1,
  },
  {
    _id: "exp-2",
    company: "Generasi Gigih 2.0 by YABB & GoTo",
    title: "Frontend Engineer (Intensive Training Program)",
    location: "Remote",
    startDate: "2022-02",
    endDate: "2022-07",
    isCurrent: false,
    descriptionId: "Mengembangkan project website group dengan konsep bisnis digital. Exposure terhadap proses rekrutmen industri teknologi dan lingkungan kerja profesional.",
    descriptionEn: "Developed group website projects with digital business concepts. Exposure to tech industry recruitment processes and professional work environments.",
    achievements: [
      { textId: "Pengembangan website grup dengan ReactJS", textEn: "Group website development with ReactJS" },
      { textId: "Exposure rekrutmen industri teknologi", textEn: "Tech industry recruitment exposure" },
    ],
    stack: ["ReactJS", "HTML", "CSS"],
    order: 2,
  },
];

export const fallbackProjects: Project[] = [
  {
    _id: "proj-1",
    title: "Sistem Aset Operasional Modernland",
    category: "development",
    descriptionId: "Digitalisasi aset perusahaan dengan arsitektur Group/Authority/User.",
    descriptionEn: "Company asset digitization with Group/Authority/User architecture.",
    technologies: ["BRD", "System Design"],
    impactId: "Digitalisasi aset perusahaan",
    impactEn: "Company asset digitization",
    impact: "Digitalisasi aset perusahaan",
    order: 1,
  },
  {
    _id: "proj-2",
    title: "CrowdStrike Falcon SOAR Integration",
    category: "security",
    descriptionId: "Integrasi Fusion SOAR dengan Telegram API untuk 4 workflow otomasi: EPP, Host First Seen, Hidden, Contained.",
    descriptionEn: "Fusion SOAR integration with Telegram API for 4 automation workflows: EPP, Host First Seen, Hidden, Contained.",
    technologies: ["Fusion SOAR", "Telegram API"],
    impactId: "4 workflow otomasi keamanan",
    impactEn: "4 automated security workflows",
    impact: "4 workflow otomasi keamanan",
    order: 2,
  },
  {
    _id: "proj-3",
    title: "ISO 27001:2022 Documentation Uplift",
    category: "compliance",
    descriptionId: "Uplift 49 dokumen lintas 7 departemen dengan presentasi interaktif Risk Committee.",
    descriptionEn: "Uplift of 49 documents across 7 departments with interactive Risk Committee presentation.",
    technologies: ["HTML", "Word", "Mapping tools"],
    impactId: "49 dokumen, 7 departemen",
    impactEn: "49 documents, 7 departments",
    impact: "49 dokumen, 7 departemen",
    order: 3,
  },
  {
    _id: "proj-4",
    title: "Kick Off Target 2025 — Multimedia Ops",
    category: "event-it",
    descriptionId: "Streaming & display management untuk event korporat skala besar.",
    descriptionEn: "Streaming & display management for large-scale corporate events.",
    technologies: ["OBS Studio", "AV Systems"],
    impactId: "Event korporat skala besar",
    impactEn: "Large-scale corporate event",
    impact: "Event korporat skala besar",
    order: 4,
  },
  {
    _id: "proj-5",
    title: "FileKit — Browser File Toolkit",
    category: "development",
    descriptionId: "PDF, image conversion, HEIC support — tanpa backend.",
    descriptionEn: "PDF, image conversion, HEIC support — no backend required.",
    technologies: ["HTML", "JavaScript", "CSS"],
    impactId: "Tool konversi file tanpa server",
    impactEn: "Serverless file conversion tool",
    impact: "Tool konversi file tanpa server",
    order: 5,
  },
  {
    _id: "proj-6",
    title: "PKS Web/SEO — PT Boleh Dicoba Digital",
    category: "governance",
    descriptionId: "Source code confidentiality, server & deployment standards.",
    descriptionEn: "Source code confidentiality, server & deployment standards.",
    technologies: ["Contract", "Dev Standards"],
    impactId: "Standar IT Governance",
    impactEn: "IT Governance standards",
    impact: "IT Governance standards",
    order: 6,
  },
];

export const fallbackCertifications: Certification[] = [
  { _id: "cert-1", name: "Certified Secure Computer User (CSCU)", issuer: "EC-Council via PROA", score: "45/50 (90%)", order: 1 },
  { _id: "cert-2", name: "IT Specialist: HTML & CSS", issuer: "Certiport", score: "831/1000", order: 2 },
  { _id: "cert-3", name: "SAP Certification", issuer: "SAP", order: 3 },
  { _id: "cert-4", name: "English Certification", issuer: "—", order: 4 },
];

export const fallbackSkills: Skill[] = [
  {
    _id: "skill-1",
    category: "infrastructure",
    categoryLabelId: "Infrastruktur & Keamanan",
    categoryLabel: "Infrastructure & Security",
    items: ["CrowdStrike Falcon (EPP, SOAR, Fusion)", "ISO 27001:2022", "Network Management", "Windows Server", "Active Directory", "CPanel", "VPN"],
    order: 1,
  },
  {
    _id: "skill-2",
    category: "development",
    categoryLabelId: "Development & Tools",
    categoryLabel: "Development & Tools",
    items: ["HTML", "CSS", "ReactJS", "JavaScript", "Microsoft Office Advanced", "Adobe Suite", "Autodesk", "Trimble", "OBS Studio"],
    order: 2,
  },
  {
    _id: "skill-3",
    category: "management",
    categoryLabelId: "Manajemen & Tata Kelola",
    categoryLabel: "Management & Governance",
    items: ["IT Budgeting & Cost Optimization", "Vendor Management", "SOP Development", "BRD Writing", "SDLC", "ISO 27001 Documentation", "Risk Assessment"],
    order: 3,
  },
];

export const fallbackStats: Stat[] = [
  { _id: "stat-1", labelId: "Karyawan Dikelola", labelEn: "Employees Managed", label: "Karyawan Dikelola", value: "138+", contextId: "Aktif, lintas site Modernland", contextEn: "Active, across Modernland sites", context: "Aktif, lintas site Modernland", order: 1 },
  { _id: "stat-2", labelId: "Perangkat Dikelola", labelEn: "Devices Managed", label: "Perangkat Dikelola", value: "180+", contextId: "6 gedung kantor, 8 show unit", contextEn: "6 office buildings, 8 show units", context: "6 gedung kantor, 8 show unit", order: 2 },
  { _id: "stat-3", labelId: "Efisiensi Anggaran", labelEn: "Budget Efficiency", label: "Efisiensi Anggaran", value: "175M", contextId: "Rp/tahun dari optimasi lisensi", contextEn: "IDR/year from license optimization", context: "Rp/tahun dari optimasi lisensi", order: 3 },
  { _id: "stat-4", labelId: "Penghematan Infra", labelEn: "Infra Savings", label: "Penghematan Infra", value: "90M", contextId: "Rp/tahun eliminasi server lokal", contextEn: "IDR/year local server elimination", context: "Rp/tahun eliminasi server lokal", order: 4 },
  { _id: "stat-5", labelId: "Dokumen ISO", labelEn: "ISO Documents", label: "Dokumen ISO", value: "49", contextId: "Lintas 7 departemen", contextEn: "Across 7 departments", context: "Lintas 7 departemen", order: 5 },
  { _id: "stat-6", labelId: "Workflow SOAR", labelEn: "SOAR Workflows", label: "Workflow SOAR", value: "4", contextId: "CrowdStrike Falcon otomasi", contextEn: "CrowdStrike Falcon automation", context: "CrowdStrike Falcon otomasi", order: 6 },
];
