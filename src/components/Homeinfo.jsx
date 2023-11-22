import React from "react";
import index from "../assets/images/index";
import Infobox from "./Infobox";

const renderContent = {
  1: (
    <>
      <h1
        className="sm:text-xl sm:leading-snug text-center 
        neo-brutalism-blue py-4 px-8 text-white mx-5"
      >
        Olá, Eu sou <span className="font-semibold">Eva Tavares</span> !
        <br />
        Desenvolvedora Web Full Stack
      </h1>
      <img src={index.eva} alt="Eva Tavares" />
    </>
  ),
  2: (
    <Infobox
      text={
        <p>
          Ao longo da minha tragetória desenvolvi habilidades de Soft e Hard
          Skills
        </p>
      }
      link="/about"
      btnText="Saiba mais"
    />
  ),
  3: (
    <Infobox
      text={
        <p className="font-medium sm:text-xl text-center">
          Desenvolvo projetos de Front e Back-end.
          <br />
          Ficou curioso(a) ??
        </p>
      }
      link="/projects"
      btnText="Visite meu portifólio"
    />
  ),
  4: (
    <Infobox
      text={
        <p className="font-medium sm:text-xl text-center">
          Você esta precisando de um projeto como esse ou procurando por uma
          desenvolvedora?
          <br />
          Eu posso te ajudar!
        </p>
      }
      link="/contact"
      btnText="Vamos conversar!"
    />
  ),
};

const Homeinfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default Homeinfo;
