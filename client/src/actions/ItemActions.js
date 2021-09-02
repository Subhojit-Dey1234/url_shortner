import { GET_ITEMS, DELETE_ITEM , ADD_ITEM, ITEMS_LOADING, GET_ITEMS_ID } from "./types";
import axios from 'axios'

export const getItems = ()=>(dispatch) =>{
    dispatch(setItemsLoading())
    axios.get('/api/items/')
    .then(res=>{
        dispatch({
            type : GET_ITEMS,
            payload : res.data
        })
    })
    
}
export const getItemsById = (id)=>(dispatch) =>{
    return axios.get(`/api/items/${id}`)
    .then(res=>{
        dispatch({
            type : GET_ITEMS_ID,
            payload : res.data
        })
        console.log(res)

        return res
    })
    
}
export const deleteItems = (id)=> dispatch =>{
    axios.delete(`/api/items/${id}`)
    .then(res=>{
        dispatch({
            type:DELETE_ITEM,
            payload : id,
        })
    })
}
export const addItem = item => dispatch =>{
    console.log(item)
    axios.post('/api/items',item)
    .then(res=>{
        dispatch({
            type:ADD_ITEM,
            payload: res.data.item
        })
    })
}
export const setItemsLoading = () =>{
    return { 
        type : ITEMS_LOADING,
    }
}