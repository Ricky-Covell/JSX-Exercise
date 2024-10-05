const Tweet = ({ username, name, date, message }) => {
    return (
        <div> 
            <div>{username}</div>
            <div>{name}</div>
            <div>{date}</div>
            <div>{message}</div>
        </div>
    )
}