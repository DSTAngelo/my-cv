import React, { useState} from "react";
import "./WorkExperienceTwo.css";
import ahorcadoA from "./Imagenes/ahorcadoA.png";
import ahorcadoB from "./Imagenes/ahorcadoB.png";
import ahorcadoC from "./Imagenes/ahorcadoC.png";
import ahorcadoD from "./Imagenes/ahorcadoD.png";
import ahorcadoE from "./Imagenes/ahorcadoE.png";
import ahorcadoF from "./Imagenes/ahorcadoF.png";
import ahorcadoG from "./Imagenes/ahorcadoG.png";
import ahorcadoH from "./Imagenes/ahorcadoH.png";



const WorkExperienceTwo = (
  title,
  descriptionOne,
  descriptionTwo
  
) => {
  title = ` `;
  descriptionOne = `Juego Ahorcado Oscuro Desktop - Movil`;
  descriptionTwo = `Juego`;

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="experiencetwo">
      <h2 className="experiencetwo-title">{title}</h2>
      <button
        className="toggle-button"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded
          ? "▼"
          : "Juego Ahorcado Oscuro Desktop - Movil"}
      </button>
      {isExpanded && (
      <div className="experiencetwo-lista">
        <h4 className="experiencetwo-description">{descriptionOne}</h4>
        <div className="experiencetwo-caja">
          <figure className="experiencetwo-division">
            <div className="experiencetwo-contenedor experiencetwo-efect">
              <section className="experiencetwo-division-img">
                <img className="experiencetwo-imagen" src={ahorcadoA} alt="ahorcadoA"/>
                <img className="experiencetwo-imagen" src={ahorcadoB} alt="ahorcadoB" />
                <img className="experiencetwo-imagen" src={ahorcadoC} alt="ahorcadoC" />
                <img className="experiencetwo-imagen" src={ahorcadoD} alt="ahorcadoD" />
                <img className="experiencetwo-imagen" src={ahorcadoE} alt="ahorcadoE" />
                <img className="experiencetwo-imagen" src={ahorcadoF} alt="ahorcadoF" />
                <img className="experiencetwo-imagen" src={ahorcadoG} alt="ahorcadoG" />
                <img className="experiencetwo-imagen" src={ahorcadoH} alt="ahorcadoH"/>
              </section>
              <div className="experiencetwo-division-button">
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                <button className="experiencetwo-button">Repositorio GitHub</button>
                </a>
                <a href="https://www.example.com/" target="_blank" rel="noopener noreferrer">
                <button className="experiencetwo-button">Página Web</button>
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

export default WorkExperienceTwo;
