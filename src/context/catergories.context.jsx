import { createContext,useState,useEffect } from "react";
import { addCollectionAndDocuments,getCategoriesAndDocuments  } from "../utils/firebase/firebase.utils.js";

import SHOP_DATA from "../shop-data.js";


export const CategoriesContext = createContext({
    categoriesMap:{},
});


export const CategoriesProvider = ({children}) =>{
    const [categoriesMap,setCategoriesMap] = useState({});

    useEffect(() => {
        const addCategoriesToFirestore = async () => {
            await addCollectionAndDocuments("categories", SHOP_DATA);
            console.log("Categories added to Firestore.");
        };
    
        const fetchCategoriesFromFirestore = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            console.log("Fetched categories from Firestore:", categoryMap);
            setCategoriesMap(categoryMap);
        };
    
        addCategoriesToFirestore()
            .then(fetchCategoriesFromFirestore)
            .catch(error => {
                console.error("Error in adding or fetching categories:", error);
                
            });
    }, []);


    // useEffect(() => {
    //     const getCatergoriesMap = async () => {
    //         try {
    //             const fetchedCatergoryMap = await getCategoriesAndDocuments();
    //             console.log("Fetched catergory map:", fetchedCatergoryMap);
    //             setCatergoriesMap(fetchedCatergoryMap);
    //         } catch (error) {
    //             console.error("Error fetching catergory map:", error);
    //         }
    //     };

    //     getCatergoriesMap();
    // }, []);

//    useEffect(() =>{
//     addCollectionAndDocuments("catergories",SHOP_DATA);   
//     const getCategoriesMap = async () => {
//        const categoryMap = await getCategoriesAndDocuments();  
       
//        console.log(categoryMap);
//        setCategoriesMap(categoryMap);

//     }
//     getCategoriesMap();
//    },[]);


    const value = {categoriesMap};
    return(
        <CategoriesContext.Provider value={value}>

            {children}
            
        </CategoriesContext.Provider> 
    )
}