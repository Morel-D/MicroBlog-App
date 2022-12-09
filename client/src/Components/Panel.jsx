import { useEffect } from "react";
import { useState } from "react";
import { useAuthContext } from "../Hook/useAuthContext";
import Photo4 from "../Images/photo4.jpg"

const Panel = () => {

    const [users, setUsers] = useState();
    const { user } = useAuthContext();

    useEffect(() => {

        const displayUsers = () => {

            fetch('/Users')
                .then((response) => {
                    if (!response)
                    {
                        throw Error('Something is wrong')
                    }

                    return response.json()
                }).then((data) => {
                    setUsers(data);
                }).catch((error) => {
                    console.log(error);
            })

        }

        displayUsers();

    }, ['/Users'])

    return ( 
        <div className="suggestion panel float-end">
            <div className="content bg-white p-5 shadow-sm bg-body">
                            <h4 id="title">Friends Suggestions</h4>
                            <hr />
                            <ul className="list">
                                 {users && users.map((user) => (
                                     <li className="list-group-item py-1"> <img src={user.profile} className="img-fluid rounded-5" id="user2" /> <label className=" ">{user.userName}</label> <button className="btn p-1 mb-2 text-warning text-end">Follow <i className="bi bi-plus text-warning"></i></button> </li>
                               ))  }
                            </ul>
            </div>
        </div>
     );
}
 
export default Panel;