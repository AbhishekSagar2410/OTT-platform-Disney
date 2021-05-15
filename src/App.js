import React from 'react'
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom'
import LoginPage from '../src/Components/LoginPage';
import Home from '../src/Components/Home';
import DetailPage from './Components/DetailPage'

const App = () => {
  return (
   
      <Router>
        <Switch>
          <Route exact path='/' component={LoginPage}/>
          <Route path='/home' component={Home} />
          <Route path='/detail/:imgNo' component={DetailPage} />
        </Switch>
      </Router>
  )
}

export default App
