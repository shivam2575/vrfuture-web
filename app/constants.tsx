import facebookIcon from "./assets/facebook.png";
import instagramIcon from "./assets/instagram.png";
import {
  GraduationCap,
  CalendarClock,
  BookOpenCheck,
  Languages,
  Glasses,
  Users,
} from "lucide-react";

export const WHATSAPP_NUMBER = "918849620478";
export const WHATSAPP_MESSAGE =
  "Hi, I'd like to know more about VRFuture program.";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;
export const NAV_LINKS = [
  { title: "Home", ref: "" },
  { title: "Programs", ref: "programs" },
  { title: "Faculty", ref: "faculty" },
  { title: "Gallery", ref: "gallery" },
  { title: "Testimonials", ref: "testimonials" },
  { title: "Contact", ref: "contact" },
];
export const SOCIALS = [
  {
    id: "fb",
    src: facebookIcon,
    alt: "Facebook",
    url: "https://www.facebook.com/vrfuture20/",
  },
  {
    id: "ig",
    src: instagramIcon,
    alt: "Instagram",
    url: "https://www.instagram.com/vrfuture_/?hl=en",
  },
];
export const FEATURES = [
  {
    title: "Visualize Concepts",
    desc: "VR turns abstract topics into things students can see and explore.",
    img: "placeholder.webp",
  },
  {
    title: "Better Retention",
    desc: "Immersive, hands-on learning sticks far longer than reading a textbook.",
    img: "placeholder.webp",
  },
  {
    title: "Higher Engagement",
    desc: "Curiosity-driven VR lessons keep students genuinely interested.",
    img: "placeholder.webp",
  },
];

export const COURSES = [
  {
    title: "Classes 5 to 12",
    desc: "All the subjects from class 5 to 12 for CBSE, GSEB & ICSE boards all over Daman, Vapi, Silvas and valsad",
    img: "placeholder.webp",
  },
  {
    title: "JEE Preparation",
    desc: "JEE preparation for class 11th-12th science students.",
    img: "placeholder.webp",
  },
  {
    title: "NEET Preparation",
    desc: "NEET preparation for class 11th-12th science students.",
    img: "placeholder.webp",
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
    name: "Sneha Joshi",
    role: "Parent of Class 8 student",
    quote:
      "My son used to find science difficult, but the VR sessions made learning interactive and fun. His confidence and grades have improved noticeably.",
  },
  {
    name: "Arjun Mehta",
    role: "Class 11 student (NEET)",
    quote:
      "The 3D biology lessons helped me understand anatomy far better than textbooks. It's like learning inside the human body.",
  },
  {
    name: "Kavita Nair",
    role: "Parent of Class 10 student",
    quote:
      "The teachers regularly update us on our daughter's progress, and the VR-based lessons have made complex topics much easier to understand.",
  },
  {
    name: "Rohan Kulkarni",
    role: "Class 12 student (JEE)",
    quote:
      "The combination of experienced teachers and immersive VR demonstrations made difficult chemistry and physics concepts much easier to grasp.",
  },
  {
    name: "Meera Iyer",
    role: "Parent of Class 5 student",
    quote:
      "My daughter enjoys every class and comes home excited to share what she learned. The interactive teaching approach has sparked her curiosity.",
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

export const GALLERYSECTION = [
  {
    images: [
      {
        src: "/gal1.webp",
        alt: "Student exploring a 3D model in VR",
      },
    ],
  },
  {
    type: "grid",
    images: [
      {
        src: "/gal5.webp",
        alt: "Student exploring a 3D model in VR",
      },
      {
        src: "/gal4.webp",
        alt: "Class using VR headsets together",
      },
      {
        src: "/gal3.webp",
        alt: "Student exploring a 3D model in VR",
      },
      {
        src: "/gal2.webp",
        alt: "Class using VR headsets together",
      },
    ],
  },
  {
    type: "grid",
    images: [
      {
        src: "/gal2.webp",
        alt: "Student exploring a 3D model in VR",
      },
      {
        src: "/gal3.webp",
        alt: "Student exploring a 3D model in VR",
      },
      {
        src: "/gal4.webp",
        alt: "Student exploring a 3D model in VR",
      },
      {
        src: "/gal5.webp",
        alt: "Student exploring a 3D model in VR",
      },
    ],
  },
  {
    images: [
      {
        src: "/gal6.webp",
        alt: "Student exploring a 3D model in VR",
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
