let initialState = {
    active: 0
};

export const reducerPrice = (state = initialState, action) => {
    //console.log(action);
    switch (action.type) {
        case 'CHANGE_STATUS':
            return {
                ...state,
                active: action.payload
            }
        case 'SORT_ARR':
            return {
                ...state,
                active: action.payload
            }
        default:
            return state;
    }
}