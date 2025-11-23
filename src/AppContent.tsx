import { useEffect } from "react";
import {
  Main,
  Experience,
  Education,
  // Expertise,
  Project,
  About,
  Navigation,
  Footer,
} from "./components";
import FadeIn from './components/FadeIn';
import './style.scss';
import i18n from "./i18n";

interface AppContentProps {
  lang: 'fr' | 'en';
}

export default function AppContent({ lang }: AppContentProps) {
  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className={'main-container'}>
      <Navigation />
      <FadeIn transitionDuration={700}>
        <Main />
        <Experience />
        <Education />
        <Project />
        <About />
      </FadeIn>
      <Footer />
    </div>
  );
}
