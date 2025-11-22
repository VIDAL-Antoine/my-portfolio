import 'flag-icons/css/flag-icons.min.css';
import TranslateIcon from '@mui/icons-material/Translate';

function About() {
  return (
    <div id="about">
      <div className="items-container">
        <div>
          <h1>À propos</h1>

          <div>
            <h2>Langues parlées</h2>
            <ul>
              <span><li><span className="fi fi-gb" /> Anglais : B2 (TOEIC 2022 : 925/990)</li></span>
              <span><li><span className="fi fi-jp" /> Japonais : B1</li></span>
            </ul>
          </div>

          <div>
            <h2>Hobbies</h2>
            <ul>
              <span><li><TranslateIcon /> Apprentissage de la langue japonaise</li></span>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;