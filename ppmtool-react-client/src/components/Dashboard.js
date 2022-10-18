import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import ProjectItem from "./Project/ProjectItem";
import CreateButtonProject from "./Project/CreateButtonProject";
import { useDispatch, useSelector } from "react-redux";
import { getProjects } from "../actions/getProjects";
import store from "../store";

function Dashboard() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProjects());
  }, []);

  const projects = useSelector((state) => state.projects);
  console.log(projects);
  return (
    <div className="projects">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="display-4 text-center">Projects</h1>
            <br />
            <CreateButtonProject />
            <br />
            <hr />
            {projects.map((project) => (
              <ProjectItem key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
