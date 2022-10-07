import React, { useEffect, useState } from "react";
import { addProject } from "../../actions/addProject";
import store from "../../store";

function AddProject() {
  const [fields, setFields] = useState({
    description: "",
    projectName: "",
    projectIdentifier: "",
    startDate: "",
    endDate: "",
  });

  const updateFields = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    store.dispatch(addProject(fields));
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
                {/* {emptyProjectName && <span>required</span>} */}
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
              </div>

              <div className="form-group">
                <textarea
                  className="form-control form-control-lg"
                  placeholder="Project Description"
                  name="description"
                  value={fields.description}
                  onChange={updateFields}
                />
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
