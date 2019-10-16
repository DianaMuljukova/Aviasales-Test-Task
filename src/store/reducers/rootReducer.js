import {combineReducers} from 'redux';
import {reducerPrice} from './reducerPrice';
import {reducerStops} from './reducerStops';

export default combineReducers({
    filterPrice: reducerPrice,
    filterStops: reducerStops
})