import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = (props) => {
  const { title, thumbnail, description, live_link, id } = props.project;
  return (
    <>
      <div className="card card-compact  bg-base-100 shadow-xl">
        <figure>
          <img src={thumbnail} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h3 className="card-title text-white">{title}</h3>
          <p>{description.substr(0, 50) + "..."}</p>
          <div className="card-actions justify-end">
            <a href={live_link} className="btn btn-primary">
              Live
            </a>
            <Link
              to={`/project/${id}`}
              relative="path"
              className="btn view-btn"
            >
              view details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
