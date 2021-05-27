import React from "react";
import data from "../data";
import "./Projects.css";

export default function Projects() {
  return (
    <>
      {data.map((item) => (
        <>
          <div className="project">
            <h3>{item.title}</h3>
            <p>{item.tech}</p>
            <img src={item.img} alt="vista previa del proyecto" />
            <div className="links">
              <a href={item.demo}>DEMO</a>
              <a href={item.repo}>REPO</a>
            </div>
            <div className="description">
              <p>{item.description}</p>
              <p>{item.description1}</p>
              <p>{item.description2}</p>
            </div>
          </div>
          <div className="project-container">
            <div className="card">
              <div className="slide slide1">
                <div className="card-content">
                  <div className="project-img">
                    <img src={item.img} alt="vista previa del proyecto" />
                  </div>
                </div>
              </div>
              <div className="slide slide2">
                <div className="card-content">
                  <h3>{item.title}</h3>
                  <p>{item.tech}</p>
                  <div className="links">
                    <a href={item.demo}>DEMO</a>
                    <a href={item.repo}>REPO</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
}
