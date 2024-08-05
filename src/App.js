import React from "react";
import { Route , BrowserRouter as Router ,Routes,Switch } from "react-router-dom";
import Nav from "./Components/Nav.js";
import Home from "./Components/pages/Home.js";
import About from "./Components/pages/About.js";
import Blog from "./Components/pages/Blog.js";
import Products from "./Components/pages/Products.js";
import Footer from "./Components/footer.js";
import User from './Components/user.js'
function App() {
  return (
    <Router>
    <Nav />
    <Routes>
     <Route exact path="/" Component={Home}/>
     <Route path="/Blog" Component={Blog}/>
     <Route path="/About" Component={About}/>
     <Route path="/Products" Component={Products}/>
     </Routes>
     <User />
     <Footer />
     </Router>
    
);
}

export default App;
