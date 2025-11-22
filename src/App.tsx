import {useState, useEffect} from "react";
import {
  Main,
  Career,
  Education,
//   Expertise,
  Project,
  About,
  Navigation,
  Footer,
} from "./components";
import FadeIn from './components/FadeIn';
import './index.scss';

function App() {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
    <div className={'main-container'}>
        <Navigation />
        <FadeIn transitionDuration={700}>
            <Main/>
            {/* <Expertise/> */}
            <Career/>
            <Education/>
            <Project/>
            <About/>
        </FadeIn>
        <Footer />
    </div>
    );
}

export default App;