let initialState = {
    stopsCount: []
};

export const filterReducer = (state = initialState, action) => {
    //console.log(state);
    switch (action.type) {
        case 'CHANGE_FILTER':
            let arr = [...state.stopsCount];
            arr.push(action.payload);
            return {
                ...state,
                stopsCount: arr
            }
        default:
            return state
    }
};