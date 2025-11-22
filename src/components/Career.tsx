import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { Chip, ChipProps } from '@mui/material';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Career.scss'

const labelsPortique = [
    "Vue.js",
    "Javascript",
    "Ultralytics (YOLO)",
    "FastAPI",
    "SQLAlchemy",
    "Python",
    "PostgreSQL",
    "Linux",
    "Docker",
    "Bash",
    "Git",
    "Github",
    "Google Cloud Storage",
];

const labelsC2T = [
    "Python",
    "OpenCV",
    "PyQt6",
    "Vimba",
    "Linux",
    "Git",
    "Github",
];

const labelsQarnot = [
    "Vue.js",
    "Node.js",
    "Sequelize",
    "MariaDB",
    "Javascript",
    "Linux",
    "Docker",
    "Bash",
    "Git",
    "Gitlab",
];

const labelsStageEDF = [
    "HTML/CSS",
    "Julia",
    "Linux",
    "Bash",
    "Docker",
    "Git",
    "Github",
];

const labelsLIPaRAD = [
    "Python",
    "Scikit-learn",
    "NumPy",
    "Pandas",
    "Linux",
    "Bash",
];

const CareerChip = (props: ChipProps) => (
  <Chip
    {...props}
    sx={{
      margin: '4px',
      '& .MuiChip-label': { fontFamily: '"Lato", sans-serif' },
      ...props.sx
    }}
  />
);

interface CareerProps { lang: 'fr' | 'en' }

const Career = ({ lang }: CareerProps) => {
  return (
    <div id="career">
      <div className="items-container">
        <h1>Expériences professionnelles</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Septembre 2025 - Aujourd'hui"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Développeur fullstack</h3>
            <h4 className="vertical-timeline-element-subtitle">Coda Systèmes - Montrouge</h4>
            <p>Développement d'un portique autonome équipé de caméras et d'un écran, permettant de détecter en temps réel les Équipements de Protection Individuelle (EPI) portés par les utilisateurs grâce à un modèle d'IA embarqué :</p>
            <ul>
              <li><p>Entraînement d'un modèle d'IA (YOLO) pour la détection d'EPI (casque, gilet...)</p></li>
              <li><p>Intégration du modèle d'IA dans un portique physique : traitement vidéo en temps réel via les caméras et l'IA</p></li>
              <li><p>Développement d'une API assurant la communication entre l'IA et l'interface aﬃchant clairement les EPI détectés et manquants sur l'écran</p></li>
              <li><p>Mise en place d'une base de données pour l'historisation et le suivi des passages</p></li>
            </ul>
            <div>
              {labelsPortique.map((label) => (
                <CareerChip
                  key={label}
                  label={label}
                  sx={label === "Vue.js" || label === "Javascript" || label === "FastAPI" || label === "Python" ? {
                    backgroundColor: "#42b883",
                    color: "white",
                    fontWeight: "bold",
                  } : {}}
                />
              ))}
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Mai 2025 - Août 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Développeur fullstack</h3>
            <h4 className="vertical-timeline-element-subtitle">Coda Systèmes - Montrouge</h4>
            <p>Développement d'un logiciel d'analyse de vidéos à très haute vitesse (1000 fps) :</p>
            <ul>
              <li><p>Enregistrement de vidéos avec contrôle précis des paramètres de la caméra (résolution, fps, durée de la vidéo...)</p></li>
              <li><p>Lecture optimisée des vidéos enregistrées avec traitement frame par frame, permettant une analyse détaillée impossible avec des lecteurs classiques</p></li>
              <li><p>Développement d'outils de dessins et de suivi d'objets directement sur les vidéos</p></li>
            </ul>
            <div className="">
              {labelsC2T.map((label) => (
                <CareerChip
                  key={label}
                  label={label}
                  sx={label === "Python" ? {
                    backgroundColor: "#42b883",
                    color: "white",
                    fontWeight: "bold",
                  } : {}}
                />
              ))}
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Mars 2024 - Avril 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Développeur fullstack</h3>
            <h4 className="vertical-timeline-element-subtitle">Qarnot - Montrouge</h4>
            <p>Refonte du site stockant les données internes de l'entreprise :</p>
            <ul>
              <li><p>Création de pages et composants Vue.js (front-end), développement de l'API Node.js (back-end) et gestion des modèles Sequelize ainsi que de la base de données</p></li>
              <li><p>Conception et amélioration de composants UI (cards, listes, formulaires) pour améliorer l'ergonomie</p></li>
              <li><p>Correction de bugs et refactorisation de composants existants</p></li>
              <li><p>Collaboration avec l'équipe : code reviews GitLab, suivi de tickets Jira, contribution à la documentation technique</p></li>
            </ul>
            <div>
              {labelsQarnot.map((label) => (
                <CareerChip
                  key={label}
                  label={label}
                  sx={label === "Vue.js" || label === "Node.js" || label === "Javascript" ? {
                    backgroundColor: "#42b883",
                    color: "white",
                    fontWeight: "bold",
                  } : {}}
                />
              ))}
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Mai 2023 - Novembre 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Développeur de modèles de simulation sur le marché de l'électricité</h3>
            <h4 className="vertical-timeline-element-subtitle">EDF - Palaiseau</h4>
            <p>Stage de 5ème année :</p>
            <ul>
              <li><p>Conception d'un outil de simulation multi-agents pour étudier l'impact de facteurs socio-économiques (salaire, localisation...) sur l'adhésion des ménages aux oﬀres EDF</p></li>
            </ul>
            <div>
              {labelsStageEDF.map((label) => (
                <CareerChip key={label} label={label} />
              ))}
            </div>
          </VerticalTimelineElement>
                    <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Mai 2022 - Août 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Scientist - Analyse de disques durs</h3>
            <h4 className="vertical-timeline-element-subtitle">LI-PaRAD - Guyancourt</h4>
            <p>Stage de 4ème année :</p>
            <ul>
              <li><p>Développement de modèles de Machine Learning pour prédire et détecter les disques durs susceptibles de tomber en panne en fonction de caractéristiques telles que le fabricant, la capacité disponible, le nombre de lectures et d'écritures...</p></li>
            </ul>
            <div>
              {labelsLIPaRAD.map((label) => (
                <CareerChip
                  key={label}
                  label={label}
                  sx={label === "Python" ? {
                    backgroundColor: "#42b883",
                    color: "white",
                    fontWeight: "bold",
                  } : {}}
                />
              ))}
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Career;