const App = () => {
    return (
        <div>
            <PersonComponent name="Alice Smith" age={27} hobbies={["hiking", "photography", "cooking"]} />
            <PersonComponent name="Michael Johnson" age={34} hobbies={["cycling", "playing guitar", "traveling"]} />
            <PersonComponent name="Emily Davis" age={14} hobbies={["painting", "dancing", "writing poetry"]} />
            <PersonComponent name="David Brown" age={45} hobbies={["gardening", "reading history", "chess"]} />
            <PersonComponent name="Sophia Wilson" age={9} hobbies={["yoga", "baking", "blogging"]} />
        </div>
    );
}