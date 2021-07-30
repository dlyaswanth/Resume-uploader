import React from 'react';
import {Route,Switch,BrowserRouter} from 'react-router-dom'
import Home from './screens/Home';
import Resume from './screens/Resume'
import './App.css';
function App() {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path='/'><Home/></Route>
        <Route  path='/upload-resume'><Resume/></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
