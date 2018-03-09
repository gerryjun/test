import * as types from '../constants/ActionConstants';

export default function CounterReducer(state = 0, action) {
    switch(action.type) {
        case types.INCREMENT:
            return state = state + 1;
        case types.DECREMENT:
            return state = state - 1;
        default:
            return state;
    }
}