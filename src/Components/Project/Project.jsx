import ProjectCard from "../ProjectCard/ProjectCard";
import Beauty from "./../../assets/projects/beauty-ui.png";
import Shopee from "./../../assets/projects/shopee.png";
import Landing from "./../../assets/projects/landingpage.png";

import "./Project.css";
function Project() {
  const projects = [
    {
      title: "Beauty-ui",
      description: "A website for selling cosmetics for women.",
      image: Beauty,
      view: "https://cosmetic-minhthu.vercel.app/",
    },
    {
      title: "Shopee",
      description: "An e-commerce website that helps users shop online.",
      image: Shopee,
      view: "https://github.com/Dyong46/Shopee",
    },
    {
      title: "Landing Page",
      description: "Lorem Ipsum is simply a blog post about a product. ",
      image: Landing,
      view: "https://landing-page-mthu.vercel.app/",
    },
  ];
  return (
    <div className="project" id="projects">
      <h1>My Projects</h1>
      <div className="my-projects">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            view={project.view}
          />
        ))}
      </div>
    </div>
  );
}

export default Project;
