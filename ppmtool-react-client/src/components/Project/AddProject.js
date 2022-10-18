import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { addProject } from "../../actions/addProject";

function AddProject() {
  const [fields, setFields] = useState({
    description: "",
    projectName: "",
    projectIdentifier: "",
    startDate: "",
    endDate: "",
  });

  const dispatch = useDispatch();
  const toNavigate = useSelector((state) => state.toNavigate);
  const errors = useSelector((state) => state.error);
  const navigate = useNavigate();
  const updateFields = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProject(fields));
  };

  useEffect(() => {
    if (toNavigate) navigate(toNavigate);
    console.log("called");
  }, [toNavigate]);

  const errorStyle = {
    color: "red",
    fontSize: "14px",
  };

  return (
    <div className="project">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h5 className="display-4 text-center">
              Create / Edit Project form
            </h5>
            <hr />
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg "
                  placeholder="Project Name"
                  name="projectName"
                  value={fields.projectName}
                  onChange={updateFields}
                />
                {errors && errors.projectName && (
                  <p style={errorStyle}>*{errors.projectName}</p>
                )}
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Unique Project ID"
                  name="projectIdentifier"
                  value={fields.projectIdentifier}
                  onChange={updateFields}
                />
                {errors && errors.projectIdentifier && (
                  <p style={errorStyle}>*{errors.projectIdentifier}</p>
                )}
              </div>

              <div className="form-group">
                <textarea
                  className="form-control form-control-lg"
                  placeholder="Project Description"
                  name="description"
                  value={fields.description}
                  onChange={updateFields}
                />
                {errors && errors.description && (
                  <p style={errorStyle}>*{errors.description}</p>
                )}
              </div>
              <h6>Start Date</h6>
              <div className="form-group">
                <input
                  type="date"
                  className="form-control form-control-lg"
                  name="startDate"
                  value={fields.startDate}
                  onChange={updateFields}
                />
              </div>
              <h6>Estimated End Date</h6>
              <div className="form-group">
                <input
                  type="date"
                  className="form-control form-control-lg"
                  name="endDate"
                  value={fields.endDate}
                  onChange={updateFields}
                />
              </div>

              <input type="submit" className="btn btn-primary btn-block mt-4" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProject;
