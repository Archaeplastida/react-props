const PersonComponent = (props) => {  //{ age, hobbies, name }
    const hobbiesElements = props.hobbies.map(hobby => <li>{hobby}</li>);
    let voteStatus;

    if (props.age >= 18) voteStatus = "Please go vote!"
    else voteStatus = "You must be 18 for voting."

    return (
        <div>
            <p>Learn some information about this person:</p>
            <ul>
                <li>Name: {props.name}</li>
                <li>Age: {props.age}</li>
                <ul>
                    Hobbies:
                    {hobbiesElements}
                </ul>
            </ul>
            <h3>{voteStatus}</h3>
        </div>
    );
}