export const reducer = (state,action) => {
    switch (action.type) {
        case "increment":
            return {count : state.count + (action.payload || 1)};
        case "decrement": 
            if(state.count <= 0){
                return state;
            }
            return {count : state.count - (action.payload || 1)};
    
        default:
            throw new Error("Type action inconnu")
    }

}