import facebookIcon from "./assets/facebook.png";
import instagramIcon from "./assets/instagram.png";
import linkedinIcon from "./assets/linkedin.png";
import xIcon from "./assets/x.png";
import youtubeIcon from "./assets/youtube.png";
import {
  GraduationCap,
  CalendarClock,
  BookOpenCheck,
  Languages,
  Glasses,
  Users,
} from "lucide-react";

export const WHATSAPP_NUMBER = 917208978248;
export const WHATSAPP_MESSAGE =
  "Hi, I'd like to know more about VRFuture program.";
export const NAV_LINKS = [
  { title: "Home", ref: "" },
  { title: "Programs", ref: "programs" },
  { title: "Faculty", ref: "faculty" },
  { title: "Gallery", ref: "gallery" },
  { title: "Testimonials", ref: "testimonials" },
  { title: "Contact", ref: "contact" },
];
export const SOCIALS = [
  { id: "fb", src: facebookIcon, alt: "Facebook", url: "/" },
  { id: "ig", src: instagramIcon, alt: "Instagram", url: "/" },
  { id: "li", src: linkedinIcon, alt: "Linkedin", url: "/" },
  { id: "x", src: xIcon, alt: "X", url: "/" },
  { id: "yt", src: youtubeIcon, alt: "Youtube", url: "/" },
];
export const FEATURES = [
  {
    title: "Visualize Concepts",
    desc: "VR turns abstract topics into things students can see and explore.",
    img: "placeholder.png",
  },
  {
    title: "Better Retention",
    desc: "Immersive, hands-on learning sticks far longer than reading a textbook.",
    img: "placeholder.png",
  },
  {
    title: "Higher Engagement",
    desc: "Curiosity-driven VR lessons keep students genuinely interested.",
    img: "placeholder.png",
  },
];

export const COURSES = [
  {
    title: "Classes 5 to 12",
    desc: "All the subjects from class 5 to 12 for CBSE, GSEB & ICSE boards all over Daman, Vapi, Silvas and valsad",
    img: "placeholder.png",
  },
  {
    title: "JEE Preparation",
    desc: "JEE preparation for class 11th-12th science students.",
    img: "placeholder.png",
  },
  {
    title: "NEET Preparation",
    desc: "NEET preparation for class 11th-12th science students.",
    img: "placeholder.png",
  },
];

export const TRUST_STRIP = [
  {
    icon: Glasses,
    title: "VR-Enabled Learning",
    desc: "Immersive lessons that make tough concepts click.",
  },
  {
    icon: GraduationCap,
    title: "500+ Students Taught",
    desc: "A growing community of confident learners in Daman.",
  },
  {
    icon: CalendarClock,
    title: "5+ Years of Experience",
    desc: "A proven track record of results parents trust.",
  },
  {
    icon: BookOpenCheck,
    title: "CBSE • GSEB • ICSE",
    desc: "Full coverage across all three major boards.",
  },
  {
    icon: Languages,
    title: "3 Mediums",
    desc: "Taught in English, Hindi, and Gujarati.",
  },
  {
    icon: Users,
    title: "Expert Faculty",
    desc: "Experienced teachers dedicated to every student.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    role: "Parent of Class 9 student",
    quote:
      "The VR classes made a huge difference — my daughter finally understands physics concepts she used to struggle with. She actually looks forward to going now.",
  },
  {
    name: "Rahul Desai",
    role: "Class 12 student (JEE)",
    quote:
      "Being able to visualize 3D problems in VR made JEE prep click for me. The teachers are patient and genuinely want you to succeed.",
  },
  {
    name: "Anjali Patel",
    role: "Parent of Class 6 student",
    quote:
      "Teaching in Gujarati and English both helped my son a lot. VRFuture feels personal — they know every child by name.",
  },
  {
    name: "Rahul Deshmukh",
    role: "Class 12 student (JEE)",
    quote:
      "Being able to visualize 3D problems in VR made JEE prep click for me. The teachers are patient and genuinely want you to succeed.",
  },
  {
    name: "Anjali Patil",
    role: "Parent of Class 6 student",
    quote:
      "Teaching in Gujarati and English both helped my son a lot. VRFuture feels personal — they know every child by name.",
  },
];

