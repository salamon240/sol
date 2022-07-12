import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import New from "./pages/new/New";
import Single from "./pages/single/Single";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/">
            <Route index element={<Home />} />
            <Route exact path="/login" element={<Login />}/>
             <Route exact path="users" >
                  <Route index element={ <List />}/>
                   <Route exact path="new" element={ <New />}/>
                   <Route exact path=":userId" element={ <Single />}/>
  
              </Route>
             <Route exact path="products" >
                  <Route index element={ <List />}/>
                   <Route exact path="new" element={ <New />}/>
                   <Route exact path=":productId" element={ <Single />}/>
  
              </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
