import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I’m dedicated to building solutions
          <br /> that drive growth and innovation.
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="Profile" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Innovative</motion.b>{" "}
            Solutions
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Modern</motion.b>{" "}
            Applications.
          </h1>
          <button>LEARN MORE</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Web Development</h2>
          <p>
            Building responsive, user-friendly websites and web applications
            using the latest technologies like React, Node.js, and modern CSS
            frameworks.
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Frontend Design</h2>
          <p>
            Crafting engaging UI/UX designs to ensure seamless user experiences,
            with skills in HTML, CSS, JavaScript, and design tools like Figma.
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Backend Solutions</h2>
          <p>
            Developing secure and scalable server-side applications and APIs
            with Node.js, Express, and database integration using SQL and
            MongoDB.
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Mobile Development</h2>
          <p>
            Creating cross-platform mobile applications with frameworks like
            React Native and Flutter, delivering smooth and responsive
            experiences on Android and iOS.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
