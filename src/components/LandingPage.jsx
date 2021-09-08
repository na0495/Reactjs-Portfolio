import Hero from './home/Hero';
import AboutMe from './home/AboutMe';
import Particles from './Animation/Particles'
import Work from './home/Work';
import Studys from './home/Studys';
import Tech from './home/Tech';
// import GitStats from './home/GitStats';
import GitHub from './home/GitHub';

export default function LandingPage() {
    return (
        <>
          <Particles>
            <Hero/>
            <AboutMe/>
            <Work/>
            <Studys/>
            <Tech/>
            <GitHub/>
            {/* <GitStats/> */}
          </Particles>
        </>
    )

}