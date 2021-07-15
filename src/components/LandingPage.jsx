import Hero from './home/Hero';
import AboutMe from './home/AboutMe';
import Particles from './Animation/Particles'
import Path from './home/Path';
import Tech from './home/Tech';
import GitStats from './home/GitStats';

export default function LandingPage() {
    return (
        <>
          <Particles>
            <Hero/>
            <AboutMe/>
            <Path/>
            <Tech/>
            <GitStats/>
          </Particles>
        </>
    )

}