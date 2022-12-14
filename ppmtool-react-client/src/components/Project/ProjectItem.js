import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useDispatch } from "react-redux";
import { deleteProject } from "../../actions/deleteProject";
import { Link } from "react-router-dom";

function ProjectItem({ project }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteProject(project.projectIdentifier));
  };
  return (
    <div className="container">
      <div className="card card-body bg-light mb-3">
        <div className="row">
          <div className="col-2">
            <span className="mx-auto">{project.projectIdentifier}</span>
          </div>
          <div className="col-lg-6 col-md-4 col-8">
            <h3>{project.projectName}</h3>
            <p>{project.description}</p>
          </div>
          <div className="col-md-4 d-none d-lg-block">
            <ul className="list-group">
              <a href="#">
                <li className="list-group-item board">
                  <i className="fa fa-flag-checkered pr-1">Project Board </i>
                </li>
              </a>
              <Link to={`/updateProject/${project.projectIdentifier}`}>
                <li className="list-group-item update">
                  <i className="fa fa-edit pr-1">Update Project Info</i>
                </li>
              </Link>
              <a href="">
                <li className="list-group-item delete">
                  <i className="fa fa-minus-circle pr-1" onClick={handleDelete}>
                    Delete Project
                  </i>
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
