import React from 'react'

const Card = ({ name, url, icon }) => {

    return (
        <a href={url} target="_blank">
            <div style={{ display: 'flex', padding: 2, border: 'solid', borderRadius: 10, background: 'red', margin: 20, borderColor: 'black', borderWidth: 2 }}>
                <p>name : {name}</p>
                <p>url</p>
            </div>
        </a>
    )
}

export default Card