import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DescriptionIcon from '@mui/icons-material/Description';
import '../assets/styles/Footer.scss'
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <div>
        <a href="mailto:avidal78390@gmail.com" target="_blank" rel="noreferrer"><EmailIcon/></a>
        <a href="https://github.com/VIDAL-Antoine" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/antoine-vidal-40419822a/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <a
          href={t("footer.cv_download_link")}
          target="_blank"
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <DescriptionIcon />
          {t("footer.cv_download_text")}
        </a>
      </div>
    </footer>
  );
}

export default Footer;
