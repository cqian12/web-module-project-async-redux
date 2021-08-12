import axios from "axios"

export const FETCH_STONK = 'FETCH_STONK'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_FAIL = 'FETCH_FAIL'

export const getStonk = () => {
    return (dispatch) => {
        dispatch(fetchStonk())
        axios.get('https://dashboard.nbshare.io/api/v1/apps/reddit')
        .then(res => {
            dispatch(fetchSuccess(res.data.results[0]))
        })
        .catch(err => dispatch(fetchFail(err)))
    }
}

export const fetchStonk = () => {
    return ({type:FETCH_STONK})
}

export const fetchSuccess = (stonk) => {
    return ({type:FETCH_SUCCESS, payload:stonk})
}

export const fetchFail = (error) => {
    return ({type:FETCH_FAIL, payload:error})
}