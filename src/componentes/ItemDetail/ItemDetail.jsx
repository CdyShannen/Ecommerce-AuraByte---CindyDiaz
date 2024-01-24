import React from 'react';
import './ItemDetail.css';

const ItemDetail = ({id, nombre, precio, img}) => {
  return (
    <div className='contenedorItem'>
        <h2>Nombre: {nombre} </h2>
        <h3>Precio: {precio} </h3>
        <p>ID: {id} </p>
        <p>Pantalla ProMotion 120 Hz, potente chip A15 Bionic, cámaras triple sistema, grabación ProRes, duración de batería mejorada, 5G rápido.</p>
        <img src={img} alt={nombre} />
    </div>
  )
}

export default ItemDetail