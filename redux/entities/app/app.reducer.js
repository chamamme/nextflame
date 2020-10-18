import pkg from "../../../package.json";

const initialState = {
    name: "NextFlame🔥",
    version: pkg.version,
}

export default (state, action) => {
    const {type,payload} = action;
    switch (action.type) {
        case null:
            return { ...state, payload, }
        default:
            return initialState
    }
}
