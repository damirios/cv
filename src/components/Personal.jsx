export default function Personal(props) {
    const {data} = props;

    return (
        <div className="personal">
            <div className="personal__common">
                <p className="personal__name">{data.name}</p>
                <div className="personal__position">{data.position}</div>
            </div>
            <div className="personal__contacts">
                <p className="personal__phone">Phone: {data.phone}</p>
                <p className="personal__email">Email: {data.email}</p>
                <p className="personal__github">Github: {data.github}</p>
            </div>
        </div>
    );
}