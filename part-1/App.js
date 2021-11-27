const App = () => (
    <div>
        <FirstComponent />
        <NamedComponent name="Tor" />
    </div>
)

ReactDOM.render(<App />, document.getElementById('root'));