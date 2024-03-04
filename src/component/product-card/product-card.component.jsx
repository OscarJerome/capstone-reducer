import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import {ProductIconContainer,Footer} from "./product-card.styles";
import Button,{BUTTON_TYPES_CLASSES} from "../button/button.component";

const ProductCard = ({product}) => {
    const {name,price,imageUrl} = product;
    const {addItemToCart} = useContext(CartContext)
    const addProductToCart = () => addItemToCart(product )
  return (
    <ProductIconContainer>
        <img src={imageUrl} alt={`${name}`} />
        <Footer>
            <span className = "name">{name}</span>
            <span className="price">{price}</span>
        </Footer>

        <Button buttonType={BUTTON_TYPES_CLASSES.inverted} onClick ={addProductToCart}>
             Add to Cart
          </Button>
      
    </ProductIconContainer>
  )
}

export default ProductCard
