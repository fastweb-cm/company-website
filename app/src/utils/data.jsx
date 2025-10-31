import { Facebook, Twitter, Linkedin, Github, Mail, Phone,GlobeLock,
    Code2,Smartphone, Server,Cpu,Code, Cloud, ShoppingBag  } from "lucide-react";
import project1 from "../assets/backgrounds/project1.jpg";
import project2 from "../assets/backgrounds/project2.jpg";
import project3 from "../assets/backgrounds/project3.jpg";

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
    location: "Checkpoint, Molyko Buea",
    email: { icon: <Mail size={20} />, value: "contact@fastwebcm.org"},
    phone: {icon: <Phone size={20} />, value: "+237 677-196-252"},
}

export const services = [
  {
    icon: GlobeLock,
    title: "System Security",
    subtitle: "Protecting your digital infrastructure from threats and vulnerabilities.",
  },
  {
    icon: Code2,
    title: "Web Development",
    subtitle: "Building high-performance, scalable, and visually stunning web applications.",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    subtitle: "Creating intuitive and responsive mobile apps for iOS and Android platforms.",
  },
  {
    icon: Server,
    title: "Network Solutions",
    subtitle: "Designing, implementing, and managing secure and efficient network infrastructures.",
  },
  {
    icon: Cpu,
    title: "IT Consulting",
    subtitle: "Providing expert guidance to optimize your technology and digital operations.",
  },
];

export const projects = [
  {
    title: "FinSync – Financial Analytics Dashboard",
    category: "Web Application",
    description:
      "A real-time analytics dashboard for finance companies to visualize transactions, revenue streams, and client activities using React, Node.js, and MongoDB.",
    icon: Code,
    image: project1, // placeholder path
  },
  {
    title: "QuickCart – E-commerce Platform",
    category: "E-commerce",
    description:
      "An all-in-one shopping solution with secure payments, advanced search filters, and real-time delivery tracking powered by Next.js and Stripe.",
    icon: ShoppingBag,
    image: project2,
  },
  {
    title: "NovaBank Mobile",
    category: "Mobile App",
    description:
      "A cross-platform mobile banking app offering seamless transfers, biometric login, and instant loan services built with React Native and Firebase.",
    icon: Smartphone,
    image: project3,
  },
  {
    title: "CloudNet Suite",
    category: "Cloud Infrastructure",
    description:
      "A cloud-based system for deploying and monitoring enterprise workloads with auto-scaling and container orchestration using AWS and Kubernetes.",
    icon: Cloud,
    image: project1,
  },
];

  