import { Link } from "react-router-dom";
import { useLogout } from "../Hook/useLogout";

const Navbar = () => {


  const { logout } = useLogout()

  const handleLogout = () =>
  {
    logout();
    }


    return ( 
        <div className="NavBar shadow-sm bg-body sticky-top">
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
    <h3 ><Link className="navbar-brand" to="/" id="title">ZONING</Link></h3>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mx-5">

        
                <li className="nav-item dropdown mx-1 mt-1">
                   <Link to="/Forms" className="btn btn-outline" id ="addBtn">Add Post</Link>
                </li>       
         <li className="nav-item dropdown mx-4">
            <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
               <i className="bi bi-bell"></i>
               <span class="position-absolute translate-middle badge rounded-pill bg-danger" >
               6    
               </span>
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Some Notifcations</a></li>
            </ul>
         </li>                   
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Shoto Todoroki
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="">View Profile</Link></li>
            <li><Link className="dropdown-item" to="/Private">My Blogs</Link></li>
            <li><button className="dropdown-item" onClick={handleLogout}>Logout</button></li>
          </ul>
        </li>
      </ul>

    </div>
  </div>
</nav>
        </div>
     );
}
 
export default Navbar;