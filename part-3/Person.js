const Person = ({name, age, hobbies}) => {
    const displayName = (name.length > 8) ? name.slice(0, 6) : name
    const voteMessage = (age < 18) ? "You're not old enough to vote. Wait until you're 18." : "Please go vote!"
    return (
        <div>
            <p>Learn some information about <b>{displayName}</b>.</p>
            <h3>{voteMessage}</h3>
            <h2>Hobbies:</h2>
            <ul>
                {hobbies.map (h => <li>{h}</li>)}
            </ul>
            <hr />
        </div>
    )
}
