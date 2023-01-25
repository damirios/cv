export default function Education(props) {
    const diplomas = Object.values(props.data);
    const {lang} = props;

    return (
        <div className="education">
            <h2 className="education__title block-title">{lang === 'ru' ? 'Образование' : 'Education'}</h2>
            <ul className="education__list">
                {diplomas.map((item, index) => {
                    return (
                        <li key={index} className="education__item">
                            <div className="education__university-block">
                                <p className="education__university">{item.university}</p>
                                <p className="education__speciality">{item.speciality}</p>
                            </div>
                            <div className="education__period-block">
                                <p className="education__city">{item.city}</p>
                                <p className="education__period">{item.period}</p>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}