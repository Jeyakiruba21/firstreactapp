import Home from './Pages/Home';
import './App.css';
import './Pages/About';
import './Pages/LoginPage';
import About from './Pages/About';
import LoginPage from './Pages/LoginPage';
import {Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
  <Route exact path="/" component={Home}/>
  <Route exact path="/Login" component={LoginPage}/>
  <Route exact path="/About" component={About}/>
    </div>
  );
}

export default App;
