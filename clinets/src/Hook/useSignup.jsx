const { useState, useContext } = require("react");
const { useAuthContext } = require("./useAuthContext");


export const useSignup = () => 
    
{
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState(null)
    const { dispatch } = useAuthContext();
    

    const signUp = async (userName, email, password) => {
    
        setLoading(true)
        setError(false)

        const response = await fetch('/Signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userName, email, password })
        })

        const data = await response.json();
        
        if (!response.ok)
        {
            setLoading(false)
            setError(data.error)
        }
        
        if (response.ok)
        {
        // save data to local storage
            localStorage.setItem('user', JSON.stringify(data))

        // update the auth context
            dispatch({ type: 'LOGIN', payload: data })
        }
        
    }

    return { signUp, loading, error }

    }


