import axios from "axios"

export const FETCH_START = 'FETCH_START'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_FAIL = 'FETCH_FAIL'

export const getStonk = (id) => {
    return (dispatch) => {
        dispatch(fetchStart())
        axios.get('https://dashboard.nbshare.io/api/v1/apps/reddit')
        .then(res => {
            console.log(res.data[id])
            dispatch(stonkSuccess(res.data[id]))
        })
        .catch(err => dispatch(fetchFail(err)))
    }
}

export const getQuote = () => {
    return (dispatch) => {
        dispatch(fetchStart())
        axios.get('https://movie-quote-api.herokuapp.com/v1/quote/')
        .then(res => {
            console.log(res.data)
            dispatch(quoteSuccess(res.data))
        })
        .catch(err => dispatch(fetchFail(err)))
    }
}

export const fetchStart = () => {
    return ({type:FETCH_START})
}

export const stonkSuccess = (stonk) => {
    return ({type:FETCH_SUCCESS, payload:stonk})
}

export const quoteSuccess = (quotation) => {
    return ({type:FETCH_SUCCESS, payload:quotation})
}

export const fetchFail = (error) => {
    return ({type:FETCH_FAIL, payload:error})
}