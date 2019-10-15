let initialState = {
    stopsCount: []
};

export const filterReducer = (state = initialState, action) => {
    //console.log(state);
    switch (action.type) {
        case 'CHANGE_FILTER':
            let arr = [...state.stopsCount];
            if (arr.includes(action.payload)) {
                arr.splice(arr.indexOf(action.payload),1);
            } else {
                arr.push(action.payload)
            }

            return {
                ...state,
                stopsCount: arr
            }
        default:
            return state
    }
};