import { Link } from 'react-router-dom';

function ProjectCard({ id, title, description }) {
  return (
    <article className="card">
      <div className="card-texture"></div>
      <h3>{title}</h3>
      <p>{description}</p>
      {/* This ID connects to the Route in App.jsx */}
      <Link to={`/project/${id}`} className="view-btn">VIEW LOG_</Link>
    </article>
  );
}

export default ProjectCard;
