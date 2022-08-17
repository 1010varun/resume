import React from "react"
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { FaBootstrap } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { FaPython } from 'react-icons/fa';

const Skills = () => {
    return (
        <div>
            <section class="resume-section" id="skills">
                <div class="resume-section-content">
                    <h2 class="mb-5">Skills</h2>
                    <div class="subheading mb-3">Programming Languages & Tools</div>
                    <ul class="list-inline dev-icons">
                        <li class="list-inline-item"><i><FaHtml5/></i></li>
                        <li class="list-inline-item"><i><FaCss3Alt/></i></li>
                        <li class="list-inline-item"><i><FaBootstrap/></i></li>
                        <li class="list-inline-item"><i><SiTailwindcss/></i></li>
                        <li class="list-inline-item"><i><SiJavascript/></i></li>
                        <li class="list-inline-item"><i>< FaReact/></i></li>
                        <li class="list-inline-item"><i>< FaPython/></i></li>
                    </ul>
                    <div class="subheading mb-3">Workflow</div>
                    <ul class="fa-ul mb-0">
                        <li>
                            <span class="fa-li"><i class="fas fa-check"></i></span>
                            Mobile-First, Responsive Design
                        </li>
                        <li>
                            <span class="fa-li"><i class="fas fa-check"></i></span>
                            Cross Browser Testing & Debugging
                        </li>
                        <li>
                            <span class="fa-li"><i class="fas fa-check"></i></span>
                            Cross Functional Teams
                        </li>
                        <li>
                            <span class="fa-li"><i class="fas fa-check"></i></span>
                            Agile Development & Scrum
                        </li>
                    </ul>
                </div>
            </section>
            <hr class="m-0" />
        </div>
    )
} 

export default Skills;