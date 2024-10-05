const Person = ({ name, age, hobbies }) => {
    // shorten name to first 6 characters if longer than 8
    const showName = name.length > 8 ? name.slice(0, 6) : name;
    const voteTxt = age >= 18 ? 'please go vote!' : 'you must be 18';
    const hobbiesToLI = hobbies.map(h => <li>{h}</li>);

    return (
        <div>
            <p>Learn some information about this person:</p>
            <ul>
                <li>Name: {showName}</li>
                <li>Age: {age}</li>
                <ul>
                    Hobbies:
                    {hobbiesToLI}
                </ul>
            </ul>
            <h3>{voteTxt}</h3>
        </div>
    )
}