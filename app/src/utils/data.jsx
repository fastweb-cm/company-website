import { Facebook, Twitter, Linkedin, Github, Mail, Phone,GlobeLock,
    Code2,Smartphone, Server,Cpu } from "lucide-react";
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

  