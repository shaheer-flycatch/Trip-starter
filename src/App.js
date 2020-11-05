import React from 'react';
import {
 BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import ShowTripDetails from './pages/ShowTripDetails';
import './App.css';
function App() {
  const routes = [{
    path: '/',
    component:ShowTripDetails ,
  },
]
  return (
    <div >
      <header className="App-header"> 
   <Router>
   <Switch>
        {routes.map(({ path, component }, index) => (
          <Route exact path={path} component={component} key={index} />
        ))}

      </Switch>
   </Router>
     
      </header>

 </div>
  );
}

export default App;
