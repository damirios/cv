import Courses from "./Courses";
import Education from "./Education";
import Personal from "./Personal";
import Projects from "./Projects";
import Skills from "./Skills";

import {data} from '../data/russian';

export default function CV(props) {
    const {personal, projects, skills, education, courses} = data;

    return (
        <div className="cv">
            <div className="container">
                <div className="cv__column">
                    <Personal data={personal} lang={props.lang} />
                    <Projects data={projects} lang={props.lang} />
                    <Skills data={skills} lang={props.lang} />
                    <Education data={education} lang={props.lang} />
                    <Courses data={courses} lang={props.lang} />
                </div>
            </div>
        </div>
    );
}