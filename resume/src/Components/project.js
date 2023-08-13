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
            heading={"Graphical Password"}
            subHeading={
              "Tool which can be used to make passwords more personalize"
            }
            details={
              "By utilizing images instead of conventional PINs or passwords, this tool enhances password personalization. It offers a secure approach to safeguarding data and information, as images are harder to crack or breach. With this tool, your passwords become more unique, providing an added layer of safety and security."
            }
            link={
              "https://visualcipher.netlify.app/login"
            }
            github={"https://github.com/1010varun/GraphicalPasswordBackEnd"}
            icon={<FiExternalLink />}
          />

          <ProjectCard
            heading={"URL Shortner"}
            subHeading={"Tool which can be used to shorten URLs"}
            details={
              "This tool combines Django as the backend and React with Redux as the frontend to create a URL shortener. It simplifies long and unattractive URLs into shorter and more concise ones, offering a convenient solution for managing and sharing links."
            }
            link={
              "https://url-small.netlify.app/"
            }
            github={"https://github.com/1010varun/urlShortner"}
            icon={<FiExternalLink />}
          />

          <ProjectCard
            heading={"Task Manager"}
            subHeading={"Tool which can be used to Manage task"}
            details={
              "Effortlessly manage your daily tasks with this tool. Its user-friendly interface allows for easy recording and organization of your daily tasks or jobs. Stay organized and keep track of your tasks efficiently with this convenient and user-friendly tool."
            }
            link={"https://task-mnge.netlify.app/"}
            github={"https://github.com/1010varun/task-manager-frontend"}
            icon={<FiExternalLink />}
          />

          <ProjectCard
            heading={"Text to QR"}
            subHeading={"A tool which can convert text and links in QR"}
            details={
              "With its user-friendly interface, this tool efficiently transforms your text and links into QR codes. It simplifies the process of generating QR codes, making them easily shareable and accessible. Conveniently convert your texts and links into QR codes for seamless sharing and quick access."
            }
            link={"https://convert-to-qr.netlify.app/"}
            github={"https://github.com/1010varun/qr-convertor"}
            icon={<FiExternalLink />}
          />

          <ProjectCard
            heading={"tru Weather"}
            subHeading={"Tool which can be used to access weather information"}
            details={
              "Easily retrieve weather information using this tool. It offers the capability to obtain weather data for any location, including the user's current location. With its user-friendly interface, accessing weather information becomes effortless. Get accurate and up-to-date weather data with this convenient and user-friendly tool."
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
