import { GET_PRODUCTOS, GET_DETAIL } from "./actions";


const initialState = () => {
   // const cartInLocalStorage = localStorage.getItem("cart")
    //const initialCart = cartInLocalStorage ? JSON.parse(cartInLocalStorage) : []
    return {
        allProductos: [],
        detail: [],
        
    };
};

export default function rootReducer(state = initialState(), action) {
    switch (action.type) {
        case GET_PRODUCTOS: {
            return {
                ...state,
                allProductos : action.payload,
            }
        }
         case GET_DETAIL:
            return {
                ...state,
                detail: action.payload
            } 
      
        default:
            return state;
    }
}