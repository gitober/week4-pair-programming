import React from "react";
import { Link } from "react-router-dom";
import img from "../images/about.jpeg";
import Title from "./Title";

const About = () => {
  return (
    <div>
      <section className="section" id="about">
        <Title title="about" span="us" />
        <div className="section-center about-center">
          <div className="about-img">
            <img src={img} className="about-photo" alt="awesome beach" />
          </div>
          <article className="about-info">
            <h3>explore the difference</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Aspernatur quisquam harum nam cumque temporibus explicabo dolorum
              sapiente odio unde dolor?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Aspernatur quisquam harum nam cumque temporibus explicabo dolorum
              sapiente odio unde dolor?
            </p>
            {/* Use Link component for navigation */}
            <Link to="/about" className="btn">
              read more
            </Link>
          </article>
        </div>
      </section>
    </div>
  );
};

export default About;
