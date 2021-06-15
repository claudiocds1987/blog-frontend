import './App.css';
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Create from "./components/blog/create/Create";
import Edit from "./components/blog/edit/Edit";
import Detail from "./components/blog/detail/Detail";
import Footer from "./components/footer/Footer";
// npm install react-router-dom
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <div className="box"> 
        
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/home" component={Home}></Route>
        <Route exact path="/create" component={Create}></Route>
        <Route exact path="/edit/:id" component={Edit}></Route>
        <Route exact path="/detail/:id" component={Detail}></Route>
        
      </div>
      <Footer />
    </Router>
   
  );
}

export default App;
