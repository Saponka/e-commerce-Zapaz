import { GET_PRODUCTOS, GET_DETAIL,CART_ADD,CART_REMOVE } from "./actions";


const initialState = () => {
    
    /* const cartInLocalStorage = localStorage.getItem("cart")
    const initialCart = cartInLocalStorage ? JSON.parse(cartInLocalStorage) : [] */

    return {
        allProductos: [],
        detail: {},
        cart:[]
        /* initialCart */,
        numberCart: 0/* initialCart.length */,
        
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
        case CART_ADD: {
                if (state.numberCart === 0) {
                    let cart = {
                        id: action.payload.id,
                        cantidad: 1,
                        title: action.payload.title,
                        image: action.payload.image,
                        price: action.payload.price
                    }
                    state.cart.push(cart);
                }
                else {
                    let check = false;
                    state.cart.forEach((item, key) => {
                        if (item.id === action.payload.id) {
                            state.cart[key].cantidad++;
                            check = true;
                        };
                    });
                    if (!check) {
                        let _cart = {
                            id: action.payload.id,
                            cantidad: 1,
                            title: action.payload.title,
                            image: action.payload.image,
                            price: action.payload.price
                        }
                        state.cart.push(_cart);
                    }
                }
                localStorage.setItem('cart', JSON.stringify(state.cart))
                    return {
                    ...state,
                    numberCart: state.numberCart + 1
                }
        }
        case CART_REMOVE: {
            const newCart = state.cart.filter(item => item.id !== action.payload)
            localStorage.setItem('cart', JSON.stringify(newCart))
            return {
                ...state,
                cart: newCart
            }
        }    
      
        default:
            return state;
    }
}