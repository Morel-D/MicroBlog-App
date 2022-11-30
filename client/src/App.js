import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"; 
import { useAuthContext } from "./Hook/useAuthContext";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Forms from "./Pages/Views/Forms";
import Private from "./Pages/Views/Private";
import Public from "./Pages/Views/Public";


function App() {


  const { user } = useAuthContext();

  return (
    <BrowserRouter>
      <div className="App">

        <div className="Content">

          <Routes>
            <Route path="/Private" element={user ? <Private /> : <Navigate to="/Login" />} />
            <Route path="/" element={user ? <Public /> :  <Navigate to="/Login" />} />
            <Route path="/Login" element={!user ? <Login /> : <Navigate to="/" />} />
            <Route path="/SignUp" element={!user ? <SignUp /> : <Navigate to="/" />} />
            <Route path="/Forms" element={user ? <Forms /> : <Navigate to="/Login" />} />
          </Routes>
        </div>

    </div>
    </BrowserRouter>
  );
}

export default App;
