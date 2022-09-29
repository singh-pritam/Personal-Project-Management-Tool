import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import ProjectItem from './Project/ProjectItem';
import CreateButtonProject from './Project/CreateButtonProject';

function Dashboard() {
  return (
    <div className="projects">
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <h1 className="display-4 text-center">Projects</h1>
                <br />
                <CreateButtonProject/>
                <br />
                <hr />
                <ProjectItem/>
            </div>
        </div>
    </div>
</div>
  )
}

export default Dashboard