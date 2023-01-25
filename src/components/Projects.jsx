export default function Projects(props) {
    const projects = Object.values(props.data);
    const {lang} = props;

    return (
        <div className="projects">
            <h2 className="projects__title block-title">{lang === 'ru' ? 'Проекты' : 'Projects'}</h2>
            <ul className="projects__list">
                {projects.map((project, index) => {
                    return (
                        <li key={index} className="projects__project project">
                            <div className="project__info">
                                <p className="project__title">{project.title}</p>
                                <p className="project__techs-title">Использованные технологии: </p>
                                <ul className="project__techs-list">
                                    {project.techs.map((tech, index) => {
                                        return (
                                            <li key={index} className="project__tech">{tech}</li>
                                        );
                                    })}
                                </ul>
                            </div>
                            <div className="project__github">
                                <p className="project__preview">
                                    <p>Превью:</p>
                                    <p><a href={project.preview}>{project.preview}</a></p>

                                </p>
                                <p className="project__repo">
                                    <p>Репозиторий:</p>
                                    <p><a href={project.repo}>{project.repo}</a></p>
                                </p>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}