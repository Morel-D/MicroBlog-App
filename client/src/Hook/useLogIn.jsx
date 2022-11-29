import { useState } from "react"
import { useAuthContext } from "./useAuthContext"

export const useLogin = () => {

    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)
    const { dispatch } = useAuthContext()


    const login = async (email, password) => {
        setError(null);
        setLoading(true)


        const response = await fetch('/Login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({email, password})
        })

        const data = await response.json()

        if (!response.ok)
        {
            setError(data.error)
            setLoading(false)
        }
        
        if (response.ok)
        {

            // Add to the localstorage
            localStorage.setItem('user', JSON.stringify(data))

            // update the auth context
            dispatch({ type: 'LOGIN', payload: data })
            }
    }

    return {error, loading, login}

} 