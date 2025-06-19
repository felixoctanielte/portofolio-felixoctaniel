import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaPhp } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
//import { SiExpress } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaRust } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaJava } from  "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const skills = [
  {
    skill: "HTML",
    icon: FaHtml5,
  },
  {
    skill: "CSS",
    icon: FaCss3Alt,
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    skill: "PHP",
    icon: FaPhp,
  },
  {
    skill: "ReactJS",
    icon: FaReact,
  },
  {
    skill: "Laravel",
    icon: FaLaravel,
  },
  {
    skill: "NodeJs",
    icon: FaNodeJs,
  },
 // {
   // skill: "Express.js",
   // icon: SiExpress,
 // },
  {
    skill: "TailwindCSS",
    icon: RiTailwindCssFill,
  },
  {
    skill: "Rust",
    icon: FaRust,
  },
  {
    skill: "MongoDB",
    icon: FaDatabase,
  },
  {
    skill: "Java",
    icon: FaJava,
  },
];


const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
      {skills.map((item, index) => {
        return (
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            key={index}
            className="flex flex-col items-center"
          >
            <item.icon className="text-7xl text-orange" />
            <p className="text-center mt-4">{item.skill}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AllSkillsSM;
