import ReactParticles from 'react-particles-js';
import particlesConfig from './particlesBg';

export default function Particles({ children }) {
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