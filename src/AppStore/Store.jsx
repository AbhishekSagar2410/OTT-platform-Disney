import {getDefaultMiddleware} from '@reduxjs/toolkit';
import {createStore,combineReducers} from 'redux';
import {setUserLoginDetailsRedu,setSignoutRedu} from '../Features/Users/UserSlice'

const allReducer=combineReducers({
    setUserLoginDetailsRedu:setUserLoginDetailsRedu,
    setSignoutRedu:setSignoutRedu,
})

const store=createStore(allReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store; 