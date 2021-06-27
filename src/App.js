import SwitchMode from './layouts/SwitchMode'
import Hero from './components/home/Hero'
import Experience from './components/home/Experience'
import Footer from './components/home/Footer'
import ReactParticles from 'react-particles-js';
import particlesConfig from './components/Animation/particlesBg';
import AboutMe from './components/home/AboutMe';
import GitStats from './components/home/GitStats';

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
    <>
      <SwitchMode/>
        <Particles>
          <Hero/>
          <AboutMe/>
          <GitStats/>
          <Experience/>
        </Particles>
      <Footer/>
    </>
  );
}



export default App;


