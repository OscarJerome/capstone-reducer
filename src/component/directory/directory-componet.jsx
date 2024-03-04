import React from 'react'
import {DirectoryContainer} from "./directory.styles.jsx";
import DirectoryItem from "../directory-item/directory-item.component";


const Directory = ({catergories }) => {
  return (
  <DirectoryContainer>
       {/* First */}
      {catergories.map((catergory) =>(
        <DirectoryItem key={catergory.id} catergory={catergory}/>
       ))}
   </DirectoryContainer>
  )
}

export default Directory;
