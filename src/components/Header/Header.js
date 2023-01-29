// Header.js

import React from "react";
import "./Header.css";
import fotoperfil from "./imgperfil.jpg";


const Header = (mail, nombre, description) => {
  
  nombre = `ANGEL FUQUEN`;
  mail = `gabrielfuquen@icloud.com`;
  description = `Técnico en Análisis y Programación de Sistemas actualmente participando del proyecto Oracle ONE en Alura Latam`;
  return (
    <div className="cabecera">
      <div className="cabecera-uno">
        <h1 className="nombre">{nombre}</h1>
        <h1 className="mail">{mail}</h1>
        <h3 className="description">{description}</h3>
      </div>
      <img src={fotoperfil} alt="ProfilePicture" />
    </div>
  );
};

export default Header;
