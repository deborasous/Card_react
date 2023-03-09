import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import "./Card.css";


const Card = ({ name, age, profile, github, linkedin }) => {
  const user = {
    name: "",
    age: "",
    profile: "",
    github: "",
    linkedin: "",
  };

  return (
    <div className="card_body">
      <img
        src={profile}
        className="imageProfil"
        alt="Foto de perfil de Debora Sousa"
      />
      <div className="content">
        <h2>{name}</h2>
        <h4> Idade: {age}</h4>
        <div className="media">
          <a href={github} target="_blank">
            <AiFillGithub />
          </a>
          <a href={linkedin} target="_blank">
            <AiFillLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
