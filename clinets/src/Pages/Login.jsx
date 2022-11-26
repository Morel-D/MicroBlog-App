import { Link } from "react-router-dom";

const Login = () => {
    return ( 
        <div className="Login" id="auth">

            <div className="bg-white shadow-sm p-5" >
                <h4 className="text-center lead py-2">Login to <b id="title">ZONING</b> </h4>

                <form className="m-5">
                    <div className="my-2">
                        <label htmlFor="">Email</label>
                        <input type="email" className="form-control"/>
                    </div>

                    <div className="my-2">
                        <label htmlFor="">Password</label>
                        <input type="Password" className="form-control"/>
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
                    {/* <div className="my-5 form-control"> h</div> */}

                </form>
            </div>
        </div>
     );
}
 
export default Login;