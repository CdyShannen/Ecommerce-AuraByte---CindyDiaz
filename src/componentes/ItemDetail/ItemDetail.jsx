import { useState, useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import './ItemDetail.css';
import { CarritoContext } from '../../context/CarritoContext';

const ItemDetail = ({ id, nombre, stock, precio, img }) => {

  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const {agregarAlCarrito} = useContext(CarritoContext);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
  
    const item = {id,nombre, precio};
    agregarAlCarrito(item, cantidad);
  }


  return (
    <div className='contenedorItem'>
      <h2>Nombre: {nombre} </h2>
      <h3>Precio: {precio} </h3>
      <p>ID: {id} </p>
      <p>Stock: {stock} </p>
      <p>Pantalla ProMotion 120 Hz, potente chip A15 Bionic, cámaras triple sistema, grabación ProRes, duración de batería mejorada, 5G rápido.</p>
      <img src={img} alt={nombre} />
      {
        agregarCantidad > 0 ? (<Link to="/cart"> Terminar Compra </Link>) : (<ItemCount inicial = {1} stock={stock} funcionAgregar = {manejadorCantidad}/>)
      }

    </div>
  )
}

export default ItemDetail