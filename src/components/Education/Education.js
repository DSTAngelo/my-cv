import React from "react";
import "./Education.css";
import alura from "./Imagenes/alura_logo.png";
import adexpert from "./Imagenes/AdExpert.png";
import mintic from "./Imagenes/MinTic.png";
import network from "./Imagenes/neetwork.png";

const Education = (
  title,
  descriptionOne,
  descriptionTwo,
  descriptionThree,
  descriptionFour

) => {
    title = `Formación Academica`;
    descriptionOne = `Alura`;
    descriptionTwo = `AdExpert`;
    descriptionThree = `MinTic`;
    descriptionFour = `Neetwork Business School`;

    const descriptionA1 = `Programación Web Formación UX Design`;
    const descriptionB1 = "Oracle Next Education";
    const descriptionC1 = "Online - Brasil";
    const descriptionD1 = "2022";

    const descriptionA2 = "Marketing Digital";
    const descriptionB2 = "Digital ad Expert";
    const descriptionC2 = "Online - Argentina";
    const descriptionD2 = "2022";

    const descriptionA3 = "Programación Java - Python - Android Studio";
    const descriptionB3 = "MinTic - Universidad Sergio Arboleda";
    const descriptionC3 = "Bogotá D.C.";
    const descriptionD3 = "2021";

    const descriptionA4 = "Máster en Marketing Digital y Analítica Web";
    const descriptionB4 = "Neetwork Business School";
    const descriptionC4 = "Online - Bogotá D.C.";
    const descriptionD4 = "2020";


  return (
    <div className="education">
      <h2 className="education-title">{title}</h2>
      <div className="education-lista">
        <div className="education-caja">
          <figure className="education-division">
            <div className="education-contenedor education-efect">
              <img className="education-imagen" src={alura} alt="alura" />
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
              <img className="education-imagen" src={adexpert} alt="adExpert" />
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
              <img className="education-imagen" src={mintic} alt="adExpert" />
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
              <img className="education-imagen" src={network} alt="adExpert" />
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
