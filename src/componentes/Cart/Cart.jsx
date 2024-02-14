import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import { CarritoContext } from "../../context/CarritoContext";
import { useContext } from "react";
import './Cart.css';

const Cart = () => {
    const {carrito, vaciarCarrito, total, cantidadTotal} = useContext (CarritoContext);

    if (cantidadTotal === 0) {
        return (
            <>
            <h2>No se encuentran productos en el carrito</h2>
            <Link to="/"> Ver Productos </Link>
            </>
        )
    }
  return (
    <div className="cart-container">
        {
            carrito.map(prod => <CartItem key={prod.id} {...prod} />)
        }
        <h3 className="cart-total">Total: $ {total }</h3>
        <button onClick={() => vaciarCarrito()} className="vaciar-carrito-btn">Vaciar Carrito </button>
        <Link to='/checkout' className="checkout-link"> Finalizar Compra</Link>
    </div>
  )
}

export default Cart