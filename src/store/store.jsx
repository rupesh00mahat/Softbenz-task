import { createContext, useReducer } from "react";

export const EcommerceStore = createContext();
const initialStore = {
    cart: [],

}


const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_STORE":

            return { cart: [...state.cart, action.payload] };

            break;

        default:
            return state;
            break;
    }
}


function EcommerceProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialStore);

    return <EcommerceStore.Provider value={{ state, dispatch }}>
        {children}
    </EcommerceStore.Provider>
}


export default EcommerceProvider;