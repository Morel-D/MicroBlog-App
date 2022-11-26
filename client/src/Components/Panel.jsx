import Photo4 from "../Images/photo4.jpg"
import Photo2 from "../Images/Photo2.png"

const Panel = () => {
    return ( 
        <div className="suggestion panel float-end">
            <div className="content bg-white p-5 shadow-sm bg-body">
                            <h4 id="title">Friends Suggestions</h4>
                            <hr />
                            <ul className="list">
                                <li className="list-group-item"> <img src={Photo4} className="img-fluid rounded-5" id="user2" /> <label className=" ">Pete Jake</label> <button className="btn p-1 mb-2 text-warning text-end">Follow <i className="bi bi-plus text-warning"></i></button> </li>
                                <li className="list-group-item"> <img src={Photo2} className="img-fluid rounded-5" id="user2"/> <label className="m">Jannet Wilbro</label> <button className="btn p-1 mb-2 text-warning text-end">Follow <i className="bi bi-plus text-warning"></i></button> </li>
                                
                            </ul>
            </div>
        </div>
     );
}
 
export default Panel;