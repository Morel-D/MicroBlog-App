import Navbar from "../../Components/Navbar";
import Photo1 from "../../Images/Photo2.png"
import Photo3 from "../../Images/Photo3.png"
import Panel from "../../Components/Panel";
import { useEffect, useState } from "react";
import Blogs from "../../Components/blogs";
import { useAuthContext } from "../../Hook/useAuthContext";

const Public = () => {

    const [myblogs, setBlog] = useState();
    const  { user } = useAuthContext()

    useEffect(() => {

    
        const fetchRequest = () => 
        {
            fetch('/blogs',
            {
                headers: { 'Authorization': `Bearer ${user.token}` }
            }
        )
            .then((resource) => {
                if (!resource)
                {
                    throw Error("Something is wrong")
                }
                return resource.json()
            }).then((data) => {
            setBlog(data)
            }).catch((error) => {
            console.log(error)
        })
        }
        

        if (user)
        {
            fetchRequest()
            }


    }, ['/blogs', user])



    return ( 
        <div>
            <Navbar />


            <div className="container py-5">
                <div className="row">
                    {/* post  */}
                    <div className="col col-8">
                        <div className="content bg-white p-5 shadow-sm bg-body">
                            <div className="row">
                                <div className="col"><h3 id="title">Blog Post</h3></div>
                                <div className="col"> <input type="text" placeholder="Search Post" className="form-control" /> </div>
                            </div>
                            <hr />
                             
                            {myblogs && myblogs.map((blog) => ( <Blogs key={blog._id} blog ={blog} /> ))}

                           {!user && <div className="text-center"><h2 id="warn">Authorization Token Needed</h2></div>  }

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
 
export default Public;