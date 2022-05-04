import React, { useState, useEffect } from "react";
import "./About.scss";
import { motion } from "framer-motion";
import images from "../../constants/images";
import { urlFor, client } from "../../client";
import AppWrapp from "../../wrapper/AppWrapp";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query).then((data) => setAbouts(data));
  }, []);

  // const abouts = [
  //   {
  //     title: "Web Development",
  //     description: "I am a good frontend developer",
  //     imfUrl: images.about01,
  //   },
  //   {
  //     title: "API integration",
  //     description: "i am a good dev",
  //     imfUrl: images.about02,
  //   },
  //   {
  //     title: "Good Team worker",
  //     description: "i am a good dev",
  //     imfUrl: images.about03,
  //   },
  //   {
  //     title: "Good Team worker",
  //     description: "i am a good dev",
  //     imfUrl: images.about04,
  //   },
  // ];
  return (
    <>
      <h2 className="head-text">
        I Know That <span> Good Development</span>
        <br></br>
        means<span> Good Business</span>
      </h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt="about_title"></img>
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>

            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrapp(About, "About");
// export default About;
