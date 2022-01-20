import React from 'react'

function Coin({name, icon, price, symbol}) {
    return(
        <div className='coin'>
            <h1>Moeda: {name}</h1>
            <img src={icon}/>
            <h3>Preço: US {price}</h3>
            <h3>Simbolo: {symbol}</h3>
        </div>
    )
}

export default Coin;