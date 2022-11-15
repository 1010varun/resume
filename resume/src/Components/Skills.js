import React from "react"
import {
  FaHtml5,
  FaNode,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaPython,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiMongodb,
  SiExpress,
} from "react-icons/si";

const Skills = () => {
    return (
      <div>
        <section class="resume-section" id="skills">
          <div class="resume-section-content">
            <h2 class="mb-5">Skills</h2>
            <div class="subheading mb-3">Programming Languages & Tools</div>
            <ul class="list-inline dev-icons">
              <li class="list-inline-item">
                <i>
                  <FaHtml5 />
                </i>
              </li>
              <li class="list-inline-item">
                <i>
                  <FaCss3Alt />
                </i>
              </li>
              <li class="list-inline-item">
                <i>
                  <FaBootstrap />
                </i>
              </li>
              <li class="list-inline-item">
                <i>
                  <SiTailwindcss />
                </i>
              </li>
              <li class="list-inline-item">
                <i>
                  <SiJavascript />
                </i>
              </li>
              <li class="list-inline-item">
                <i>
                  <FaReact />
                </i>
              </li>
              <li class="list-inline-item">
                <i>
                  <FaNode />
                </i>
              </li>
              <li class="list-inline-item">
                <i>
                  <SiExpress />
                </i>
              </li>
              <li class="list-inline-item">
                <i>
                  <SiMongodb />
                </i>
              </li>
              <li class="list-inline-item">
                <i>
                  <FaPython />
                </i>
              </li>
            </ul>
          </div>
        </section>
        <hr class="m-0" />
      </div>
    );
} 

export default Skills;