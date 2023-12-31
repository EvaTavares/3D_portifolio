import React from "react";
import { projects } from "../constants";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
import CTA from "../components/CTA";

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Meus{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Projetos
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p style={{ textAlign: "justify" }}>
          Estes são alguns dos projetos que eu gosto de destacar e venho
          construindo ao longo da minha jornada como desenvolvedora. Muitos
          deles estão disponíveis publicamente no GitHub, onde você pode
          encontrar o código-fonte.
        </p>
        <p>
          Se encontrar algo que desperte seu interesse, sinta-se à vontade para
          explorar a base de código e contribuir com suas ideias para futuras
          melhorias. Sua colaboração é bem vinda!
        </p>
      </div>

      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme} `} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={project.iconUrl}
                  alt="Ícone do projeto"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>

            <div className="mt-5 flex flex-col">
              <h4 className="text-2x1 font-poppins font-semibold">
                {project.name}
              </h4>
              <p className="mt-2 text-slate-500">{project.description}</p>
              <div className="mt-5 flex items-center gap-2 font-poppins">
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600"
                >
                  Link de acesso
                </Link>
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-4 h-4 object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default Projects;
