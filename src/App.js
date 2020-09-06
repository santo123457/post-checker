import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import './App.css';
import Home from './Component/Home/Home';
import NotFound from "./Component/NotFound/NotFound";
import Post from "./Component/Post/Post";

function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
         <Route path="/Home">
         <Home></Home>
         </Route>
         
         <Route path="/post/:id">
           <Post></Post>
         </Route>
         <Route exact path="/">
         <Home></Home>
         </Route>
         <Route path="*">
        <NotFound></NotFound>
        </Route>
       </Switch>
       </Router> 
  
    </div>
  );
}

export default App;
