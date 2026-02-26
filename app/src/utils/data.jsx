import { Facebook, Twitter, Linkedin, Github, Mail, Phone,GlobeLock,
    Code2,Smartphone, Server,Cpu,Code, Cloud, ShoppingBag,Smile,Briefcase,Clock,ThumbsUp,  
    Navigation, GraduationCap,ShoppingCart} from "lucide-react";
import project1 from "../assets/backgrounds/project1.jpg";
import project2 from "../assets/backgrounds/project2.jpg";
import project3 from "../assets/backgrounds/project3.jpg";
import ichami from "../assets/images/ichami.jpeg";
import Drpeter from "../assets/images/Drpeter.png";
import defaultuser from "../assets/images/defaultuser.png";
import service1 from "../assets/backgrounds/service1.jpg"
import acadpackpro from "../assets/banners/acadpackpro.jpg";
import storeflow from "../assets/banners/storeflow.png";

export const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
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
  },
  {
  title: "StoreFlow IMS",
  category: "Web Application / Inventory & Sales Management",
  description:
    "StoreFlow IMS is a multi-branch supermarket management system designed to handle inventory, sales, and customer transactions across multiple sales points.",
  icon: ShoppingCart,
  image: storeflow,
  about: `StoreFlow IMS is a modern inventory and sales management system built for supermarkets and retail businesses operating across multiple branches.
  
  The system allows administrators to manage products, categories, brands, and stock levels from a centralized dashboard. Warehouses and sales points are fully supported, including controlled stock transfers between locations.
  
  StoreFlow IMS also handles point-of-sale operations, enabling sales to both anonymous walk-in customers and registered clients. It supports credit and debit sales, making it ideal for businesses that offer customer credit accounts.
  
  With clear role-based access control, StoreFlow IMS ensures that each staff member—whether warehouse manager or salesperson—has access only to the tools they need.`,
  challengeSolution: [
    {
      title: "Multi-Branch Inventory Control",
      challenge:
        "Managing stock across warehouses and multiple sales points often leads to discrepancies and stock losses.",
      solution:
        "StoreFlow IMS provides real-time inventory tracking with controlled stock transfers between warehouses and sales points."
    },
    {
      title: "Flexible Sales Management",
      challenge:
        "Traditional POS systems struggle to handle both anonymous sales and customer credit tracking.",
      solution:
        "The system supports walk-in customers, registered clients, and credit/debit sales with complete transaction history."
    },
    {
      title: "Role-Based Operations",
      challenge:
        "Giving all staff the same system access increases the risk of errors and misuse.",
      solution:
        "StoreFlow IMS implements strict role-based access for Super Admins, Warehouse Managers, and Salespersons."
    }
  ],
  client: "Private Retail Client",
  value: "$2,500",
  demoLink: "storeflow.fastwebcm.org",
  accounts: [
    { role: "admin", password: "123456" },
    { role: "warehouse", password: "123456" },
    { role: "salesgirl", password: "123456" }
  ],
  slug: "storeflow-ims"
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
  }
]

