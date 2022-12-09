import Photo1 from "../Images/Photo2.png"
import { formatDistanceToNow} from "date-fns"

const Blogs = ({ blog }) => {
    return ( 
        <div className="post">

        <div className="Header">

            <label className="">
                <img src={blog.profile} className="img-fluid rounded" id="user" />
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
                        <button type="button" class="btn btn mb-1" data-bs-toggle="modal" data-bs-target="#exampleModal">
                         <i className="bi bi-chat-dots"></i>
                        </button>
                            
                        </label>
                        | 
                        <label className="text-secondary mx-2">
                             {formatDistanceToNow(new Date(blog.createdAt), {addSuffix: true})}
                        </label>
                    </div>
                </div>
            </div>    
            

            {/* <!-- Button trigger modal --> */}

            {/* <!-- Modal --> */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Comments : <small>Morel</small></h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    ...
                  </div>
                    <div class="container p-4">
                        <div className="row">
                            <div className="col col-7">
                                <textarea type="text" placeholder="Send a comment" className="form-control" />
                            </div>
                            <div className="col">
                               <button type="button" class="btn btn-secondary mx-2" data-bs-dismiss="modal">Close</button>
                               <button type="button" class="btn btn-primary">Add</button>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>

        <hr className="py-1" />
        </div>
        
        
     );
}
 
export default Blogs;