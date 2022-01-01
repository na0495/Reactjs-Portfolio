import React, { Fragment } from 'react';
// hooks
import ScrollToTop from './hooks/useScrollTop';
// layouts
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
// routes
import MainRouter from './routes/index';
import { BrowserRouter as Router } from "react-router-dom";
import { BoxLoader } from './components/Animation/BoxLoader';

function App() {
  // display BoxLoader when loading
  const [loading, setLoading] = React.useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 4000);
  return (
    <BoxLoader show={loading} >
      <Router>
        <Fragment>
          <ScrollToTop />
          <Navbar/>
          <MainRouter/>
          <Footer/>
        </Fragment>
      </Router>
    </BoxLoader>
  );
}

export default App;


