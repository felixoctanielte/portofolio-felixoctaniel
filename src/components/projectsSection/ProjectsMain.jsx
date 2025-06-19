import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Travel Website",
    year: "May 2024",
    align: "right",
    image: "images/pariwisata.png",
    link: "https://web-pariwisata-umber.vercel.app",
  },
  {
    name: "Event Halloween",
    year: "October 2024",
    align: "left",
    image: "images/web-hallowen.png",
    link: "#",
  },
  {
    name: "TRY ON",
    year: "May 2025",
    align: "right",
    image: "images/tryon.png",
    link: "https://tryon-nine.vercel.app/",
  },
  {
    name: "Website Starlight",
    year: "2025 - present",
    align: "left",
    image: "images/starlight.png",
    link: "#",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
