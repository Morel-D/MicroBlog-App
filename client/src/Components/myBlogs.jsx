import { formatDistanceToNow } from "date-fns";
import { useAuthContext } from "../Hook/useAuthContext";


const MyBlogs = ({ blog }) => {

    const { user } = useAuthContext();

    const handleDelete = () => {

        fetch('/blogs/'+blog._id, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${ user.token }`
            }
        }).then((data) => {
            data.json()
            if (data.ok)
            {
                window.location.reload(true)
                }
        })

    }


    return ( 
        <div className="post">
                                     
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
                             { formatDistanceToNow( new Date( blog.createdAt), { addSuffix: true } ) }
                        </label>
                    </div>

                    <div className="col text-end">
                    <button className="btn"><i className="bi bi-pencil  text-warning"></i></button>
                    <button type="submit" className="btn" onClick={handleDelete}><i className="bi bi-trash text-danger"></i></button>
                    </div>
                </div>
        </div>    
        <hr className="py-1" />
   </div>
     );
}
 
export default MyBlogs;