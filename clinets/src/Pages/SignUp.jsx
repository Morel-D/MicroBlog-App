import { useState } from "react";
import { Link } from "react-router-dom";
import { useSignup } from "../Hook/useSignup";
import user from "../Images/user.png"

const SignUp = () => {

    const [userName, setUserName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState();
    const { signUp, loading, error } = useSignup()
    

    const handleSubmit = async (e) => {
        e.preventDefault();

        signUp(userName, email, password);
    }


    return ( 
           <div className="Signup" id="auth">
           
           <div className="bg-white shadow-sm p-4" >
               <h4 className="text-center lead py-1">Welcome to <b id="title">ZONING</b> </h4>
           
                <form className="m-5" onSubmit={handleSubmit}>


                <div className="my-2 text-center">
                        <label htmlFor="profile" className="lead">
                            <img src={user} className="img-fluid" id="user" />
                            <span id="plus" class="position-absolute translate-middle badge rounded-5" >
                            +    
                            </span>
                       </label>
                       <input type="file" hidden className="form-control" id="profile"/>
                   </div>    

                    
                <div className="my-2">
                       <label className="lead">UserName</label>
                        <input type="text" className="form-control"
                            value={userName}
                            onChange={ (e) => { setUserName(e.target.value) } }
                        />
                   </div>

                   <div className="my-2">
                   <label className="lead">Email</label>
                        <input type="email" className="form-control"
                            value={email}
                            onChange ={ (e) => { setEmail(e.target.value) } }    
                        />
                   </div>
           
                   <div className="my-2">
                   <label className="lead">Password</label>
                        <input type="Password" className="form-control"
                            value={password}
                            onChange={(e) => { setPassword(e.target.value) } }
                        />
                   </div>
           
                   <div className="my-2">
                       <button className="btn form-control text-white" id="logBtn">SignUp</button>
                   </div>
           
                   <div className="my-1">
                       
                           <Link to="/Login" id="url">
                                Already have an account ?
                           </Link>
                      
                   </div>
           
                   {/* error */}
                    {error && <div className="my-5 form-control text-danger text-center" id="box"><i class="bi bi-exclamation-circle text-danger"></i>  { error }</div>   }
           
               </form>
           </div>
           </div>
     );
}
 
export default SignUp;