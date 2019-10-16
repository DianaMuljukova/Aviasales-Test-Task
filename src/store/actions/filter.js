export const changeFilter = value => {
    return {
        type: 'CHANGE_FILTER',
        payload: value
    }
};

export const changeStatus = i => {
    return {
        type: 'CHANGE_STATUS',
        payload: i
    }
}