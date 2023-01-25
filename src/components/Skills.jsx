export default function Skills(props) {
    const {data, lang} = props;

    return (
        <div className="skills">
            <h2 className="skills__title block-title">{lang === 'ru' ? 'Языки и технологии' : 'Skills'}</h2>
            <ul className="skills__list">
                {/* {data.map((tech, index) => {
                    return (
                        <li key={index} className="skills__tech">
                            {tech}
                        </li>
                    );
                })} */}
                {data.map((tech, index) => tech + ((index !== data.length - 1) ? ', ' : ' '))}
            </ul>
        </div>
    );
}