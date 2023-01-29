// Header.js

import React from "react";
import "./Header.css";
import fotoperfil from "./imgperfil.jpg";


const Header = (mail, nombre) => {
  
  mail = `gabrielfuquen@icloud.com`;
  nombre = `Angel Fuquen`;

  return (
    <div className="cabecera">
      <div className="cabecera-uno">
        <h1 className="mail">{mail}</h1>
        <h1 className="nombre">{nombre}</h1>
        <img src={fotoperfil} alt="ProfilePicture" />
      </div>
    </div>
  );
};

export default Header;
