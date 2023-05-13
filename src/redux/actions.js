import axios from 'axios';
import Data from '../Data';

export const GET_PRODUCTOS = 'GET_PRODUCTOS';
export const GET_PRODUCTOS_BY_NAME = 'GET_PRODUCTOS_BY_NAME';


export const getProductos = () => {
    return  (dispatch) => {
        try {
            //let data = await axios.get('http://localhost:5173/productos'); 
            let data =  Data;      
            return dispatch({ type: GET_PRODUCTOS, payload: data.items });
        } catch(e) {
            console.error(e);
        }
    }
};