import React from 'react'
import Card from './Card'


const Cards = ({ listSocialNetwork }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            {listSocialNetwork.map(i => <Card name={i.name} url={i.url} icon={i.icon} />)}
        </div>
    )
}

export default Cards