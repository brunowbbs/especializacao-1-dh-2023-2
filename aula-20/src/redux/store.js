import {legacy_createStore,combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import { todoReducer } from '../reducers/todo-reducer';


const combine = combineReducers({todo:todoReducer})

export const store = legacy_createStore(combine, applyMiddleware(thunk))