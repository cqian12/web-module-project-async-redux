import { FETCH_FAIL, FETCH_SUCCESS, FETCH_STONK } from './../actions'

const initialState = {
    stonk: {
        no_of_comments: 0,
        sentiment: '',
        sentiment_score:0,
        ticker:''
    },
    fetching: false,
    error:''
}

export const reducer = (state = initialState, action) => { 
    switch (action.type) {
        case(FETCH_STONK):
            return ({
                ...state, fetching:true, error:''
            })
        case(FETCH_SUCCESS):
            return ({
                ...state, stonk:action.payload, fetching:false
            })
        case(FETCH_FAIL):
            return ({
                ...state, fetching:false, error:action.payload
            })
        default:
            return state
    }
}