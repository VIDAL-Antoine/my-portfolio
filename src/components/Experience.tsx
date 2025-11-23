import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { Chip, ChipProps } from '@mui/material';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Experience.scss';
import { useTranslation } from 'react-i18next';

type ExperienceItem = {
  key: string;
  job: string;
  company_location: string;
  date: string;
  summary: string;
  descriptions: string[];
  labels: string[];
  highlightLabels?: string[];
};

type ExperienceChipProps = ChipProps & { highlight?: boolean };

const ExperienceChip = ({ highlight, ...props }: ExperienceChipProps) => (
  <Chip
    {...props}
    sx={{
      margin: '4px',
      '& .MuiChip-label': { fontFamily: '"Lato", sans-serif' },
      ...(highlight ? { backgroundColor: "#42b883", color: "white", fontWeight: "bold" } : {}),
      ...props.sx
    }}
  />
);


const TimelineElement = ({ exp }: { exp: ExperienceItem }) => (
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
    contentArrowStyle={{ borderRight: '7px solid white' }}
    date={exp.date}
    iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
    icon={<FontAwesomeIcon icon={faBriefcase} />}
  >
    <h3>{exp.job}</h3>
    <h4>{exp.company_location}</h4>
    <p>{exp.summary}</p>
    <ul>
      {exp.descriptions.map((desc, i) => (
        <li key={i}><p>{desc}</p></li>
      ))}
    </ul>
    <div>
      {exp.labels.map((label) => (
        <ExperienceChip
          key={label}
          label={label}
          highlight={exp.highlightLabels?.includes(label)} />
      ))}
    </div>
  </VerticalTimelineElement>
);

const Experience = () => {
  const { t } = useTranslation();

  const experiences: ExperienceItem[] = t('experience.items', { returnObjects: true }) as ExperienceItem[];

  return (
    <div id="experience">
      <div className="items-container">
        <h1>{t("experience.title")}</h1>
        <VerticalTimeline>
          {experiences.map((exp) => (
            <TimelineElement key={exp.key} exp={exp} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;
