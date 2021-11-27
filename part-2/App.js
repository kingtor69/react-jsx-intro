const App = () => (
    <div>
        <Tweet username="kingtor" name="Tor Kingdon" date={Date()} tweet="Twitter is killing me with their stupid 'security' BS." />
        <Tweet username="bobbybob" name="Bob Roberts" date={Date()} tweet="Some people call me Dr. Robert" />
        <Tweet username="vivaldi" name="Colonel Vivaldi Doofwaddle" date={Date()} tweet="I'm not actually a dog, but some people think I am." />
        <Tweet username="otello" name="Otello Fellow" date={Date()} tweet="I am a dog, but you can call me SnugglePup." />
    </div>
)

ReactDOM.render(<App />, document.getElementById('root'));