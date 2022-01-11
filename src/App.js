import React, { Fragment } from 'react';
// hooks
import ScrollToTop from './hooks/useScrollTop';
// layouts
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
// routes
import MainRouter from './routes/index';
import { BrowserRouter as Router } from "react-router-dom";

function App() {

  return (
    <Router>
      <Fragment>
        <ScrollToTop />
        <Navbar/>
        <MainRouter/>
        <Footer/>
      </Fragment>
    </Router>
  );
}

export default App;


