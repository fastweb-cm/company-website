import { Facebook, Twitter, Linkedin, Github, Mail, Phone,GlobeLock,
    Code2,Smartphone, Server,Cpu,Code, Cloud, ShoppingBag,Smile,Briefcase,Clock,ThumbsUp,  
    Navigation} from "lucide-react";
import project1 from "../assets/backgrounds/project1.jpg";
import project2 from "../assets/backgrounds/project2.jpg";
import project3 from "../assets/backgrounds/project3.jpg";
import ichami from "../assets/images/ichami.jpeg";
import Drpeter from "../assets/images/Drpeter.png";
import service1 from "../assets/backgrounds/service1.jpg"

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
    title: "FinSync – Financial Analytics Dashboard",
    category: "Web Application",
    description:
      "A real-time analytics dashboard for finance companies to visualize transactions, revenue streams, and client activities using React, Node.js, and MongoDB.",
    icon: Code,
    image: project1,
    about: `There are many variations of passages of psum available, but the majority have suffered alteration in 
    some form, by injected humour, or randomised words which don't look even slightly believable. If you are going
    to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of 
    text. Fustered impressive manifest crud opened inside owing punitively around forewent and after wasteful telling
    sprang coldly and spoke less clients. Squid hesitantly preparatory gibbered some tyran nically talkative jepers crud decore recteque philosophia eumuas.`,
    challengeSolution: `Methods empowerment. Dramatically architect go forward opportunities credibly revolutionize front-end initiatives for interoperable outsourcing. 
    Conveniently repurpose market-driven deliverables without holistic potentialitiess distinctively integrate`,
    client: "HG Insurance",
    value: "$5,000",
    demoLink: "app.fastwebcm.org",
    accounts: [
      {role: "admin",password:"123456"},
      {role: "fin", password: "123456"},
    ],
    slug: "fin-sync"
  },
  {
    title: "QuickCart – E-commerce Platform",
    category: "E-commerce",
    description:
      "An all-in-one shopping solution with secure payments, advanced search filters, and real-time delivery tracking powered by Next.js and Stripe.",
    icon: ShoppingBag,
    image: project2,
    about: `There are many variations of passages of psum available, but the majority have suffered alteration in 
    some form, by injected humour, or randomised words which don't look even slightly believable. If you are going
    to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of 
    text. Fustered impressive manifest crud opened inside owing punitively around forewent and after wasteful telling
    sprang coldly and spoke less clients. Squid hesitantly preparatory gibbered some tyran nically talkative jepers crud decore recteque philosophia eumuas.`,
    challengeSolution: `Methods empowerment. Dramatically architect go forward opportunities credibly revolutionize front-end initiatives for interoperable outsourcing. 
    Conveniently repurpose market-driven deliverables without holistic potentialitiess distinctively integrate`,
    client: "HG Insurance",
    value: "$5,000",
    demoLink: "app.fastwebcm.org",
    accounts: [
      {role: "admin",password:"123456"},
      {role: "fin", password: "123456"},
    ],
    slug: "quick-cart"
  },
  {
    title: "NovaBank Mobile",
    category: "Mobile App",
    description:
      "A cross-platform mobile banking app offering seamless transfers, biometric login, and instant loan services built with React Native and Firebase.",
    icon: Smartphone,
    image: project3,
    about: `There are many variations of passages of psum available, but the majority have suffered alteration in 
    some form, by injected humour, or randomised words which don't look even slightly believable. If you are going
    to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of 
    text. Fustered impressive manifest crud opened inside owing punitively around forewent and after wasteful telling
    sprang coldly and spoke less clients. Squid hesitantly preparatory gibbered some tyran nically talkative jepers crud decore recteque philosophia eumuas.`,
    challengeSolution: `Methods empowerment. Dramatically architect go forward opportunities credibly revolutionize front-end initiatives for interoperable outsourcing. 
    Conveniently repurpose market-driven deliverables without holistic potentialitiess distinctively integrate`,
    client: "HG Insurance",
    value: "$5,000",
    demoLink: "app.fastwebcm.org",
    accounts: [
      {role: "admin",password:"123456"},
      {role: "fin", password: "123456"},
    ],
    slug: "nova-bank"
  },
  {
    title: "CloudNet Suite",
    category: "Cloud Infrastructure",
    description:
      "A cloud-based system for deploying and monitoring enterprise workloads with auto-scaling and container orchestration using AWS and Kubernetes.",
    icon: Cloud,
    image: project1,
    about: `There are many variations of passages of psum available, but the majority have suffered alteration in 
    some form, by injected humour, or randomised words which don't look even slightly believable. If you are going
    to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of 
    text. Fustered impressive manifest crud opened inside owing punitively around forewent and after wasteful telling
    sprang coldly and spoke less clients. Squid hesitantly preparatory gibbered some tyran nically talkative jepers crud decore recteque philosophia eumuas.`,
    challengeSolution: `Methods empowerment. Dramatically architect go forward opportunities credibly revolutionize front-end initiatives for interoperable outsourcing. 
    Conveniently repurpose market-driven deliverables without holistic potentialitiess distinctively integrate`,
    client: "HG Insurance",
    value: "$5,000",
    demoLink: "app.fastwebcm.org",
    accounts: [
      {role: "admin",password:"123456"},
      {role: "fin", password: "123456"},
    ],
    slug: "cloudnet-suite"
  },
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


  