import { useState } from "react";
import { Link } from "react-router-dom";
import { useLogin } from "../Hook/useLogIn";

const Login = () => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const { error, loading, login } = useLogin()
    

    const handleLogin = (e) => {

        e.preventDefault()

        login(email, password)

    }

    return ( 
        <div className="Login" id="auth">

            <div className="bg-white shadow-sm p-5" >
                <h4 className="text-center lead py-2">Login to <b id="title">ZONING</b> </h4>

                <form className="m-5" onSubmit={handleLogin}>
                    <div className="my-2">
                        <label htmlFor="">Email</label>
                        <input type="email" className="form-control"
                            value={email}
                            onChange={ (e) => { setEmail(e.target.value) } }
                        />
                    </div>

                    <div className="my-2">
                        <label htmlFor="">Password</label>
                        <input type="Password" className="form-control"
                            value={password}
                            onChange={ (e) => { setPassword(e.target.value) } }
                        />
                    </div>

                    <div className="my-2">
                        <button className="btn form-control text-white" id="logBtn">Login</button>
                    </div>

                    <div className="my-1">
                        
                            <Link to="/SignUp" id="url">
                                 Don't have an account ?
                            </Link>
                       
                    </div>

                    {/* error */}
                    {error && <div className="my-5 form-control text-danger text-center" id="box"><i class="bi bi-exclamation-circle text-danger"></i> {error}</div>   }

                </form>
            </div>
        </div>
     );
}
 
export default Login;