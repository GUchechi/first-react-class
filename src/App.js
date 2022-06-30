import './App.css';
import Homepage from './pages/Homepage';
import { Route, Switch, BrowserRouter} from 'react-router-dom'
import About from './pages/About';
import Contact from './pages/Contact';



function App() {

  return (
    <BrowserRouter>
      <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/About">
            <About />
          </Route>       
      </Switch>
    </BrowserRouter>
  );
}


export default App;
