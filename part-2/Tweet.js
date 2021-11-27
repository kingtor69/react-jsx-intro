const Tweet = ({ username, name, date, tweet }) => (
    <div>
        <p><b>{username}</b> {name}</p>
        <p>
            {tweet}<br />
            <small>{date}</small>
        </p>
        <hr />
    </div>
);