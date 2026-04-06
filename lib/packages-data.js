export const packageCategories = [
  {
    id: "graphic-design",
    label: "Graphic Design",
    packages: [
      { name: "Basic Logo", price: "$34.99", features: ["3 Logo Concepts", "1 Dedicated Designer", "2 Revisions", "4 Hrs TAT", "24/7 Support"] },
      { name: "Ideal Logo", price: "$74.99", features: ["6 Logo Concepts", "2 Designers", "Unlimited Revisions", "24-48 Hrs TAT", "Final Files (JPEG, PNG, PDF)", "24/7 Support"] },
      { name: "Striking Logo", price: "$134.99", popular: true, features: ["8 Logo Concepts", "3 Designers", "Unlimited Revisions", "24-48 Hrs TAT", "All Formats (Ai, PSD, EPS, JPEG, PNG, PDF)", "Dedicated Account Manager", "100% Unique Guarantee"] },
      { name: "Logo + Stationery", price: "$149.99", features: ["8 Logo Concepts", "4 Designers", "Unlimited Revisions", "All Formats", "Business Card, Letterhead, Envelope"] },
      { name: "Branding Package", price: "$399.99", features: ["Full Stationery Suite", "T-Shirt Design", "Packaging Design", "Invoice & Email Signature", "Brand Guidelines"] },
    ],
  },
  {
    id: "video-editing",
    label: "Video Editing",
    packages: [
      { name: "Basic Edit", price: "$149.99", features: ["Up to 30s Duration", "Cuts & Transitions", "Background Music", "1 Revision", "HD Output"] },
      { name: "Professional", price: "$499.99", popular: true, features: ["Up to 60s Duration", "Professional Script", "Custom Graphics", "HD Resolution", "Voice Over", "3-4 Weeks TAT"] },
      { name: "Premium", price: "$999.99", features: ["Up to 120s Duration", "Motion Graphics", "Color Grading", "Sound Design", "4K Resolution", "Unlimited Revisions"] },
    ],
  },
  {
    id: "web-development",
    label: "Web Development",
    packages: [
      { name: "Basic Website", price: "$229.99", features: ["3 Pages Custom Design", "Responsive Layout", "Lead Form", "W3C Certified HTML", "Full Deployment"] },
      { name: "Starter Website", price: "$499.99", features: ["6 Pages Custom Design", "3 Interactive Sections", "Lead Form", "Google Sitemap", "6 Stock Images"] },
      { name: "Professional", price: "$799.99", popular: true, features: ["10 Pages Custom Design", "Interactive Animations", "Mobile Responsive", "CMS", "Unlimited Revisions", "Full Deployment"] },
      { name: "Business", price: "$1,399.99", features: ["20 Pages Custom Design", "Dynamic & Conceptual", "Mobile Responsive", "CMS", "Payment Integration", "Social Media Integration"] },
      { name: "Enterprise", price: "$3,999.99", features: ["Full Portal Development", "Custom CMS", "Multi-Lingual", "3rd Party API", "Module-wise Architecture", "1 Year Support"] },
    ],
  },
  {
    id: "mobile-apps",
    label: "Mobile Apps",
    packages: [
      { name: "Starter App", price: "$1,499.99", features: ["Up to 5 Screens", "Android OR iOS", "Basic UI Design", "API Integration", "App Store Submission"] },
      { name: "Professional App", price: "$2,999.99", popular: true, features: ["Up to 15 Screens", "Android + iOS", "Custom UI/UX", "Push Notifications", "Payment Integration", "Admin Panel"] },
      { name: "Enterprise App", price: "$5,999.99", features: ["Unlimited Screens", "Both Platforms", "Custom Backend", "Real-time Features", "Analytics Dashboard", "6 Months Support"] },
    ],
  },
  {
    id: "ecommerce",
    label: "Ecommerce",
    packages: [
      { name: "Lite Store", price: "$799.99", features: ["6 Pages Custom Design", "Up to 5 Products", "Shopping Cart", "Payment Module", "CMS"] },
      { name: "Professional Store", price: "$1,399.99", popular: true, features: ["10 Pages Custom Design", "Up to 100 Products", "Shopping Cart", "Payment Integration", "CMS", "Interactive Banners"] },
      { name: "Business Store", price: "$2,499.99", features: ["Unlimited Pages", "Up to 2000 Products", "Multi-User Login", "Multi-Lingual", "15 Stock Images", "Full Deployment"] },
    ],
  },
  {
    id: "va-consultation",
    label: "VA Consultation",
    packages: [
      { name: "Basic VA", price: "$299/mo", features: ["20 Hours/Month", "Email Management", "Calendar Management", "Basic Research", "Weekly Reports"] },
      { name: "Professional VA", price: "$599/mo", popular: true, features: ["40 Hours/Month", "Project Coordination", "CRM Management", "Social Media Support", "Data Entry & Analysis", "Daily Reports"] },
      { name: "Executive VA", price: "$999/mo", features: ["80 Hours/Month", "Full Admin Support", "Team Coordination", "Strategy Consulting", "Process Automation", "Dedicated Manager"] },
    ],
  },
  {
    id: "seo",
    label: "SEO",
    packages: [
      { name: "Economy SEO", price: "$1,299", features: ["10 Keywords", "15 Pages Optimized", "On-Page + Off-Page SEO", "Monthly Reporting", "5 Business Listings", "10 Articles/Blogs"] },
      { name: "Growth SEO", price: "$2,399", popular: true, features: ["15 Keywords", "15 Pages Optimized", "Complete SEO Suite", "10 Business Listings", "20 Articles", "30 Blog Posts", "Infographics"] },
      { name: "Enterprise SEO", price: "$6,999", features: ["25 Keywords", "25 Pages Optimized", "Full SEO & Technical Audit", "15 Business Listings", "40 Articles", "60 Blog Posts", "Press Releases"] },
    ],
  },
  {
    id: "social-media",
    label: "Social Media",
    packages: [
      { name: "Basic", price: "$249.99", features: ["2 Platform Management", "1 Campaign", "Facebook & Instagram Ads", "Analytics Report", "Monthly Report"] },
      { name: "Professional", price: "$499.99", popular: true, features: ["3 Platform Management", "3 Campaigns", "Facebook, Instagram, LinkedIn", "YouTube Ads", "Remarketing", "Content Calendar"] },
      { name: "Advanced", price: "$899.99", features: ["5 Platform Management", "6 Campaigns", "All Major Platforms", "Dynamic Ads", "A/B Testing", "Influencer Outreach"] },
    ],
  },
  {
    id: "lead-generation",
    label: "Lead Generation",
    packages: [
      { name: "Starter Leads", price: "$349.99", features: ["1 Landing Page", "Basic PPC Setup", "Lead Form Integration", "Monthly Reporting", "Email Follow-ups"] },
      { name: "Growth Leads", price: "$799.99", popular: true, features: ["3 Landing Pages", "Google + Social PPC", "CRM Integration", "A/B Testing", "Email Sequences", "Bi-weekly Reporting"] },
      { name: "Scale Leads", price: "$1,499.99", features: ["Unlimited Landing Pages", "Multi-channel PPC", "Full Funnel Automation", "Advanced Analytics", "Retargeting Campaigns", "Dedicated Manager"] },
    ],
  },
  {
    id: "ebooks",
    label: "E-books",
    packages: [
      { name: "Basic E-book", price: "$199.99", features: ["Up to 30 Pages", "Professional Layout", "Cover Design", "1 Format (PDF)", "2 Revisions"] },
      { name: "Professional E-book", price: "$449.99", popular: true, features: ["Up to 80 Pages", "Custom Design", "Cover Design", "3 Formats (PDF, EPUB, MOBI)", "Unlimited Revisions", "Publishing Support"] },
      { name: "Premium E-book", price: "$799.99", features: ["Unlimited Pages", "Interactive Elements", "Premium Cover Art", "All Formats", "Amazon KDP Setup", "Marketing Collateral"] },
    ],
  },
];
