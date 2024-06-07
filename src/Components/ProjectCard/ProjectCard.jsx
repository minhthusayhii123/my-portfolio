import "./ProjectCard.css";
function ProjectCard({ title, description, image, view }) {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <div className="project-content">
        <h2>{title}</h2>
        <div className="project-description">{description}</div>
        <a href={view}>View project</a>
      </div>
    </div>
  );
}

export default ProjectCard;
