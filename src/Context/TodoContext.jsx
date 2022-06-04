import React, {useState, createContext } from "react";

export const TodoContext = createContext();

export const TodoContextProvider = ({children})=>{

    const [value, setValue] = useState("")

    const handleOnChange = (e) =>{
        
        setValue(e.target.value)
    }
    return (<TodoContext.Provider value={{value,setValue,handleOnChange}}>
        {children}
    </TodoContext.Provider>
    )
}