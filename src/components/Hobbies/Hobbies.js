import React from "react";
import "./Hobbies.css";
import games from "./Imagenes/games_icon.png";
import read from "./Imagenes/read_icon.png";
import music from "./Imagenes/music_icon.png";
import tv from "./Imagenes/tv_icon.png";
import cook from "./Imagenes/cook_icon.png";
import gym from "./Imagenes/Gym.png";

const Hobbies = (
  title,
  descriptionOne,
  descriptionTwo,
  descriptionThree,
  descriptionFour,
  descriptionFive,
  descriptionSix
) => {
  title = `Hobbies`;
  descriptionOne = `Juegos`;
  descriptionTwo = `Lectura`;
  descriptionThree = `Musica`;
  descriptionFour = `Series`;
  descriptionFive = `Cocinar`;
  descriptionSix = `WorkOut`;

  return (
    <div className="hobbies">
      <h2 className="hobbies-title">{title}</h2>
      <div className="hobbies-lista">
        <div className="hobbies-imagen">
          <div className="hobbies-division hobbies-efect">
            <img src={games} alt="Html" />
            <h4 className="hobbies-description">{descriptionOne}</h4>
          </div>
          <div className="hobbies-division hobbies-efect">
            <img src={read} alt="read" />
            <h4 className="hobbies-description">{descriptionTwo}</h4>
          </div>
          <div className="hobbies-division hobbies-efect">
            <img src={music} alt="music" />
            <h4 className="hobbies-description">{descriptionThree}</h4>
          </div>
          <div className="hobbies-division hobbies-efect">
            <img src={tv} alt="tv" />
            <h4 className="hobbies-description">{descriptionFour}</h4>
          </div>
          <div className="hobbies-division hobbies-efect">
            <img src={cook} alt="cook" />
            <h4 className="hobbies-description">{descriptionFive}</h4>
          </div>
          <div className="hobbies-division hobbies-efect">
            <img src={gym} alt="gym" />
            <h4 className="hobbies-description">{descriptionSix}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
