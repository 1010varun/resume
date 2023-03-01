import React from "react";
import EducationCard from "./EducationCard";

const Education = () => {
    return (
      <div>
        <section class="resume-section" id="education">
          <div class="resume-section-content">
            <h2 class="mb-5">Education</h2>
            <EducationCard
              heading={"KIET Group of Institution"}
              subHeading={"Bachelor of Technology"}
              details={"Computer Science and Engineering"}
              percentage={"CGPA : 8.9"}
              timePeriod={"August 2021 - May 2025"}
            />
            
            <EducationCard
              heading={"St. Paul's School"}
              subHeading={"Intermediate"}
              details={"PCM"}
              percentage={"CGPA : 9.6"}
              timePeriod={"April 2020 - March 2021"}
            />
          </div>
        </section>
        <hr class="m-0" />
      </div>
    );
}

export default Education;