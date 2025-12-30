// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";

// Experience Section Logo's
import mimansa from "./assets/company_logo/mimansa.jpg";
import WTV from "./assets/company_logo/WTV.jpg";

// Education Section Logo's
import glaLogo from "./assets/education_logo/mgr.png";
// Project Section Logo's
import ai from "./assets/work_logo/ai.jpeg";
import ems from "./assets/work_logo/ems.jpeg";
import foodorder from "./assets/work_logo/foodorder.jpeg";
import passwordgenerator from "./assets/work_logo/passwordgenerator.jpeg";
import voiceassistant from "./assets/work_logo/voiceassistant.jpeg";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },

  {
    title: "Languages",
    skills: [
      { name: "React Js", logo: reactjsLogo },
      { name: "JavaScript", logo: javascriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
    ],
  },
];

const experiences = [
  {
    id: 0,
    img: WTV,
    role: "Frontend Developer",
    company: "Wisdom Tree Ventures",
    date: "May 2024 - Sept 2025",
    desc: "EKYC Platform:- Built secure and scalable eKYC frontend applications using React.js, JavaScript, Tailwind CSS, Redux Toolkit, Axios, React Hook Form, Web Camera API, Git. implementing multi-step verification flows, OTP validation, document upload, API integration, and responsive UI with a strong focus on security and user experience.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Redux Toolkit",
      "Tailwind CSS",
    ],
  },

];

export const education = [
  {
    id: 0,
    img: glaLogo,
    school: "Dr.M.G.R Center for Online Programs",
    date: "July 2011 - Aug 2015",
    grade: "7 CGPA",
    desc: "I have successfully completed B.Tech in Electrical Engineering, gaining a strong foundation in electrical systems, power electronics, circuit analysis, control systems, and electrical machines. Developed analytical and problem-solving skills through academic projects, laboratory work, and technical coursework. Acquired hands-on exposure to industry-relevant tools, safety standards, and engineering practices, along with experience in teamwork, documentation, and technical communication.",
    degree: "Electrical and Electronics Engineering",
  },
  
  
];

export const projects = [
  {
    id: 0,
    title: "AI Image Enhancer",
    description:
      "AI Image Enhancer – Built an AI-powered tool that improves image quality by enhancing clarity, sharpness, and resolution.",
    image: ai,
    tags: ["HTML", "Tailwind CSS", "JavaScript", "React JS", "API"],
    github: "https://github.com/fdnavneet/Image-Enhencer.git",
    webapp: "https://image-enhencer-blue.vercel.app/",
  },
  {
    id: 1,
    title: "Employee Management System",
    description:
      "Employee Management System – Developed a role-based platform for managing employees, assigning tasks, and tracking task status in real time.",
    image: ems,
    tags: ["React JS", "Local Storage", "HTML", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/fdnavneet/EMS.git",
    webapp: "https://ems-psi-dun.vercel.app/",
  },
  {
    id: 2,
    title: "Food Ordering App",
    description:
      "Food Ordering Application – Built a web-based food ordering platform with menu management, cart functionality, and order processing features.",
    image: foodorder,
    tags: ["React JS", "Redux", "HTML", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/fdnavneet/Hungry--Hound.git",
    webapp: "https://hungry-hound-ten.vercel.app/",
  },
  {
    id: 3,
    title: "Password Generator",
    description:
      "Password Generator – Implemented a password generation tool supporting uppercase, lowercase, numbers, and special characters to enhance security.",
    image: passwordgenerator,
    tags: ["React JS", "Tailwnd CSS", "JavaScript"],
    github: "https://github.com/fdnavneet/Password-Generator.git",
    webapp: "https://password-generator-zeta-sage.vercel.app/",
  },
  {
    id: 4,
    title: "Voice Assistant",
    description:
      "Voice Assistant – Implemented a voice-based assistant using speech recognition and text-to-speech technologies for hands-free interaction.",
    image: voiceassistant,
    tags: ["JavaScript", "React Js", "HTML", "Tailwind CSS"],
    github: "https://github.com/fdnavneet/voice-assistant.git",
    webapp: "https://voice-assistant-ruby.vercel.app/",
  },
];

export default experiences;
