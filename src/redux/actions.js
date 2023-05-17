import axios from 'axios';
import Data from '../Data';

export const GET_PRODUCTOS = 'GET_PRODUCTOS';
export const GET_DETAIL = 'GET_DETAIL';
export const CART_ADD = 'CART_ADD';
export const CART_REMOVE = 'CART_REMOVE';


export const getProductos = () => {
    return  (dispatch) => {
        try {
            //let data = await axios.get('http://localhost:5173/productos'); 
            let data =  Data;      
            return dispatch({ 
                type: GET_PRODUCTOS,
                payload: data.items });
        } catch(e) {
            console.error(e);
        }
    }
};

export function getById(id){
    
    return async function (dispatch) {
        try{
          let detalle =  await axios.get(`http://localhost:5173/productos/detalle/${id}`);
          //let detalle =  Data;
         return dispatch({
                type:GET_DETAIL,
                payload: detalle.items,
            });
        }
        catch(error){
         return console.log("No se encuentra detalle de producto")
        }
    }
};
export function cartAdd(payload){
    let id = localStorage.getItem('productId')
    if(id) {
        return async function(dispatch){
            dispatch({
                type: 'CART_ADD',
                payload
            })
        console.log(payload);
        await axios.put(`${('http://localhost:5173/')}/carrito/${id}`, payload)
        }
    } else {
        console.log("no se puede cargar al carro");
        /* swal({
            title: "Oppps...",
            text: "Tienes que tener tu sesión inciada para agregar cosas al carrito",
            icon: "error",
            dangerMode: true,
            timer: 3000
          }) */
    } 
    }
    export function cartRemove(payload){
        return async function(dispatch){
            dispatch({
                type: 'CART_REMOVE',
                payload
            })
        }
    }
