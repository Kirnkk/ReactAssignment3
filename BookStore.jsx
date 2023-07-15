import {combineReducers,createStore} from 'redux'
import {BookReducer} from './BookReducer'



const allReducers =combineReducers({

   books:BookReducer

})


export const myBookStore =createStore(allReducers)