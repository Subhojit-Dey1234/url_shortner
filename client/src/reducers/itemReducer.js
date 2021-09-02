import { GET_ITEMS, DELETE_ITEM, ADD_ITEM , ITEMS_LOADING, GET_ITEMS_ID} from '../actions/types';

const initialState = {
    items: [],
    loading : false,
}

export default function(state = initialState,action){
    console.log(action.type)
    switch(action.type){
        case GET_ITEMS:
            return{
                ...state,
                items : action.payload,
                loading : false,
            }

        case ADD_ITEM:
            return{
                ...state,
                items: [action.payload,...state.items]
            }
        case DELETE_ITEM:
            return {
                 ...state,
                 items: state.items.filter(item => item._id !== action.payload)
            }
        case ITEMS_LOADING:
            return{
                ...state,
                loading : true
            }
        case GET_ITEMS_ID:
            return{
                ...state
            }
        default:
            return state
    }
}