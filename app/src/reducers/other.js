import { FETCH_FAIL, FETCH_SUCCESS, FETCH_START } from './../actions'

const initialState = {
    quotation: {
        quote:'',
        role: '',
        show:'',
        contain_adult_lang:false
    },
    fetching: false,
    error:''
}

export const reducer = (state = initialState, action) => { 
    switch (action.type) {
        case(FETCH_START):
            return ({
                ...state, fetching: true, error: ''
            })
        case(FETCH_SUCCESS):
            return ({
                ...state, quotation: action.payload, fetching: false
            })
        case(FETCH_FAIL):
            return ({
                ...state, fetching: false, error: action.payload
            })
        default:
            return state
    }
}