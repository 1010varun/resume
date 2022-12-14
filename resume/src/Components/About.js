import React from "react"

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
              I am a ungrad B.Tech. Student from CSE Major. Currently learning and developing various projects made with the help of React, Node, Express, Mongodb. Also I have a keen intrest in Django the web framework of python.
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
            </div>
          </div>
        </section>
      </div>
    );
}

export default About;