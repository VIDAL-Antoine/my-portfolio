import { useEffect } from "react";
import {
  Main,
  Career,
  Education,
  // Expertise,
  Project,
  About,
  Navigation,
  Footer,
} from "./components";
import FadeIn from './components/FadeIn';
import './index.scss';

interface AppContentProps {
  lang: 'fr' | 'en';
}

export default function AppContent({ lang }: AppContentProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className={'main-container'}>
      <Navigation lang={lang} />
      <FadeIn transitionDuration={700}>
        <Main lang={lang}/>
        <Career lang={lang}/>
        <Education lang={lang}/>
        <Project lang={lang}/>
        <About lang={lang}/>
      </FadeIn>
      <Footer lang={lang}/>
    </div>
  );
}
