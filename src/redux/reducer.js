import { GET_PRODUCTOS,/* GET_PRODUCTOS_BY_ID */} from "./actions";


const initialState = () => {
   // const cartInLocalStorage = localStorage.getItem("cart")
    //const initialCart = cartInLocalStorage ? JSON.parse(cartInLocalStorage) : []
    return {
        allProductos: [],
        producto: [],
        /* user: [],
        token: [],
        cart: initialCart,
        numberCart: initialCart.length, */
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
        /* case GET_PRODUCTOS_BY_ID:
            return {
                ...state,
                producto: action.payload
            } */
      
        default:
            return state;
    }
}