export const PROGRAMS = [
  {
    id: "foundation",
    title: "Foundation — Classes 5 to 8",
    desc: "Concept-building years, taught immersively with VR.",
    subjects: ["Maths", "Science", "English", "Social Studies"],
  },
  {
    id: "secondary",
    title: "Secondary — Classes 9 & 10",
    desc: "Board-focused coaching to build a strong base for 11–12.",
    subjects: ["Maths", "Science", "Social Science", "English"],
  },
  {
    id: "higher-secondary",
    title: "Higher Secondary — Classes 11 & 12",
    desc: "Stream-wise coaching aligned to board exams.",
    streams: ["Science", "Commerce"],
  },
  {
    id: "competitive",
    title: "JEE & NEET",
    desc: "Focused entrance-exam prep with VR-aided visualization.",
    subjects: ["Physics", "Chemistry", "Maths", "Biology"],
  },
];

export const MEDIUMS = ["English", "Hindi", "Gujarati"];

export const FACULTY = [
  {
    name: "Mr. Rajni Rai",
    subject: "Physics",
    qualification: "M.Sc. Physics",
    bio: "10+ years preparing students for boards and JEE.",
    photo: "faculty-1.jpg",
  },
  {
    name: "Dr. Anjali Sharma",
    subject: "Chemistry",
    qualification: "Ph.D. in Organic Chemistry",
    bio: "Passionate researcher and mentor with 8+ years of NEET coaching experience.",
    photo: "faculty-2.jpg",
  },
  {
    name: "Prof. Rajesh Verma",
    subject: "Mathematics",
    qualification: "B.Tech, IIT Bombay",
    bio: "Specialist in Calculus and Algebra. Helped over 500 students crack IIT-JEE.",
    photo: "faculty-3.jpg",
  },
  {
    name: "Ms. Priya Nair",
    subject: "Biology",
    qualification: "M.Sc. Botany, B.Ed.",
    bio: "Simplifies complex biological diagrams and concepts for board exams.",
    photo: "faculty-4.jpg",
  },
  {
    name: "Mr. Amit Patel",
    subject: "Computer Science",
    qualification: "MCA",
    bio: "Full-stack developer turned educator. Teaches Python and Java with live coding.",
    photo: "faculty-5.jpg",
  },
];

export const GALLERY = [
  { src: "gal1.png", alt: "Student exploring a 3D model in VR" },
  { src: "gal2.png", alt: "Class using VR headsets together" },
  { src: "gal3.png", alt: "Student exploring a 3D model in VR" },
  { src: "gal4.png", alt: "Class using VR headsets together" },
  { src: "gal5.png", alt: "Student exploring a 3D model in VR" },
  { src: "gal6.png", alt: "Class using VR headsets together" },
];

export const GALLERYSECTION = [
  {
    images: [
      {
        src: "/gal1.png",
        alt: "Coastal cliffs and ocean view",
      },
    ],
  },
  {
    type: "grid",
    images: [
      {
        src: "/gal5.png",
        alt: "Silhouettes on beach",
      },
      {
        src: "/gal4.png",
        alt: "Snowy mountain peaks",
      },
      {
        src: "/gal3.png",
        alt: "Rolling green hills",
      },
      {
        src: "/gal2.png",
        alt: "Sunset landscape",
      },
    ],
  },
  {
    type: "grid",
    images: [
      {
        src: "/gal2.png",
        alt: "Silhouettes on beach",
      },
      {
        src: "/gal3.png",
        alt: "Snowy mountain peaks",
      },
      {
        src: "/gal4.png",
        alt: "Rolling green hills",
      },
      {
        src: "/gal5.png",
        alt: "Sunset landscape",
      },
    ],
  },
  {
    images: [
      {
        src: "/gal6.png",
        alt: "Coastal cliffs and ocean view",
      },
    ],
  },
];

export const BOARDS = ["CBSE", "GSEB", "ICSE"];
export const CLASSES = [
  "Class 5",
  "Class 6",
  "Class 7",
  "Class 8",
  "Class 9",
  "Class 10",
  "Class 11",
  "Class 12",
];
