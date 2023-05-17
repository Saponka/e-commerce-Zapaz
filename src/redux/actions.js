import axios from 'axios';
import Data from '../Data';

export const GET_PRODUCTOS = 'GET_PRODUCTOS';
export const GET_DETAIL = 'GET_DETAIL';


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
