const Seat = ({text, backdrop}) => {
    return (
        <div className="bg-dark p-5 Seat-container">
            <h1 className="Seat-text">{text}</h1>
            {backdrop && <div className="Seat-backdrop" style={{backgroundImage: `url(${backdrop})`}}></div>}
        </div>
    )
}

export default Seat;