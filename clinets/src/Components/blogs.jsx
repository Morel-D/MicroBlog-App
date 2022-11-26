import Photo1 from "../Images/Photo2.png"
import { formatDistanceToNow} from "date-fns"

const Blogs = ({ blog }) => {
    return ( 
        <div className="post">

        <div className="Header">

            <label className="">
                <img src={Photo1} className="img-fluid" id="user" />
                <b className="mx-4" id="bold">{blog.bloggerName}</b>
            </label>                   


        </div>
            
        <div className="body">
            <div className="text py-1 text-secondary">
               {blog.text}
            </div>       
        </div>    
            
            <div className="footer my-2">
                <div className="row">
                    <div className="col">
                        <label className="">
                            <i className="bi bi-chat-dots"></i>
                            <label className="mx-2"></label> 
                        </label>
                        | 
                        <label className="text-secondary mx-2">
                             {formatDistanceToNow(new Date(blog.createdAt), {addSuffix: true})}
                        </label>
                    </div>
                </div>
        </div>    

        <hr className="py-1" />
        </div>
        
        
     );
}
 
export default Blogs;