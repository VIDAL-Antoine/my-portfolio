import 'flag-icons/css/flag-icons.min.css';
import TranslateIcon from '@mui/icons-material/Translate';

interface AboutProps { lang: 'fr' | 'en' }

const About = ({ lang }: AboutProps) => {
  return (
    <div id="about">
      <div className="items-container">
        <div>
          <h1>À propos</h1>

          <div>
            <h2>Langues parlées</h2>
            <ul>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span className="fi fi-gb" /> <span>Anglais : B2 (TOEIC 2022 : 925/990)</span></li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span className="fi fi-jp" /> <span>Japonais : B1</span></li>
            </ul>
          </div>

          <div>
            <h2>Hobbies</h2>
            <ul>
              <span>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <TranslateIcon />
                Apprentissage de la langue japonaise
              </li>
              </span>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;