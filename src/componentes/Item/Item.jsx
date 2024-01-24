import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({ id, nombre, precio, img }) => {
  return (
    <div className='contenedor__producto'>
      <div className='cardProducto'>
        <img src={img} alt={nombre} className='img__producto'/>
        <div className='infor__producto'>
          <h3 className='nombre__producto'>Nombre: {nombre} </h3>
          <p className='id__producto'>ID: {id} </p>
          <p>Precio: {precio} </p>
          <div className='contenedor__link'>
            <Link to={`/item/${id}`}> Ver Detalles </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item