export const testimonials = [
  {
    id: 1,
    name: 'Mr. Fru',
    role: 'Proprietor, SSEC Bamenda',
    image: defaultuser,
    feedback:'Before AcadPack SE+, managing academics and school finances was stressful and time-consuming. Everything was done separately and errors were common. Since adopting the system, student records, assessments, fees, and reports are all handled in one place. It has simplified our operations so much that I personally came to Buea to appreciate the team for the excellent work they delivered.'
  },
  {
    id: 2,
    name: 'Dr. Peter Leke',
    role: 'School Administrator',
    image: Drpeter,
    feedback:
      'The AcadPack platform reduced paperwork and manual calculations drastically. Teachers now focus more on teaching, while reports and results are generated automatically. The system is reliable, easy to use, and well adapted to our school environment.',
  },
  {
    id: 3,
    name: 'Mr. Tabe',
    role: 'Sales Manager, Retail Co.',
    image: defaultuser,
    feedback:
      'With StoreFlow IMS, we always know what is in stock at each sales point. Sales reports are clear, and tracking customer credit is no longer a problem. It has improved accountability among staff and reduced losses.',
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

export const testblogposts = [
  {
    id: 1,
    category: "Cloud & Infrastructure",
    title: "Designing Resilient Cloud Architectures for Modern Enterprises",
    content: `In today’s digital economy, system downtime is not just an inconvenience—it is a direct revenue and reputation risk. Modern enterprises must design cloud architectures that are resilient, observable, and scalable by default.

A resilient architecture begins with redundancy at multiple layers: compute, storage, networking, and data. Leveraging multi–availability zone deployments ensures that failure in one zone does not cascade into total service disruption. Beyond infrastructure redundancy, organizations should adopt stateless application design patterns to allow horizontal scaling under unpredictable load.

Equally important is observability. Centralized logging, metrics aggregation, and distributed tracing enable proactive detection of anomalies before they escalate into incidents. A mature incident response workflow—complete with runbooks and automated remediation—reduces mean time to recovery (MTTR).

From a governance standpoint, infrastructure as code (IaC) enforces consistency across environments. Version-controlled deployment scripts reduce configuration drift and improve auditability. When combined with continuous integration and continuous deployment (CI/CD) pipelines, organizations can achieve safe, incremental releases with minimal operational friction.

Ultimately, resilient cloud design is not about eliminating failure. It is about anticipating failure, containing blast radius, and recovering rapidly with minimal user impact.`,
    img_url: "https://picsum.photos/seed/cloudinfra/800/500",
    date_posted: new Date("2026-02-10").toDateString(),
    featured: true,
  },
  {
    id: 2,
    category: "Cybersecurity",
    title: "Zero Trust Security: A Practical Roadmap for Implementation",
    content: `Traditional perimeter-based security models are increasingly ineffective in distributed and hybrid work environments. Zero Trust shifts the paradigm from “trust but verify” to “never trust, always verify.”

A Zero Trust strategy begins with identity as the new perimeter. Multi-factor authentication (MFA), single sign-on (SSO), and strong identity governance ensure that only authenticated and authorized users gain access to resources. Role-based and attribute-based access control further reduce unnecessary privilege exposure.

Network segmentation is another foundational component. By isolating workloads and enforcing strict east-west traffic policies, organizations minimize lateral movement opportunities in the event of a breach. Continuous monitoring and behavioral analytics help detect suspicious activity in real time.

Data protection must also be prioritized. Encryption at rest and in transit, coupled with data classification policies, ensures that sensitive information remains secure regardless of its location. Security awareness training reinforces technical controls by addressing human risk factors.

Implementing Zero Trust is not a single project—it is a phased transformation requiring executive sponsorship, cross-functional collaboration, and measurable security metrics.`,
    img_url: "https://picsum.photos/seed/zerotrust/800/500",
    date_posted: new Date("2026-02-12").toDateString(),
  },
  {
    id: 3,
    category: "Digital Transformation",
    title: "From Legacy Systems to Scalable Platforms: Navigating Digital Transformation",
    content: `Many organizations remain constrained by legacy systems that were never designed for today’s integration and scalability demands. Digital transformation requires more than adopting new tools—it demands architectural modernization and cultural alignment.

The first step is conducting a comprehensive systems audit. Identify technical debt, integration bottlenecks, and performance constraints. With this visibility, organizations can define a phased modernization roadmap that balances innovation with operational continuity.

Application refactoring or re-platforming often yields measurable improvements in performance and maintainability. Microservices and API-driven architectures promote modularity, allowing teams to innovate independently without destabilizing core systems.

Equally important is change management. Technology initiatives fail when organizational readiness is overlooked. Clear communication, stakeholder buy-in, and incremental rollout strategies significantly increase adoption success rates.

Digital transformation is a journey of continuous improvement. By aligning technology strategy with business objectives, organizations can build adaptive platforms capable of evolving alongside market demands.`,
    img_url: "https://picsum.photos/seed/digitaltransform/800/500",
    date_posted: new Date("2026-02-15").toDateString(),
  },
  {
    id: 4,
    category: "Data & Analytics",
    title: "Building a Data-Driven Organization: Strategy, Governance, and Execution",
    content: `Data is one of the most valuable strategic assets an organization possesses. However, value is only realized when data is reliable, accessible, and actionable.

A data-driven strategy begins with governance. Clear ownership, standardized data definitions, and quality controls ensure consistency across departments. Without governance, analytics outputs risk being fragmented or contradictory.

Modern data platforms consolidate structured and unstructured data into centralized repositories, enabling advanced analytics and machine learning applications. Real-time dashboards provide operational insights, while predictive models inform long-term strategy.

Security and compliance considerations must be integrated from the outset. Data privacy regulations require robust access controls, audit trails, and retention policies. Embedding compliance into system design prevents costly retroactive adjustments.

Ultimately, becoming data-driven is not about collecting more data. It is about transforming raw information into strategic intelligence that informs measurable business outcomes.`,
    img_url: "https://picsum.photos/seed/dataanalytics/800/500",
    date_posted: new Date("2026-02-18").toDateString(),
  },
  {
    id: 5,
    category: "DevOps & Automation",
    title: "Accelerating Delivery with DevOps and Intelligent Automation",
    content: `Speed and reliability are no longer mutually exclusive in software delivery. DevOps practices bridge development and operations, enabling faster release cycles without compromising system stability.

Continuous integration pipelines automate code validation through unit tests, static analysis, and security scanning. Continuous delivery workflows ensure that validated builds can be deployed consistently across staging and production environments.

Infrastructure automation eliminates manual configuration errors. Using declarative templates, teams can replicate entire environments with minimal effort. Automated rollback mechanisms further safeguard against failed deployments.

Intelligent automation extends beyond deployment. Monitoring systems integrated with alerting and remediation scripts can automatically scale resources or restart failing services. This reduces operational overhead and allows teams to focus on strategic initiatives.

DevOps is fundamentally a cultural shift—one that emphasizes collaboration, shared accountability, and iterative improvement. Organizations that successfully adopt DevOps practices gain both competitive agility and operational resilience.`,
    img_url: "https://picsum.photos/seed/devopsautomation/800/500",
    date_posted: new Date("2026-02-20").toDateString(),
  }
];