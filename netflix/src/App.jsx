import Home from "./pages/home/Home";
import "./app.scss";

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login/Login";
import  Watch  from "./pages/watch/Watch";
import Register from "./pages/register/Register"

function App() {
  const user=true
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={ user? <Home />:<Navigate to="/register"/>}>
         
        </Route>
      {user&&
        
        <>
         <Route path="/movie" element={ <Home type="movie"/>}>
         
         </Route>
      
         <Route path="/series" element={ <Home type="series"/>}>
          
         </Route>
         <Route path="/watch" element={ <Watch />}>
          
         </Route>
        
        </>
        }
       
        <Route path="/login" element={ <Login />}>
         
        </Route>
        <Route path="/register" element={!user? <Register />:<Navigate to="/"/>}>
         
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
