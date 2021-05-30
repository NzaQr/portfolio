import React from "react";
import "./Card.css";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

export default function Card() {
  return (
    <div className="card-container">
      <div className="inner">
        <h1>Nazareno Quiroga</h1>
        <p>Frontend Developer</p>
        <div>
          <a
            href="https://github.com/NzaQr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub className="icon" />
          </a>

          <a
            href="https://www.linkedin.com/in/nazarenoquiroga/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin className="icon" />
          </a>

          <a
            href="mailto:naz.quiroga@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineMail className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
}
