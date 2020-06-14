const reducers = (state, action) => {
    switch (action.type) {
        case 'CHANGE_PAGE':
            return {
                data: action.payload.data.data,
                currentPage: action.payload.page
            }
        default:
            return state;
    }
}

export default reducers;