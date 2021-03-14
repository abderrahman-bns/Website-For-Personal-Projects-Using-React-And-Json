import { Link } from 'react-router-dom';

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list">
      {projects.map(project => (
        <div className="project-preview" key={project.id} >
          <Link to={`/projects/${project.id}`}>
            <h2>{ project.title }</h2>
            <p>Link to : { project.link }</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
 
export default ProjectList;