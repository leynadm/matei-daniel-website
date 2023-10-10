import { useEffect, useState } from "react";

interface ProjectTileInterface {
  title: string;
  description: string;
  technologies: technologyInterface[];
  livelink:string;
  codeLink:string
  imageLink:string
}

interface technologyInterface{
    name:string;
    image:string
}

import "../styles/project-tile.css";

function ProjectTile({
  title,
  description,
  technologies,
  livelink,
  codeLink,
  imageLink
}: ProjectTileInterface) {

  const [showDescription, setShowDescription] = useState(true);
  const [showTechnologies, setShowTechnologies] = useState(false);

  const handleClick = (type: string) => {
    if (type === "description") {
      setShowDescription(true);
      setShowTechnologies(false);
    } else if (type === "technologies") {
      setShowDescription(false);
      setShowTechnologies(true);
    }
  };


  useEffect(()=>{
    console.log(imageLink)
  },[])
  return (
    <>
      <div className="feature text-center is-revealing">
        <div className="feature-inner">
          <div className="feature-icon">
            <img className="feature-image"
              src={imageLink}
              alt="Project"
            ></img>
          </div>
          
          <h4 className="feature-title mt-24">{title}</h4>
          
          {showDescription && <p className="text-sm mb-0">{description}</p> }
          
          {showTechnologies && <div className="text-sm mb-0">

          {showTechnologies && (
            <ul className="technologies-list">
              {technologies.map((technology:technologyInterface, index) => (
                <li className="project-tile-wrapper" key={index}>
                  
                  <img className="project-tile-technology-image" src={technology.image} alt={technology.image} />
                  <div>{technology.name}</div>
                </li>
              ))}
            </ul>
          )}
          </div> }

          <div>
            <button
              className={`project-tile-button ${
                showDescription ? "selected" : ""
              }`}
              onClick={() => handleClick("description")}
            >
              1
            </button>
            <button
              className={`project-tile-button ${
                showTechnologies ? "selected" : ""
              }`}
              onClick={() => handleClick("technologies")}
            >
              2
            </button>
          </div>
          <div className="hero-cta">
            <a
              className="button button-primary"
              aria-roledescription="button"
              href={livelink}
              target="_blank"
            >
              See it live
            </a>

            <a className="button" href={codeLink} target="_blank">
              See the code
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectTile;
