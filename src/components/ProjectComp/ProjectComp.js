import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loading from "../Loading/Loading";
import "./ProjectComp.css";
const ProjectComp = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState([]);
  const id = useParams();

  useEffect(() => {
    setLoading(true);
    fetch("../projects.json")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setProjects(data);
      });
  }, []);

  const singleProject = projects?.find(
    (project) => project.id === parseInt(id.id)
  );
  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="section__padding single__project">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-5 items-center">
          <div className="thumbnail-img">
            <img src={singleProject?.thumbnail} alt="" />
          </div>
          <div>
            <h1 className="text-5xl capitalize font-bold py-3">
              {singleProject?.title}
            </h1>
            <hr className="px-2" />
            <p className="text-sm py-3">{singleProject?.description}</p>
            <p className="capitalize  py-3">
              <b>author:</b> {singleProject?.author}
            </p>
            <p className="capitalize  py-3">
              <b>technology:</b>{" "}
              {singleProject?.technology.map((tech) => (
                <span>{tech}, </span>
              ))}
            </p>
            <h6 className="text-sm font-bold">Overview:</h6>
            <ol class="list-disc px-3">
              {singleProject?.overview.map((e) => (
                <li>{e}</li>
              ))}
            </ol>
            <div className="py-3 sm:flex gap-3">
              <a href={singleProject?.live_link} className="btn btn-primary">
                Live Link
              </a>
              <a
                href={singleProject?.client_side}
                className="btn btn-secondary"
              >
                client-side
              </a>
              <a href={singleProject?.server_side} className="btn btn-pink">
                server-side
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectComp;
