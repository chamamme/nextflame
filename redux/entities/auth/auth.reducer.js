const initialState = {
    user: {},
    authenticated: false
};
export default (state, action) => {
    return state || initialState;
}