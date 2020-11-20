import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Datacenter} from './Datacenter/Datacenter';
import Navbar from './Components/Navbar/Navbar';
import Addnew from './Components/Products/Addnew';
import Products from './Components/Products/Products';
import AddCard from './Components/Addtocard/AddCard';
import Details from './Components/Details/Details';
import Update from './Components/Update/Update';




function App() {
  return (
    <div className="App">
      <Datacenter>
        <Router>
        <Navbar/>

            <Switch>

              <Route exact path='/' component={Products}/>
              <Route exact path='/Addnew' component={Addnew}/>
              <Route exact path='/AddToCard' component={AddCard}/>
              <Route exact path='/details/:id' component={Details}/>
              <Route exact path='/update/:id' component={Update}/>




          
            </Switch>
        </Router>
      </Datacenter>
    </div>
  );
}

export default App;