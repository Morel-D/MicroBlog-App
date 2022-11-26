import Navbar from "../../Components/Navbar";
import Photo1 from "../../Images/Photo2.png"
import Photo3 from "../../Images/Photo3.png"
import Panel from "../../Components/Panel";
import { useState } from "react";
import MyBlogs from "../../Components/myBlogs";
import { useEffect } from "react";

const Private = () => {


    const [blogs, setBlog] = useState();


    useEffect(() => {

        fetch('/blogs')
            .then((resource) => {
                if (!resource.ok)
                {
                    throw Error('Something is wrong')
                }
                return resource.json()
            }).then((data) => {
            setBlog(data)
            }).catch((error) => {
            console.log(error)
        })

    }, ['/blogs'])


    return ( 
        <div>
            <Navbar />

            
            <div className="container py-5">
                <div className="row">
                    {/* post  */}
                    <div className="col col-8">
                        <div className="content bg-white p-5 shadow-sm bg-body">
                            <div className="row">
                                <div className="col"><h3 id="title">My Blogs</h3></div>
                                <div className="col"> <input type="text" placeholder="Search Post" className="form-control" /> </div>
                            </div>
                            <hr />
                         
                            {blogs && blogs.map((blog) => (<MyBlogs  key={blog._id} blog={blog} />) )  }
                            
                        </div>
                    </div>

                    {/* users  */}
                    <div className="col">
                        <Panel />
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Private;