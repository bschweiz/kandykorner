import React from "react"


export const Location = ({location}) => (
    // if (location.accessible === true){const access = "Handicap Accessible"}
    // else {const access = "Not Handicap Accessible"}
    <section className="location">
        <h3 className="location__name">{location.name}</h3>
        <div className="location__address">Address: {location.address}</div>
        <div className="location__accessible">Handicap Access: {location.accessible.toString()}</div>
    </section>
)