import {BaseButton,GoogleSignIn,Inverted} from "./button.style.jsx";

/* 
default

invented

google sign in

*/
export const BUTTON_TYPES_CLASSES = {
    base:"base",
    google: "google-sign-in",
    inverted: "inverted",
    
}

const getButton = (buttonType = BUTTON_TYPES_CLASSES.base) => (
      {
        [BUTTON_TYPES_CLASSES.base]:BaseButton,
        [BUTTON_TYPES_CLASSES.google]:GoogleSignIn,
        [BUTTON_TYPES_CLASSES.inverted]:Inverted,
      }[buttonType]
)

const Button = ({ children ,buttonType,...otherProps }) => {
    const CustomButton = getButton(buttonType);

    return (
        <CustomButton
            {...otherProps}
        >
        {children}
        </CustomButton>
    )
} 

export default Button; 