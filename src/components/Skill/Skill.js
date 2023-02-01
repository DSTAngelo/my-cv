import React from "react";
import "./Skill.css";
import html from "./Imagenes/html_ico.png";
import javascript from "./Imagenes/javascript.png";
import css from "./Imagenes/CSS.png";
import java from "./Imagenes/Java.png";
import python from "./Imagenes/python.png";
import android from "./Imagenes/Android.png";

const Skill = (
  title,
  descriptionOne,
  descriptionTwo,
  descriptionThree,
  descriptionFour,
  descriptionFive,
  descriptionSix
) => {
    title = `Skill`;
    descriptionOne = `HTML 5`;
    descriptionTwo = `JavaScript`;
    descriptionThree = `CSS`;
    descriptionFour = `Java`;
    descriptionFive = `Python`;
    descriptionSix = `Android`;
    

  return (
    <div className="skill">
      <h2 className="skill-title">{title}</h2>
      <div className="skill-lista">
        <div className="skill-imagen">
          <div className="skill-division skill-efect">
            <img src={html} alt="Html" />
            <h4 className="skill-description">{descriptionOne}</h4>
          </div>
          <div className="skill-division skill-efect">
            <img src={javascript} alt="Javascript" />
            <h4 className="skill-description">{descriptionTwo}</h4>
          </div>
          <div className="skill-division skill-efect">
            <img src={css} alt="Css" />
            <h4 className="skill-description">{descriptionThree}</h4>
          </div>
          <div className="skill-division skill-efect">
            <img src={java} alt="Java" />
            <h4 className="skill-description">{descriptionFour}</h4>
          </div>
          <div className="skill-division skill-efect">
            <img src={python} alt="Python" />
            <h4 className="skill-description">{descriptionFive}</h4>
          </div>
          <div className="skill-division skill-efect">
            <img src={android} alt="Android" />
            <h4 className="skill-description">{descriptionSix}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
