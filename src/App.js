
import { Redirect, Route, Switch } from 'react-router-dom';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"//bootstrape  use korar jonno npm install bootstrap@5.0.0-alpha3 or copy CDN link from bootstrape//
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle"//bootstrape use korar jonno npm install bootstrap@5.0.0-alpha3 or copy CDN link from bootstrape//
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/service" component={Service}></Route>
          <Route exact path="/contact" component={Contact}></Route>
          <Redirect to="/"></Redirect> //404 er poriborte//
        </Switch>
        <Footer></Footer>
    </>
  );
}

export default App;
