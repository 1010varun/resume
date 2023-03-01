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
              "Using the MERN stack in combination with Tailwind CSS, I created a dynamic application that facilitates daily task management. This app is designed to enable the user to perform CRUD operations, allowing them to efficiently create, update and delete data related to their tasks. Whether for personal or professional use, this app is a powerful tool for streamlining daily productivity."
            }
            link={"https://task-mnge.netlify.app/"}
            github={"https://github.com/1010varun/task-manager-frontend"}
            icon={<FiExternalLink />}
          />

          <ProjectCard
            heading={"Text to QR"}
            subHeading={"A site which can convert text to QR"}
            details={
              "In this project, I leveraged React JS and Bootstrap to develop an application that enables users to generate and convert text into corresponding QR codes. The app is designed with a user-friendly interface that makes it easy for anyone to generate QR codes from written text quickly and effortlessly."
            }
            link={"https://convert-to-qr.netlify.app/"}
            github={"https://github.com/1010varun/qr-convertor"}
            icon={<FiExternalLink />}
          />

          <ProjectCard
            heading={"tru Weather"}
            subHeading={"A site which tells the current climate conditions"}
            details={
              "This app allows users to access real-time climate information, including temperature, cloud cover, wind speed, and rainfall prediction. Users can retrieve this information by entering their current location or a specific location of interest."
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
