import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';

const Projects = () => (
  <Fragment>
    <h3>Projects</h3>
    <hr />
    <ol>
      <li>
        <div>Project - 1</div>
        <Link to="/bugs/projects/1">...Bugs</Link>
      </li>
      <li>
        <div>Project - 2</div>
        <Link to="/bugs/projects/2">...Bugs</Link>
      </li>
    </ol>
  </Fragment>
);

export default Projects;