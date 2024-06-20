import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

import academy from "../assets/academy.jpg";
import concurso from "../assets/concurso.png";
import gourmetgo from "../assets/gourmetgol.png";
import gourmetgom from "../assets/gourmetgom.png";
import simuladorprestamos from "../assets/simuladorprestamos.png";
import registro from "../assets/registro.png";
import gad from "../assets/gad.png";
import bomberos from "../assets/bomberos.png";
import angular from "../assets/tech/angular.png";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Angular Developer",
    icon: creator,
  }
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Intern",
    company_name: "GAD Municipal de San Pedro de Pelileo",
    icon: gad,
    iconBg: "#383E56",
    date: "February - June 2024",
    points: [
      "Support the department's professionals in various tasks related to the management and maintenance of the institution's computer systems and technological infrastructure.",
      "Assist in resolving technical issues related to hardware and software for GAD staff.",
      "Assist in the configuration and installation of computer equipment, including computers, printers, and network devices.",
      "Collaborate on specific IT department projects, such as the implementation of new applications, system upgrades, and IT infrastructure improvements.",
      "Participate in system and application testing to ensure proper functioning before deployment."
    ],
  },
  {
    title: "Auditor",
    company_name: "Cuerpo Bomberos Ambato",
    icon: bomberos,
    iconBg: "#E6DEDD",
    date: "October 2023 - February 2023",
    points: [
      "Responsible for evaluating and ensuring that the institution's information and technology systems are secure, efficient and effective. Their role is crucial to maintaining the integrity, confidentiality and availability of information, as well as ensuring that technology adequately supports the organization's operations.",
      "Review information security policies to ensure they are appropriate and up-to-date.",
      "Evaluate access controls to sensitive systems and data to ensure that only authorized personnel can access the information.",
      "Ensure that IT systems and processes comply with applicable local and international regulations, such as the Data Protection Law and information security standards (ISO/IEC 27001)."
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  }
];

const projects = [
  {
    name: "Virtual Academy",
    description:
      "The English Academy project in Unreal Engine is an innovative initiative that aims to develop a highly interactive and visually attractive English learning platform, using the Unreal Engine video game engine. This virtual academy will offer an immersive environment where students can learn English effectively through realistic scenarios.",
    tags: [
      {
        name: "Unreal Engine",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "BluePrint",
        color: "pink-text-gradient",
      },
    ],
    image: academy,
    source_code_link: "https://github.com/Eduardlink/VirtualAcademy_UnrealEngine.git/",
  },
  {
    name: "Evento_Cultural",
    description:
      "The cultural event project with alternatives, true/false and clues for schools is an initiative designed to promote interactive learning and cultural knowledge among students. This event will take place in a contest format, where participants will answer multiple, true/false questions and use clues to help them find the correct answers.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "js",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: concurso,
    source_code_link: "https://github.com/Anthony6887/Evento_Cultural.git/",
  },
  {
    name: "GourmetGo Web",
    description:
      "The web restaurant management project is an initiative aimed at developing a comprehensive web platform for the administration and efficient operation of restaurants. This tool is designed for owners, managers and restaurant personnel, offering functionalities that optimize inventory management, orders, reservations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      }, {
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: gourmetgo,
    source_code_link: "https://github.com/PSW-GourtmetGO/GourtmetGo-Web-FrontEnd.git/",
  },
  {
    name: "GourmetGo Movil",
    description:
      "The mobile restaurant management project is an initiative aimed at developing a comprehensive mobile application that facilitates the daily administration and operation of restaurants. This tool is designed for owners, managers and restaurant personnel, offering functionalities that optimize inventory management, orders, reservations, personal and sales, all from a mobile device.",
    tags: [
      {
        name: "Ionic",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: gourmetgom,
    source_code_link: "https://github.com/PSW-GourtmetGO/GourmetGo-Movil-FrontEnd.git/",
  },
  {
    name: "Simulador Prestamos",
    description:
      "The loan simulation project with French and German amortization and investments is an initiative that seeks to provide an integral tool for the simulation and analysis of loans and investment strategies. This tool is designed to help students, financial professionals and any person interested in understanding and comparing different methods of loan amortization and evaluating investment opportunities.",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: simuladorprestamos,
    source_code_link: "https://github.com/Eduardlink/SistemaPrestamos.git/",
  },
  {
    name: "Registro Estudiantes 2023",
    description:
      "The 2023 Student Registry Project is an initiative aimed at improving and modernizing the student registration and administration process in educational institutions. This project aims to facilitate the management of the information of the students of their Ingrso to their entry, guarantee an efficient and safe administration of their personal data, it is an initiative aimed at improving.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "SQLite",
        color: "green-text-gradient",
      },
      {
        name: "java swing",
        color: "pink-text-gradient",
      },
    ],
    image: registro,
    source_code_link: "https://github.com/Eduardlink/RegistroEstudiantes2023.git/",
  },
];

export { services, technologies, experiences, testimonials, projects };
