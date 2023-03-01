import React from "react"
import { SiCodechef, SiLeetcode } from "react-icons/si"

const About = () => {
    return (
      <div>
        <section class="resume-section" id="about">
          <div class="resume-section-content">
            <h1 class="mb-0">
              Varun
              <span class="text-primary">Agarwal</span>
            </h1>
            <div class="subheading mb-5">
              KIET Group of Institutions · (+91)6396143434 ·
              <a href="mailto:varunagarwal10.2@gmail.com">
                varunagarwal10.2@gmail.com
              </a>
            </div>
            <p class="lead mb-5">
            As an undergraduate student majoring in Computer Science and Engineering, I have been exploring various projects using React, Node, Express, and MongoDB. I am currently focused on developing my skills in these technologies while also demonstrating my proficiency in Python's Django web framework. Additionally, I am enthusiastic about contributing to open source projects and eager to engage with the community to develop innovative solutions.
            </p>
            <div class="social-icons">
              <a
                class="social-icon"
                href="https://www.linkedin.com/in/varun-agarwal-b91518226/"
              >
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a class="social-icon" href="https://github.com/1010varun">
                <i class="fab fa-github"></i>
              </a>
              <a class="social-icon" href="https://twitter.com/varunag979311">
                <i class="fab fa-twitter"></i>
              </a>
              <a class="social-icon" href="https://www.codechef.com/users/varun_aga1010">
                <SiCodechef/>
              </a>
              <a class="social-icon" href="https://leetcode.com/varun_aga1010/">
                <SiLeetcode/>
              </a>
            </div>
          </div>
        </section>
      </div>
    );
}

export default About;