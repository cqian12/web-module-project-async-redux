import React, { useEffect } from "react"
import { getQuote } from './../actions'
import { connect } from 'react-redux'

const Quote = (props) => {
    const { quotation, fetching, error } = props
    
    useEffect(() => {
        props.getQuote()
    }, [])

    if (error) {
        return <h2>It didn't work. Sadge!</h2>
    }
    
    if (fetching) {
        return <h2>Going to the moon, brb</h2>
    }

    const handleClick = () => {
        props.getQuote()
    }

    return (
        <>
        <div>
            <h2>🤑🤑🤑 {quotation.quote} 🤑🤑🤑</h2>
            <ul>
                <li>Character: {quotation.role}</li>
                <li>Show: {quotation.show}</li>
            </ul>
        </div>
        <div><button onClick={handleClick}>Get new quote</button></div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        quotation: state.quotation,
        fetching: state.fetching,
        error: state.error
    }
}

export default connect(mapStateToProps, {getQuote})(Quote)