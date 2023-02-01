import React from "react";
import "./Education.css";
import alura from "./Imagenes/SenaOnline.png";
import adexpert from "./Imagenes/Apple.png";
import mintic from "./Imagenes/Sena.png";
import network from "./Imagenes/Intesco.png";

const Education = (
  title,
  descriptionOne,
  descriptionTwo,
  descriptionThree,
  descriptionFour

) => {
    title = ``;
    descriptionOne = `Sena Online`;
    descriptionTwo = `Apple`;
    descriptionThree = `Sena`;
    descriptionFour = `Intesco Center`;

    const descriptionA1 = `3D Sketchup - Excel - Project`;
    const descriptionB1 = "Sena Virtual";
    const descriptionC1 = "Online - Bogotá D.C.";
    const descriptionD1 = "2022";

    const descriptionA2 = "Aprentice of Apple";
    const descriptionB2 = "Star Solutions S.A.";
    const descriptionC2 = "Bogotá D.C.";
    const descriptionD2 = "2008";

    const descriptionA3 = "Técnico en Nomina";
    const descriptionB3 = "Sena";
    const descriptionC3 = "Bogotá D.C.";
    const descriptionD3 = "2008";

    const descriptionA4 = "Técnico Analista y Programador de Sistemas";
    const descriptionB4 = "Fundación Intesco Center";
    const descriptionC4 = "Bogotá D.C.";
    const descriptionD4 = "2004";


  return (
    <div className="education">
      <h2 className="education-title">{title}</h2>
      <div className="education-lista">
        <div className="education-caja">
          <figure className="education-division">
            <div className="education-contenedor education-efect">
              <img className="education-imagen education-dos" src={alura} alt="alura" />
              <h4 className="education-description">{descriptionOne}</h4>
              <figcaption className="figcaption">
                <p className="education-descripciones education-style-1">
                  {descriptionA1}
                </p>
                <p className="education-descripciones education-style-2">
                  {descriptionB1}
                </p>
                <p className="education-descripciones education-style-3">
                  {descriptionC1}
                </p>
                <p className="education-descripciones education-style-4">
                  {descriptionD1}
                </p>
              </figcaption>
            </div>
          </figure>
        </div>
        <div className="education-caja">
          <figure className="education-division">
            <div className="education-contenedor education-efect">
              <img className="education-imagen education-dos" src={adexpert} alt="adExpert" />
              <h4 className="education-description">{descriptionTwo}</h4>
              <figcaption className="figcaption">
                <p className="education-descripciones education-style-1">
                  {descriptionA2}
                </p>
                <p className="education-descripciones education-style-2">
                  {descriptionB2}
                </p>
                <p className="education-descripciones education-style-3">
                  {descriptionC2}
                </p>
                <p className="education-descripciones education-style-4">
                  {descriptionD2}
                </p>
              </figcaption>
            </div>
          </figure>
        </div>
        <div className="education-caja">
          <figure className="education-division">
            <div className="education-contenedor education-efect">
              <img className="education-imagen education-dos" src={mintic} alt="adExpert" />
              <h4 className="education-description">{descriptionThree}</h4>
              <figcaption className="figcaption">
                <p className="education-descripciones education-style-1">
                  {descriptionA3}
                </p>
                <p className="education-descripciones education-style-2">
                  {descriptionB3}
                </p>
                <p className="education-descripciones education-style-3">
                  {descriptionC3}
                </p>
                <p className="education-descripciones education-style-4">
                  {descriptionD3}
                </p>
              </figcaption>
            </div>
          </figure>
        </div>
        <div className="education-caja">
          <figure className="education-division">
            <div className="education-contenedor education-efect">
              <img className="education-imagen education-dos" src={network} alt="adExpert" />
              <h4 className="education-description">{descriptionFour}</h4>
              <figcaption className="figcaption">
                <p className="education-descripciones education-style-1">
                  {descriptionA4}
                </p>
                <p className="education-descripciones education-style-2">
                  {descriptionB4}
                </p>
                <p className="education-descripciones education-style-3">
                  {descriptionC4}
                </p>
                <p className="education-descripciones education-style-4">
                  {descriptionD4}
                </p>
              </figcaption>
            </div>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Education;
