import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import { useTranslation } from "react-i18next";
import profileImage from "../assets/images/profile.jpg";

const Main = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <div className="presentation-section">
        <div className="image-wrapper">
          <img src={profileImage} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="mailto:avidal78390@gmail.com" target="_blank" rel="noreferrer"><EmailIcon/></a>
            <a href="https://github.com/VIDAL-Antoine" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/antoine-vidal-40419822a/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>VIDAL Antoine</h1>
          <p>{t("main.job")}</p>

          <div className="mobile_social_icons">
            <a href="mailto:avidal78390@gmail.com" target="_blank" rel="noreferrer"><EmailIcon/></a>
            <a href="https://github.com/VIDAL-Antoine" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/antoine-vidal-40419822a/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;