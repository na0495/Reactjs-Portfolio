import React from "react";
import SwitchMode from './layouts/SwitchMode'
import LandingPage from './components/LandingPage'
// import AboutMe from './components/AboutMe'
// import Skills from './components/Skills'
// import Resumer from './components/Resumer'
import Footer from './components/home/Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  // const [load, upadateLoad] = useState(true);
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     upadateLoad(false);
  //   }, 1200);
    
  //   return () => clearTimeout(timer);
  // }, []);
  return (
    <Router>
      <SwitchMode/>
        <Switch>
          <Route path="/" component={LandingPage} />
          {/* <Route exact path="/aboutme" component={AboutMe} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/resume" component={Resumer}/> */}
        </Switch> 
      <Footer/>
    </Router>
  );
}

export default App;


