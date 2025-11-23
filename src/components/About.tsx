import 'flag-icons/css/flag-icons.min.css';
import TranslateIcon from '@mui/icons-material/Translate';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  const languages = t("about.languages.items", { returnObjects: true }) as { code: string; name: string; level: string }[];
  const hobbies = t("about.hobbies.items", { returnObjects: true }) as string[];

  return (
    <div id="about">
      <div className="items-container">
        <div>
          <h1>{t("about.title")}</h1>

          <div>
            <h2>{t("about.languages.title")}</h2>
            <ul>
              {languages.map((lang, index) => (
                <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span className={`fi fi-${lang.code}`} />
                  <span>{`${lang.name} : ${lang.level}`}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2>{t("about.hobbies.title")}</h2>
            <span>
            <ul>
              {hobbies.map((hobby) => (
                <li
                  key={hobby}
                  style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                >
                  <TranslateIcon />
                  {hobby}
                </li>
              ))}
            </ul>
            </span>

          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
