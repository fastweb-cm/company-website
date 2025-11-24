import { Facebook, Twitter, Linkedin, Github, Mail, Phone,GlobeLock,
    Code2,Smartphone, Server,Cpu,Code, Cloud, ShoppingBag,Smile,Briefcase,Clock,ThumbsUp,  
    Navigation, GraduationCap} from "lucide-react";
import project1 from "../assets/backgrounds/project1.jpg";
import project2 from "../assets/backgrounds/project2.jpg";
import project3 from "../assets/backgrounds/project3.jpg";
import ichami from "../assets/images/ichami.jpeg";
import Drpeter from "../assets/images/Drpeter.png";
import service1 from "../assets/backgrounds/service1.jpg"
import acadpackpro from "../assets/banners/acadpackpro.jpg";

export const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
]

export const socialLinks = [
    { icon: <Facebook size={20} />, href: "https://facebook.com" },
    { icon: <Twitter size={20} />, href: "https://twitter.com" },
    { icon: <Linkedin size={20} />, href: "https://linkedin.com" },
    { icon: <Github size={20} />, href: "https://github.com" },
    { icon: <Mail size={20} />, href: "contact@fastwebcm.org" },
];


export const contactInfo = {
    phone: {icon: <Phone size={20} />, value: "+237 677-196-252",title: "Have any question?"},
    email: { icon: <Mail size={20} />, value: "contact@fastwebcm.org",title: "Write email"},
    location: { icon: <Navigation size={20} />, value: "Checkpoint, Molyko Buea", title: "Visit anytime"},

}

export const services = [
  {
    icon: GlobeLock,
    title: "System Security",
    subtitle: "Protecting your digital infrastructure from threats and vulnerabilities.",
    banner: service1,
    slug: "system-security",
    description: "We help organizations strengthen their cybersecurity posture through vulnerability assessments, penetration testing, malware protection, and continuous monitoring. Our goal is to ensure your systems remain resilient against cyberattacks and unauthorized access."
  },
  {
    icon: Code2,
    title: "Web Development",
    subtitle: "Building high-performance, scalable, and visually stunning web applications.",
    banner: service1,
    slug: "web-development",
    description: "Our web development services encompass front-end and back-end development, e-commerce solutions, content management systems, and progressive web apps. We leverage modern frameworks and technologies to deliver seamless user experiences that drive engagement and conversions."
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    subtitle: "Creating intuitive and responsive mobile apps for iOS and Android platforms.",
    banner: service1,
    slug: "mobile-development",
    description: "We specialize in developing cross-platform and native mobile applications that cater to your business needs. From concept to deployment, we ensure your app is user-friendly, feature-rich, and optimized for performance across all devices."
  },
  {
    icon: Server,
    title: "Network Solutions",
    subtitle: "Designing, implementing, and managing secure and efficient network infrastructures.",
    banner: service1,
    slug: "network-solutions",
    description: "Our network solutions include LAN/WAN design, VPN setup, firewall configuration, and network monitoring. We ensure your network is robust, scalable, and secure, enabling seamless connectivity and data flow across your organization."
  },
  {
    icon: Cpu,
    title: "IT Consulting",
    subtitle: "Providing expert guidance to optimize your technology and digital operations.",
    banner: service1,
    slug: "it-consulting",
    description: "Our IT consulting services help businesses align their technology strategies with their goals. We offer insights on digital transformation, cloud adoption, IT governance, and technology roadmaps to drive innovation and efficiency."
  },
];

