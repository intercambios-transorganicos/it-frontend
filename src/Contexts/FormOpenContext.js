import React, { createContext, useContext, useState } from "react";

const FormOpenContext = createContext();

export const FormOpenContextUse = () => {
    return useContext(FormOpenContext)
}

export const FormOpenContextProvider = ({ children }) => {

    const [formOpen, setFormOpen] = useState(false);
    

    return(
        <FormOpenContext.Provider value={{ formOpen, setFormOpen }}>
            {children}
        </FormOpenContext.Provider>
    );
}