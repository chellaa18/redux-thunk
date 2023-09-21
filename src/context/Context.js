import React, {createContext, useContext, useState} from "react";


const CustomizeContext = createContext();

export const useCustomizeContext = () => useContext(CustomizeContext);

export const CustomizeProvider = ({ children }) => {


    const [exhiStartComplete, setExhiStartComplete] = useState("Learn Context");


    const  declareState = {

        exhiStartComplete,
        setExhiStartComplete,
    };


    return (   
         <CustomizeContext.Provider value = {{ declareState }} >   
                {children}    
         </CustomizeContext.Provider> 
          );
          
};


