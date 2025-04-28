export const SITE_PARAMS = {
  domain: "CourseYatra.com",
  title: "My Next.js App",
  description: "This is a sample Next.js application.",
};

export const NAV_LINKS = [
  { href: "/", key: "home", label: "Home" },
  { href: "/about", key: "about", label: "About Us" },
  { href: "/courses", key: "courses", label: "Courses" },
  { href: "/contact", key: "contact", label: "Contact" },
  { href: "/blog", key: "blog", label: "Blog" },
];

export const COURSE_CATEGORIES = [
  { id: 1, key: "pg", label: "PG Courses" },
  { id: 2, key: "exec_ed", label: "Executive Education" },
  { id: 3, key: "ug", label: "UG Courses" },
  { id: 4, key: "phd", label: "Doctorate/ Ph.D." },
  { id: 5, key: "adv_diploma", label: "Advanced Diploma" },
  { id: 6, key: "cert", label: "Certificates" },
];

export const ALL_COURSES = [
  {
    id: "mba",
    slug: "online-mba",
    title: "Online MBA",
    description: "Master of Business Administration",
    duration: "2 years",
    categories: ["pg", "exec_ed"],
  },
  {
    id: "mca",
    slug: "online-mca",
    title: "Online MCA",
    description: "Master of Computer Applications",
    duration: "2 years",
    categories: ["pg"],
  },
  {
    id: "msc",
    slug: "online-msc",
    title: "Online M.Sc.",
    description: "Master of Science",
    duration: "2 years",
    categories: ["pg"],
  },
  {
    id: "ma",
    slug: "online-ma",
    title: "Online MA",
    description: "Master of Arts",
    duration: "2 years",
    categories: ["pg"],
  },
  {
    id: "mba_exec",
    slug: "executive-mba-for-working-professionals",
    title: "Online MBA",
    description: "Executive MBA for Working Professionals",
    duration: "1 years",
    categories: ["exec_ed"],
  },
  {
    id: "mtech_exec",
    slug: "executive-m-tech-programmes",
    title: "Online MBA",
    description: "Executive M.Tech for Working Professionals",
    duration: "1 years",
    categories: ["exec_ed"],
  },
  {
    id: "bba",
    slug: "online-bba",
    title: "Online BBA",
    description: "Bachelor of Business Administration",
    duration: "3 years",
    categories: ["ug"],
  },
  {
    id: "bca",
    slug: "online-bca",
    title: "Online BCA",
    description: "Bachelor of Computer Applications",
    duration: "3 years",
    categories: ["ug"],
  },
  {
    id: "btech_exec",
    slug: "executive-b-btech-programmes",
    title: "B. Tech. for Working Professionals",
    description: "B. Tech. for Working Professionals",
    duration: "3 years",
    categories: ["exec_ed"],
  },
  {
    id: "cert_cybersec",
    slug: "certificate-in-cyber-security",
    title: "Certificate in Cyber Security",
    description: "IIT Delhi - Certificate in Cyber Security",
    duration: "6 months",
    categories: ["cert"],
  },
  {
    id: "phd_social_sciences",
    slug: "phd-in-social-sciences",
    title: "Ph.D. in Social Sciences",
    description: "Amity University - Ph.D. in Social Sciences",
    duration: "24 months",
    categories: ["phd"]
  },
];

export const WHY_MBA = [ 
  {
    title: "Career Growth",
    text: "79% of Indian MBA grads saw a salary hike within 2 years (Source: UGC 2024 Report)",
  },
  {
    title: "Flexibility",
    text: "Online MBAs let you balance work, family, and studies",
  },
  {
    title: "Global Recognition",
    text: "Indian MBA degrees now recognized by WES Canada and other international bodies",
  },
  {
    title: "Entrepreneurship Skills",
    text: "1 in 5 MBA grads start their own ventures (Startup India Report 2023)",
  }
]
