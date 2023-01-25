export default function Courses(props) {
    const courses = Object.values(props.data);
    const {lang} = props;

    return (
        <div className="courses">
            <h2 className="courses__title block-title">{lang === 'ru' ? 'Курсы и обучающие ресурсы' : 'Courses'}</h2>
            <ul className="courses__list">
            {courses.map((course, index) => {
                    return (
                        <li key={index} className="courses__course course">
                                <p className="course__title">{course.title}</p>
                                <p className="course__desc">{course.desc}</p>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}