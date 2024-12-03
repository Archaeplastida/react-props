const TweetComponent = (props) => {
    return (
        <div>
            <div>{props.name}</div>
            <div className="username">{props.username}</div>
            <div className="date">{props.date}</div>
            <p>{props.message}</p>
            <hr/>
        </div>
    );
}