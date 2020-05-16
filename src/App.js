import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import injectContext from './store/appContext';
import Home from './views/home';
import NotFound from './views/notfound';
import Navbar from './components/navbar';
import Footer from './components/footer';

const App = props => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default injectContext(App)

