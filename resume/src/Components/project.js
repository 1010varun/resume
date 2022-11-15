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
            heading={"Save the Earth"}
            subHeading={
              "A site Mainly focus on the Increase Pollution on Earth"
            }
            details={
              "This project aims at raising awareness among the people to realise the seriousness of the scenario. I believe that if we are able to witness something infront of our eyes then we tend to empathise with it more easily, hence I bring to you Eco Superhero a journey how things will adversely affect us in the near future! But with a twist!"
            }
            link={"https://savethe-earth.netlify.app/"}
            github={"https://github.com/1010varun/innotech-2023"}
            icon={<FiExternalLink />}
          />

          <ProjectCard
            heading={"Text to QR"}
            subHeading={"A site which can convert text to QR"}
            details={
              "This site is the responsive one. Which is mainly used to convert or generate the respective QR Code from the written Text."
            }
            link={"https://convert-to-qr.netlify.app/"}
            github={"https://github.com/1010varun/qr-convertor"}
            icon={<FiExternalLink />}
          />

          <ProjectCard
            heading={"tru Weather"}
            subHeading={"A site which tells the current climate conditions"}
            details={
              "This site is used to find the current climate conditions like temperature, Clouds, Wind speed, Rainfall prediction by user's current location or by the entered location"
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
