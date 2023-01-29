import React from "react";
import "./Profile.css";
import sign from "./sign.png";

const Profile = (perfil, description, parrafo) => {
  perfil = `Sobre mi`;
  description = `Técnico en Análisis de Sistemas, formación complementaria en Aprentice of Apple, 
                Ofimática y Servicio Técnico (Windows, Mac), con la experiencia y características personales necesarias para
                un desempeño eficiente en labores que demanden responsabilidad y manejo técnico, experiencia como freelancer,
                brindando servicios de soporte y reparación a empresas y particulares.`;
  parrafo = `Persona participativa, con buena capacidad analítica, deductiva y de observación para generar soluciones,
          excelentes relaciones interpersonales enfocadas al trabajo en equipo, de fácil adaptación a trabajar bajo
          presión, orientado a generar resultados , dispuesto a aprender y desarrollar habilidades para ofrecer un
          servicio excepcional.`;
  return (
    <div className="profile">
      <h2 className="profile-title">{perfil}</h2>
      <p className="profile-description">{description}</p>
      <p className="profile-parrafo">{parrafo}</p>
        <div className="sign">
          <img src={sign} alt="SignPicture" />
        </div>
    </div>
  );
};

export default Profile;
