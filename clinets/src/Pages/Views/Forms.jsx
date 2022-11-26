import { useState } from "react";
import { json, useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar";

const Forms = () => {

    

    const [bloggerName, setBlogName] = useState('');
    const [text, setText] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();



    const handleSubmit = (e) => {

        e.preventDefault();
        const blogs = { bloggerName, text };

        fetch('/blogs', {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(blogs)
        }).then((data) => {
            data.json()

            if (!data.ok)
            {
                setError(data.error)
            }
            if (data.ok) {
                setBlogName('');
                setText('')
                setError(null);
                navigate('/')
            }
        })
    }

    return ( 
        <div>
            <Navbar />

            <div className="container px-5 py-3 col-7">
                
                <div className="card p-4">
                    <h3 className="px-4 mt-3" id="title">Let's Blog !</h3>
                    <hr className="mx-4" />

                    <form onSubmit={handleSubmit}>
                        <div className="p-2">
                            <label className="lead">Blogger Name</label>
                            <input type="text" className="form-control"
                                value={bloggerName}
                                onChange={(e) => { setBlogName(e.target.value) } }
                            />
                        </div>

                        <div className="p-2">
                            <label className="lead"></label>
                            <textarea className="form-control" placeholder="What's up ?" cols="30" rows="7"
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