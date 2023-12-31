// import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    // icon: starbucks,
    iconBg: "#accbe1",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    // icon: tesla,
    iconBg: "#fbc3bc",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    // icon: shopify,
    iconBg: "#b7e4c7",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    // icon: meta,
    iconBg: "#a2d2ff",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/YourGitHubUsername",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/YourLinkedInUsername",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-green",
    name: "Lista de Recados",
    description:
      "Lista de Recados é um projeto Front End com CRUD completo e armazenamento no localStorage. A lista de recados dispõe a realização de cadastro e login do usuário, assim como a criação, listagem, edição e exclusão de recados dos usuários.",
    link: "https://github.com/EvaTavares/ListaDeRecados",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Api-listaDeRecados",
    description:
      "Projeto de Api-listaDeRecados - É uma API REST que integra uma aplicação NodeJS através do paradigma de Programação Orientada a Objetos com um banco de dados relacional(PostgreSQL) utilizando TypeORM.",
    link: "https://github.com/EvaTavares/api-listaDeRecados",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Soft Skills Application ",
    description:
      "Esse trabalho é o resultado da Atividade de Feedback do módulo de Orientação Profissional da Growdev. O objetivo dessa atividade era listar softskills como feedback entre os membros da equipe e utilizar os conhecimentos técnicos aprendidos no curso Start Full Stack Web Developer para ilustrar tudo isso. A aplicação foi desenvolvida com ReactJS, possui uma uma página principal que contém um carrosel de cards dinâmico.",
    link: "https://portfolio-colegas-growdev.vercel.app/",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Website Iphone em 3D",
    description:
      "Website para venda de iPhones feita com animação e renderização 3D no navegador. A imagem do iphone em 3D se descola pela página quando o usuário desce o scroll ou quando aperta os botões que vão para as próximas seções. Na seção TRY ME o usuário pode interagir com a imagem e explorá-la de diferentes ângulos, além de poder aumentar e diminuir a imagem através do zoom.",
    link: "https://iphone-3d-website-starter-main-five.vercel.app/",
  },
];
