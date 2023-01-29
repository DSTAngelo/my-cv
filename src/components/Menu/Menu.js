import React, { useState } from "react";
import "./Menu.css";

function Menu() {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <nav>
      <ul className={`menu ${isHidden ? "hidden" : ""}`}>
        <li>
          <a href="#sobremi">Sobre Mi</a>
        </li>
        <li>
          <a href="#skill">Skill</a>
        </li>
        <li>
          <a href="#hobbies">Hobbies</a>
        </li>
        <li>
          <a href="#formacion">Formación</a>
        </li>
        <li>
          <a href="#experiencia">Experiencia</a>
        </li>
        <li>
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
