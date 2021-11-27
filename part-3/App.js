const App = () => (
    <div>
        <Person name="Tor" age={52} hobbies={["road biking", "skiing", "eating cheese"]} />
        <Person name="BobbyBob" age={35} hobbies={["prescription drugs", "navel-gazing", "rock-n-roll"]} />
        <Person name="Col Doofwaddle" age={3} hobbies={["whining", "eating", "looking for food", "eating whatever I find, whether it's food or not"]} />
        <Person name="Otello" age={6} hobbies={["sleeping", "chasing the cat", "barking at the chickens"]} />
    </div>
)

ReactDOM.render(<App />, document.getElementById('root'));