export const projects = [
  {
    title: "AcadPack SE",
    category: "Web Application / School ERP",
    description:
      "AcadPack SE is a Secondary School Management System focusing on core academic operations. It provides tools for managing student records, assessments, attendance, and report cards through an automated and friendly interface.",
    icon: GraduationCap,
    image: project1,
    about: `AcadPack SE is built specifically for secondary schools that need a streamlined and reliable academic management tool. It handles the entire academic workflow—student registration, attendance tracking, assessment input, continuous assessment computation, and automatic report generation. 
    It reduces administrative workload for teachers and guarantees accurate, timely student performance reports.`,
    challengeSolution: [
      {
        title: "Efficient Academic Workflow",
        challenge: "Schools often struggle with manual student data management, leading to errors in reporting.",
        solution: "AcadPack SE automates key academic processes, ensuring accuracy, transparency, and real-time access to student performance."
      },
      {
        title: "Accurate Report Card Generation",
        challenge: "Manual grading and report card preparation is time-consuming and prone to mistakes.",
        solution: "The system computes grades instantly and produces standardized digital report cards."
      }
    ],
    client: "CUIB",
    value: "$3,000",
    demoLink: "se.acadpack.fastwebcm.org",
    accounts: [
      { role: "admin", password: "123456" },
      { role: "teacher", password: "123456" }
    ],
    slug: "acadpack-se"
  },

  {
    title: "AcadPack SE+",
    category: "Web Application / School ERP",
    description:
      "AcadPack SE+ combines academic management with a complete financial module for secondary schools. It centralizes student data, fee transactions, receipts, and financial reporting.",
    icon: GraduationCap,
    image: acadpackpro,
    about: `Acadpack SE+ is a digital transformation platform built for modern secondary schools. The system automates the entire student 
    lifecycle—from admission, enrollment, and attendance tracking, to continuous assessment and result generation. It includes a powerful finance 
    module that manages payments, fee structures, outstanding balances, receipts, and transaction reconciliation. The interface is clean, fast, and 
    optimized for administrators, teachers, accountants, and parents. Acadpack SE+ was built to solve common challenges faced by schools such as scattered student data, difficulty tracking fee payments, 
    manual report generation, and limited transparency in academic performance.`,
    challengeSolution: [
      {
        title: "Unified Academic & Financial Data",
        challenge: "Using separate systems for academics and finance caused inconsistencies and manual reconciliation.",
        solution: "AcadPack SE+ unifies both operations into one cohesive platform."
      },
      {
        title: "Automated Fee Tracking",
        challenge: "Manual fee collection creates errors, missing receipts, and untracked payments.",
        solution: "Digital fees, receipts, outstanding alerts, and complete financial reporting eliminate guesswork."
      }
    ],
    client: "SSEC Bamenda",
    value: "$5,500",
    demoLink: "seplus.acadpack.fastwebcm.org",
    accounts: [
      { role: "admin", password: "123456" },
      { role: "fin", password: "123456" }
    ],
    slug: "acadpack-se-plus"
  },

  {
    title: "AcadPack Uni Transcript",
    category: "Web Application / University System",
    description:
      "AcadPack Uni Transcript is a university-grade transcript processing system that automates course management, grade computation, and certified transcript generation.",
    icon: GraduationCap,
    image: project2,
    about: `This edition focuses solely on managing student academic history and generating official transcripts. 
    It automates GPA computation, transcript formatting, classification rules, and historical student record archiving. 
    Designed for universities that want to digitize transcript workflows without adopting a full ERP.`,
    challengeSolution: [
      {
        title: "Accurate GPA & Transcript Processing",
        challenge: "Manual transcription leads to errors and delays during student graduation.",
        solution: "Automated grade computation and transcript generation ensures accuracy and eliminates delays."
      },
      {
        title: "Historical Record Management",
        challenge: "Many institutions struggle to retrieve legacy data efficiently.",
        solution: "AcadPack Uni Transcript centralizes and preserves all student records securely."
      }
    ],
    client: "Hibmat University of Buea",
    value: "$6,000",
    demoLink: "unitr.acadpack.fastwebcm.org",
    accounts: [
      { role: "admin", password: "123456" }
    ],
    slug: "acadpack-uni-transcript"
  },

  {
    title: "AcadPack Uni Suite",
    category: "Web Application / University ERP",
    description:
      "AcadPack Uni Suite is a full university management package integrating transcript processing with academic operations such as course registration, grading, and program management.",
    icon: GraduationCap,
    image: project3,
    about: `AcadPack Uni Suite offers universities a complete academic lifecycle management system. 
    It includes transcript management, course management, continuous assessment tools, registration workflows, grading automation, and academic reporting. 
    Built for higher institutions that require a full academic and transcript system.`,
    challengeSolution: [
      {
        title: "Complete Academic Lifecycle Automation",
        challenge: "Universities often use many disconnected systems for grading, registrations, and transcripts.",
        solution: "Uni Suite unifies all processes into one platform, ensuring accuracy and efficiency."
      },
      {
        title: "Flexible Course & Program Structure",
        challenge: "Complex university grading and program rules are hard to manage manually.",
        solution: "AcadPack Uni Suite supports custom grading systems, credit loads, and program structures."
      }
    ],
    client: "Biaka University Institute of Buea",
    value: "$9,000",
    demoLink: "unisuite.acadpack.fastwebcm.org",
    accounts: [
      { role: "admin", password: "123456" },
      { role: "lecturer", password: "123456" }
    ],
    slug: "acadpack-uni-suite"
  },

  {
    title: "AcadPack Enroll",
    category: "Web Application / Registration Portal",
    description:
      "AcadPack Enroll is an online registration system allowing institutions to digitize admission and enrollment processes.",
    icon: GraduationCap,
    image: project1,
    about: `AcadPack Enroll enables schools and universities to manage admissions effortlessly. 
    Students can apply online, upload documents, track progress, and receive notifications. 
    Administrators benefit from automated applicant sorting, verification workflows, and admission decision tools.`,
    challengeSolution: [
      {
        title: "Paperless Admission Process",
        challenge: "Institutions face long queues and manual paperwork during registration.",
        solution: "AcadPack Enroll digitizes the entire workflow from application to approval."
      },
      {
        title: "Faster Applicant Screening",
        challenge: "Manually filtering applicants consumes time and introduces errors.",
        solution: "Automated screening and applicant scoring speeds up decision-making."
      }
    ],
    client: "Hibmat University of Buea",
    value: "$4,000",
    demoLink: "enroll.acadpack.fastwebcm.org",
    accounts: [
      { role: "admin", password: "123456" }
    ],
    slug: "acadpack-enroll"
  }
];


