import React from 'react';
import {BackgroundImage,Body,DirectoryItemContainer} from "./directory-item.style.jsx";

const DirectoryItem = ({catergory}) => {
    const {imageUrl,title} = catergory;
  return (
    <DirectoryItemContainer> 
      <BackgroundImage
       imageUrl = {imageUrl}
       />
    
      <Body>
       <h2>{title}</h2>
       <p>Shop Now</p>
       
      </Body>
       </DirectoryItemContainer>
    
  )
}

export default DirectoryItem;

