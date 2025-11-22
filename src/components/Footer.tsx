import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DescriptionIcon from '@mui/icons-material/Description';
import '../assets/styles/Footer.scss'

interface FooterProps { lang: 'fr' | 'en' }

const Footer = ({ lang }: FooterProps) => {
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
          href="/CV_VIDAL_Antoine.pdf"
          target="_blank"
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <DescriptionIcon />
          Télécharger mon CV
        </a>
      </div>
    </footer>
  );
}

export default Footer;
