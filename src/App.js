// import SwitchMode from './layouts/SwitchMode'
import Navbar from './layouts/Navbar'
import LandingPage from './components/LandingPage'
import Skills from './components/Skills'
import Resumer from './components/Resumer'
// import Experience from './components/home/Experience'
import Footer from './components/home/Footer'
import ReactParticles from 'react-particles-js';
import particlesConfig from './components/Animation/particlesBg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// import AboutMe from './components/home/AboutMe';
// import GitStats from './components/home/GitStats';

function Particles({ children }) {
  return (
    <div style={{ position: 'relative' }}>
      <ReactParticles
        params={particlesConfig}
        style={{
          position: 'absolute',
          zIndex: 'auto',
          left: 0,
          right: 0,
          bottom: 0,
          top: 0
        }}
      />
      {children && <div style={{ position: 'relative' }}>{children}</div>}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Particles>
        <Navbar/>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/skills" component={Skills} />
            <Route exact path="/resumer" component={Resumer}/>
          </Switch> 
        <Footer/>
      </Particles>
    </Router>
  );
}



export default App;


