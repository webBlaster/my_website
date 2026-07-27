import React, { useEffect, useRef } from "react";
import "../styles/projects.css";
import aeydar from "../assets/aeydar.png";
import vr from "../assets/vr.png";
import glomehealth from "../assets/glomehealth.jpeg";
import towncryer from "../assets/towncryer.jpg";
import healthzone from "../assets/healthzoneafrica.jpg";
import resonna from "../assets/resonna.jpeg";

const projectlist = [
  {
    name: "Towncryer",
    image: towncryer,
    description: `Data infrastructure platform that helps African SMEs track business activities, automate workflows, and make data-driven decisions without enterprise cost.`,
    technologies: [],
    url: "https://towncryer.io/",
  },
  {
    name: "HealthZone Africa",
    image: healthzone,
    description: `Platform connecting Africans to verified healthcare providers and reliable health information, with verified provider profiles and direct specialist access.`,
    technologies: [],
    url: "https://healthzoneafrica.com/",
  },
  {
    name: "Glome Health",
    image: glomehealth,
    description: `Healthcare platform that makes it easier for people to access and manage their health information.`,
    technologies: [],
    url: "https://glomehealth.com/",
  },
  {
    name: "Resonna",
    image: resonna,
    description: `Information website for investors and clients, providing company details and investment-related resources.`,
    technologies: [],
    url: "https://resonna.com/",
  },
  {
    name: "Aeydar",
    image: aeydar,
    description: `Simplifies healthcare discovery, helping users find and search hospitals, clinics, labs, and pharmacies by location.`,
    technologies: [],
    url: "https://aeydar.netlify.app",
  },
  {
    name: "WebVR Experience",
    image: vr,
    description: `Created a browser-based VR demo to showcase immersive object visualization and interaction.`,
    technologies: [],
    url: "https://webblaster.github.io/demo_vr",
  },
];

const Projects = () => {
  const projectsRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = projectsRef.current;
      const list = listRef.current;
      if (!section || !list) return;

      const sectionRect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const availableScroll = sectionHeight - window.innerHeight;
      const rawProgress =
        availableScroll > 0
          ? Math.min(Math.max(-sectionRect.top / availableScroll, 0), 1)
          : 0;
      const viewportWidth =
        list.parentElement?.clientWidth || section.clientWidth;
      const maxTranslate = Math.max(list.scrollWidth - viewportWidth + 60, 0);
      const itemCount = list.children.length;
      const stepCount = Math.max(itemCount - 1, 1);
      const snapStep = maxTranslate / stepCount;
      const snapIndex = Math.round(rawProgress * stepCount);
      const translateX = -snapStep * snapIndex;

      list.style.transform = `translateX(${translateX}px)`;

      Array.from(list.children).forEach((item, index) => {
        item.classList.toggle("active", index === snapIndex);
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div
      className="projects animate-on-scroll animate__animated"
      ref={projectsRef}
    >
      <h1>Featured Product Work</h1>
      <div className="project-scroll">
        <div className="project-list" ref={listRef}>
          {projectlist.map((project) => {
            return (
              <div className="project" key={project.name}>
                <h5>{project.name}</h5>
                <img src={project.image} alt={`${project.name}`} />
                <p>{project.description}</p>

                <div className="technologies">
                  {project.technologies.map((tech) => {
                    return <p key={tech}>{tech}</p>;
                  })}
                </div>
                <a target="_blank" rel="noreferrer" href={project.url}>
                  See Project
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
