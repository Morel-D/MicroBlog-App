import { useContext } from "react"
import { AuthContext } from "../Context/authContext"


export const useAuthContext = () => {
    const context = useContext(AuthContext)

    if (!context)
    {
        throw Error('Use context must be used inside the authUseXContextProvider')
    }
    
    return context;
}