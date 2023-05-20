import { GET_PRODUCTOS, GET_DETAIL,CART_ADD,CART_REMOVE,CART_UP,CART_DOWN } from "./actions";


const initialState = () => {
    
     const cartInLocalStorage = localStorage.getItem("cart")
    const initialCart = cartInLocalStorage ? JSON.parse(cartInLocalStorage) : [] 

    return {
        allProductos: [],
        detail: {},
        cart: initialCart ,/* [] */
        numberCart:  initialCart.length ,/* 0 */
        
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
                        cantidad: action.payload.cantidad,
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

            const newCart = state.cart.filter(item => item.id !== action.payload);    
            localStorage.setItem('cart', JSON.stringify(newCart))
            return {
                ...state,
                cart: newCart,
                numberCart: state.numberCart - 1     
            }
        } 
        case CART_UP:
            state.numberCart++
            state.cart[action.payload].cantidad++;
            localStorage.setItem('cart', JSON.stringify(state.cart))
            return {
                ...state
            }
        case CART_DOWN:
            let quantity = state.cart[action.payload].cantidad;
            if (quantity > 1) {
                state.numberCart--;
                state.cart[action.payload].cantidad--;
                localStorage.setItem('cart', JSON.stringify(state.cart));
                return {
                    ...state
                }
            }   
      
        default:
            return state;
    }
}