import React from "react";
import "./WorkExperience.css";
import encriA from "./Imagenes/A.png";
import encriB from "./Imagenes/B.png";
import encriC from "./Imagenes/C.png";
import encriD from "./Imagenes/D.png";
import encriE from "./Imagenes/E.png";
import encriF from "./Imagenes/F.png";
import encriG from "./Imagenes/G.png";



const WorkExperience = (
  title,
  descriptionOne,
  descriptionTwo
  
) => {
  title = `Proyectos `;
  descriptionOne = `Encriptador - Desencriptador de texto Desktop - Movil`;
  descriptionTwo = `Juego`;


  return (
    <div className="experience">
      <h2 className="experience-title">{title}</h2>
      <div className="experience-lista">
        <h4 className="experience-description">{descriptionOne}</h4>
        <div className="experience-caja">
          <figure className="experience-division">
            <div className="experience-contenedor experience-efect">
              <section className="experience-division-img">
                <img className="experience-imagen" src={encriA} alt="encriA"/>
                <img className="experience-imagen" src={encriB} alt="encriB" />
                <img className="experience-imagen" src={encriC} alt="encriC" />
                <img className="experience-imagen" src={encriD} alt="encriD" />
                <img className="experience-imagen" src={encriE} alt="encriE" />
                <img className="experience-imagen" src={encriF} alt="encriF" />
                <img className="experience-imagen" src={encriG} alt="encriG"/>
              </section>
              <div className="experience-division-button">
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                <button className="experience-button">Repositorio GitHub</button>
                </a>
                <a href="https://www.example.com/" target="_blank" rel="noopener noreferrer">
                <button className="experience-button">Página Web</button>
                </a>
              </div>
            </div>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