export const countdownData = [
  {
    label: "Satisfied Clients",
    value: 150,
    icon: Smile,
    suffix: "+"
  },
  {
    label: "Projects Completed",
    value: 320,
    icon: Briefcase,
    suffix: "+"
  },
  {    
    label: "Years of Experience",
    value: 25,
    icon: Clock,
    suffix: "+"
  },
  {
    label: "Satisfaction Rate",
    value: 99,
    icon: ThumbsUp,
    suffix: "%"
  }
]

export const team = [
  {
    name: "Dr. Peter Leke",
    role: "CEO",
    photo: Drpeter,
    socialLinks: [
      { icon: <Facebook size={20} />, href: "https://facebook.com" },
      { icon: <Twitter size={20} />, href: "https://twitter.com" },
      { icon: <Linkedin size={20} />, href: "https://linkedin.com" },
    ]
  },
  {
    name: "Ichami Brandon",
    role: "Developer",
    photo: ichami,
    socialLinks: [
      { icon: <Facebook size={20} />, href: "https://facebook.com" },
      { icon: <Twitter size={20} />, href: "https://twitter.com" },
      { icon: <Linkedin size={20} />, href: "https://linkedin.com" },
    ]
  },

  {
    name: "Dr. Peter Leke",
    role: "CEO",
    photo: Drpeter,
    socialLinks: [
      { icon: <Facebook size={20} />, href: "https://facebook.com" },
      { icon: <Twitter size={20} />, href: "https://twitter.com" },
      { icon: <Linkedin size={20} />, href: "https://linkedin.com" },
    ]
  }
]

export const testimonials = [
  {
    id: 1,
    name: 'Dr. Peter Leke',
    role: 'CTO, NexaTech Solutions',
    image: Drpeter,
    feedback:
      'Collaborating with this team has been a game changer for our digital transformation goals. Their technical expertise and commitment to delivering scalable solutions are unmatched.',
  },
  {
    id: 2,
    name: 'Ubangatuh Brandong Ichami',
    role: 'Lead Developer, FastWebCM',
    image: ichami,
    feedback:
      'A highly skilled and reliable IT partner. Their ability to turn complex requirements into seamless, high-performing applications truly sets them apart.',
  },
  {
    id: 3,
    name: 'Sarah Johnson',
    role: 'Project Manager, CloudEdge Systems',
    image: ichami,
    feedback:
      'Exceptional experience from start to finish. The team was innovative, proactive, and always went the extra mile to ensure our project exceeded expectations.',
  },
];

export const faqs = [
  {
    question: "What services does your IT consultancy provide?",
    answer:
      "We offer software development, cloud migration, cybersecurity, IT support, and digital transformation services.",
  },
  {
    question: "Do you offer support for small businesses?",
    answer:
      "Yes, we support startups, SMEs, and large enterprises with scalable IT solutions.",
  },
  {
    question: "How do you charge for your services?",
    answer:
      "Our pricing model depends on the project complexity. We offer hourly rates, fixed project pricing, and retainer plans.",
  },
  {
    question: "Do you provide post-deployment support?",
    answer:
      "Absolutely! We offer maintenance packages, bug fixing, monitoring, and 24/7 support options.",
  },
];


  