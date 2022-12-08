import { useState } from "react";
import { json, useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import { useAuthContext } from "../../Hook/useAuthContext";

const Forms = () => {

    

    // const [bloggerName, setBlogName] = useState('');
    const [text, setText] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { user } = useAuthContext();



    const handleSubmit = (e) => {

        const bloggerName = document.getElementById('dataName').value;
        
        const profile = document.getElementById('profile').value;
    
        e.preventDefault();
        const blogs = { bloggerName, text, profile };

        if (!user)
        {
            setError("You Must login")
            return
        }
        


        fetch('/blogs', {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${user.token}`
            },
            body: JSON.stringify(blogs)
        }).then((data) => {
            data.json()

            if (!data.ok)
            {
                setError(data.error)
            }
            if (data.ok) {
                // setBlogName('');
                setText('')
                setError(null);
                navigate('/')
            }
        })

        console.log(bloggerName);
    }

    return ( 
        <div>
            <Navbar />

            <div className="container px-5 py-3 col-7">
                
                <div className="card p-4">
                    <h3 className="px-4 mt-3" id="title">Let's Blog !</h3>
                    <hr className="mx-4" />

                    <form onSubmit={handleSubmit}>

                        <input type="text" hidden value= {user.profile} id="profile"/>

                        <div className="">
                            {/* <label className="lead">Blogger Name</label> */}
                            <input type="text" className="form-control"
                                disabled
                                hidden
                                value={user.userName}
                                // onChange={(e) => { setBlogName(e.target.value) } }
                                id = "dataName"
                            />
                        </div>

                        <div className="p-2">
                            <label className="lead"></label>
                            <textarea className="form-control" placeholder="What's up ?" cols="30" rows="10"
                                value={text}
                                onChange={ (e) => {setText(e.target.value) } }
                            ></textarea>
                        </div>

                        <div className="p-2">
                           <button  className="btn form-control text-white" type="submit" id="submit">Post</button>
                        </div>

                        <div className="p-2">
                            {error && <div id="box" className="card text-danger p-2 text-center ">{ error }</div>  }
                        </div>
                    </form>
               </div>
            </div>
        </div>
     );
}
 
export default Forms;