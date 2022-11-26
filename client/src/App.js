import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Navbar from "./Components/Navbar";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Forms from "./Pages/Views/Forms";
import Private from "./Pages/Views/Private";
import Public from "./Pages/Views/Public";


function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <div className="Content">

          <Routes>
            <Route path="/Private" element={<Private />} />
            <Route path="/" element={<Public />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Forms" element={<Forms />} />
          </Routes>
        </div>

    </div>
    </BrowserRouter>
  );
}

export default App;
