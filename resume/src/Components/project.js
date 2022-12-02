import React from "react";
import ProjectCard from "./projectCard";

import { FiExternalLink } from "react-icons/fi";


const Project = () => {
  return (
    <div>
      <section class="resume-section" id="project">
        <div class="resume-section-content">
          <h2 class="mb-5">Projects</h2>
          <ProjectCard
            heading={"Task Manager"}
            subHeading={"An app used to Manage your task"}
            details={
              "This app is made using MERN stack along with tailwind css. This is an app which is used to manage your daily tasks. This app performs CRUD operation to create, update and delete the data. "
            }
            link={"https://task-mnge.netlify.app/"}
            github={"https://github.com/1010varun/task-manager-frontend"}
            icon={<FiExternalLink />}
          />

          <ProjectCard
            heading={"Text to QR"}
            subHeading={"A site which can convert text to QR"}
            details={
              "This app is made using React js and bootstrap. This app is mainly used to convert or generate the respective QR Code from the written Text. "
            }
            link={"https://convert-to-qr.netlify.app/"}
            github={"https://github.com/1010varun/qr-convertor"}
            icon={<FiExternalLink />}
          />

          <ProjectCard
            heading={"tru Weather"}
            subHeading={"A site which tells the current climate conditions"}
            details={
              "This app is made using React js and tailwind css. This site is used to find the current climate conditions like temperature, Clouds, Wind speed, Rainfall prediction by user's current location or by the entered location. "
            }
            link={"https://tru-weather.netlify.app/"}
            github={"https://github.com/1010varun/weather-app"}
            icon={<FiExternalLink />}
          />
        </div>
      </section>
      <hr class="m-0" />
    </div>
  );
};

export default Project;
