import React, { useState} from "react";
import "./WorkExperienceComplet.css";
import ahorcadoA from "./Imagenes/ahorcadoA.png";
import ahorcadoB from "./Imagenes/ahorcadoB.png";
import ahorcadoC from "./Imagenes/ahorcadoC.png";
import ahorcadoD from "./Imagenes/ahorcadoD.png";
import ahorcadoE from "./Imagenes/ahorcadoE.png";
import ahorcadoF from "./Imagenes/ahorcadoF.png";
import ahorcadoG from "./Imagenes/ahorcadoG.png";
import ahorcadoH from "./Imagenes/ahorcadoH.png";



const WorkExperienceComplet = (
  title,
  descriptionOne,
  descriptionTwo
  
) => {
  title = ` `;
  descriptionOne = `Mas Proyectos`;
  descriptionTwo = ``;

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="WorkExperienceComplet">
      <h2 className="WorkExperienceComplet-title">{title}</h2>
      <button
        className="toggle-button"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "▼" : "Mas Proyectos"}
      </button>
      {isExpanded && (
        <div className="WorkExperienceComplet-lista">
          <h4 className="WorkExperienceComplet-description">
            {descriptionOne}
          </h4>
          <div className="WorkExperienceComplet-caja">
            <figure className="WorkExperienceComplet-division">
              <div className="WorkExperienceComplet-contenedor experienceCWorkExperienceComplet-efect">
                <section className="WorkExperienceComplet-division-img">
                  <img
                    className="WorkExperienceComplet-imagen"
                    src={ahorcadoA}
                    alt="ahorcadoA"
                  />
                  <img
                    className="WorkExperienceComplet-imagen"
                    src={ahorcadoB}
                    alt="ahorcadoB"
                  />
                  <img
                    className="WorkExperienceComplet-imagen"
                    src={ahorcadoC}
                    alt="ahorcadoC"
                  />
                  <img
                    className="WorkExperienceComplet-imagen"
                    src={ahorcadoD}
                    alt="ahorcadoD"
                  />
                  <img
                    className="WorkExperienceComplet-imagen"
                    src={ahorcadoE}
                    alt="ahorcadoE"
                  />
                  <img
                    className="WorkExperienceComplet-imagen"
                    src={ahorcadoF}
                    alt="ahorcadoF"
                  />
                  <img
                    className="WorkExperienceComplet-imagen"
                    src={ahorcadoG}
                    alt="ahorcadoG"
                  />
                  <img
                    className="WorkExperienceComplet-imagen"
                    src={ahorcadoH}
                    alt="ahorcadoH"
                  />
                </section>
                <div className="WorkExperienceComplet-division-button">
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="WorkExperienceComplet-button">
                      Repositorio GitHub
                    </button>
                  </a>
                  <a
                    href="https://www.example.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="WorkExperienceComplet-button">
                      Página Web
                    </button>
                  </a>
                </div>
              </div>
            </figure>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkExperienceComplet;
