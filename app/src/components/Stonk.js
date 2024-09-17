import React, { useState, useEffect } from "react"
import { getStonk } from './../actions'
import { connect } from 'react-redux'

const Stonk = (props) => {
    const { stonk, fetching, error } = props
    const [stonkNum, setStonkNum] = useState(0)

    useEffect(() => {
        props.getStonk(stonkNum)
    }, [])

    if (error) {
        return <h2>It didn't work. Sadge!</h2>
    }
    
    if (fetching) {
        return <h2>Going to the moon, brb</h2>
    }

    const handleClick = () => {
        setStonkNum(Math.floor(Math.random()*51))
        props.getStonk(stonkNum)
    }

    return (
        stonk ? 
        <>
        <div>
            <h2>🤑🤑🤑 {stonk.ticker} 🤑🤑🤑</h2>
            <ul>
                <li>Number of comments: {stonk.no_of_comments}</li>
                <li>Sentiment score: {stonk.sentiment_score} ({stonk.sentiment})</li>
            </ul>
        </div>
        <div><button onClick={handleClick}>Get new stonk</button></div>
        </>
        : null
    )
}

const mapStateToProps = (state) => {
    return {
        stonk: state.stonk,
        fetching: state.fetching,
        error: state.error
    }
}

export default connect(mapStateToProps, {getStonk})(Stonk)