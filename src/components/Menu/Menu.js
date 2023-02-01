import React, { useState } from "react";
import "./Menu.css";

function Menu() {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <nav>
      <ul className={`menu ${isHidden ? "hidden" : ""}`}>
        <li className="menu-efect">
          <a href="#sobremi">Sobre Mi</a>
        </li>
        <li className="menu-efect">
          <a href="#skill">Skill</a>
        </li>
        <li className="menu-efect">
          <a href="#hobbies">Hobbies</a>
        </li>
        <li className="menu-efect">
          <a href="#formacion">Formación</a>
        </li>
        <li className="menu-efect">
          <a href="#experiencia">Experiencia</a>
        </li>
        <li className="menu-efect">
          <a href="#contacto">Contacto</a>
        </li>
      </ul>
      <button onClick={() => setIsHidden(!isHidden)} className="toggle-button">
        {isHidden ? "▼" : "▲"}
      </button>
    </nav>
  );
}

export default Menu;
