import { createContext, useState } from "react";


export const UserContext = createContext({});

// eslint-disable-next-line react/prop-types
export function UserProvider ({children}) {
    const [ name, setName ] = useState('');


    return(
        <UserContext.Provider value={{name, setName }}>
            {children}
        </UserContext.Provider>

    )
}