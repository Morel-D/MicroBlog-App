import { useState } from "react";
import { Link } from "react-router-dom";
import { useSignup } from "../Hook/useSignup";
import user from "../Images/user.png";
import FileBase64 from "react-file-base64";

const SignUp = () => {

    // Declarations

    const [userName, setUserName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState();
    const { signUp, loading, error } = useSignup();

    // Image Upload
    const [image, setImage] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);
    const [uploadImage, setUploadImage] = useState(false);




    // Events



    // Image Validation
    const validatImage = (e) => 
    {
        const file = e.target.files[0];
        
        if (file >= 1048576)
        {
            alert('Image is too big')
        }
        setImage(file);
        setPreviewImage(URL.createObjectURL(file));
    }
    

    // Upload Image
    const upLoadingImage = async () => {

        const data = new FormData()
        data.append('file', image);
        data.append("upload_preset", "qwto4hhd");

        try {
            setUploadImage(true);
            const res = await fetch("https://api.cloudinary.com/v1_1/dfyvcsgga/image/upload", {
                method: 'post',
                body: data
            });
            const urlData = await res.json();
            setUploadImage(false);
            return urlData.url;
        } catch (error)
        {
            console.log(error.message)
        }
    }




    // Hit on the submit btn 
    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = await upLoadingImage(image);
        signUp(userName, email, password, url);
    }


    return ( 
           <div className="Signup" id="auth">
           
           <div className="bg-white shadow-sm p-4" >
               <h4 className="text-center lead py-1">Welcome to <b id="title">ZONING</b> </h4>
           
                <form className="m-5" onSubmit={handleSubmit}>


                <div className="my-2 text-center">
                        <label htmlFor="profile" className="lead">
                            <img src={previewImage ||user} className="img-fluid" id="user" />
                            <span id="plus" class="position-absolute translate-middle badge rounded-5" >
                            +    
                            </span>
                            <input type="file" hidden accept="image/png, image/jpeg"  id="profile" onChange={validatImage}/>
                       </label>
                       
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