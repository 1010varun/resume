import React from "react";

const Education = () => {
    return (
        <div>
            <section class="resume-section" id="education">
                <div class="resume-section-content">
                    <h2 class="mb-5">Education</h2>
                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">KIET Group of Institution</h3>
                            <div class="subheading mb-3">Bachelor of Technology</div>
                            <div>Computer Science - Web Development Track</div>
                            <p>CGPA : 9</p>
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">August 2021 - May 2025</span></div>
                    </div>
                    <div class="d-flex flex-column flex-md-row justify-content-between">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">St. Paul's School</h3>
                            <div class="subheading mb-3">Intermediate</div>
                            <p>CGPA : 9.6</p>
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">April 2020 - March 2021</span></div>
                    </div>
                </div>
            </section>
            <hr class="m-0" />
        </div>
    )
}

export default Education;