import {useContext} from "react";

import {CartContext} from "../../context/cart.context"; 
import {ShoppingIcon,CartIconsContainer,ItemCount} from "./cart-icon.styles.jsx";


const CartIcons = () =>{
    const {isCartOpen,setIsCartOpen,cartCount} = useContext(CartContext);
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
    return(
        <CartIconsContainer onClick ={toggleIsCartOpen}>
            <ShoppingIcon className = "shopping-icon" />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconsContainer>
    )
}
export default CartIcons;
