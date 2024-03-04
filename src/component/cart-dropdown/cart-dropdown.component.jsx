import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/cart.context";
import Button from "../button/button.component.jsx";
import CartItem from "../cart-item/cart-item.component";

import {
    CartDropDownContainer,
    EmptyMessage,
    CartItems
} 
from "./cart-dropdown.styles.jsx";

const CartDropDown =() =>{
    const {cartItems} = useContext(CartContext);
    const navigate = useNavigate();
    const goToCheckoutHandler = () =>{
        navigate("/checkout")
    }
    return(
        < CartDropDownContainer>
            <CartItems>
                {
                    cartItems.length ?(cartItems.map((item) => 
                    (<CartItem key={item.id} cartItem={item}  />
                    ))):(
                        < EmptyMessage>Your Cart Is Empty</ EmptyMessage>
                    )
                }

            </CartItems>
               <Button onClick ={goToCheckoutHandler} >CheckOut</Button>
        </ CartDropDownContainer>
    )
}

export default CartDropDown;