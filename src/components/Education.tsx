import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Education.scss'
import { Chip, ChipProps } from '@mui/material';

const labelsISTY = [
    "Programmation Orientée Objet",
    "C",
    "Linux",
    "Bases de données",
    "Systèmes d'exploitation",
    "Compilateurs",
    "Architecture des ordinateurs",
    "Algorithmique",
    "Architecture logicielle",
];

const labelsHPC = [
    "Big Data",
    "Parallélisme",
    "Multithreading",
];

const EducationChip = (props: ChipProps) => (
  <Chip
    {...props}
    sx={{
      margin: '4px',
      '& .MuiChip-label': { fontFamily: '"Lato", sans-serif' },
      ...props.sx
    }}
  />
);

interface EducationProps { lang: 'fr' | 'en' }

const Education = ({ lang }: EducationProps) => {
  return (
    <div id="education">
      <div className="items-container">
        <h1>Formation</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2018 - 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Ingénieur informatique</h3>
            <h4 className="vertical-timeline-element-subtitle">ISTY, UVSQ Paris-Saclay - Vélizy</h4>
            <div style={{ marginTop: '8px' }}>
              {labelsISTY.map((label) => (
                <EducationChip key={label} label={label} />
              ))}
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022-2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Master Calcul Haute Performance</h3>
            <h4 className="vertical-timeline-element-subtitle">LI-PaRAD, UVSQ Paris-Saclay - Guyancourt</h4>
            <div style={{ marginTop: '8px' }}>
              {labelsHPC.map((label) => (
                <EducationChip key={label} label={label} />
              ))}
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Education;