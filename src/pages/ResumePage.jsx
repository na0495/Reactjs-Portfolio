
import Particles from '../components/Animation/Particles'
import Work from '../components/home/Work';
import Studys from '../components/home/Studys';
import Footer from '../layouts/Footer';

export default function Resume() {

    return (
        <>
          <Particles>
            <Work/>
            <Studys/>
          </Particles>
          <Footer />
        </>
    )

}