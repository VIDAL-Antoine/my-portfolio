import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Education.scss';
import { Chip, ChipProps } from '@mui/material';
import { useTranslation } from 'react-i18next';

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

type EducationItem = {
  key: string;
  title: string;
  school: string;
  labels: string[];
  date: string;
};

const Education = () => {
  const { t } = useTranslation();

  const raw = t('education.items', { returnObjects: true });
  const educationItems: EducationItem[] = Array.isArray(raw) ? raw : [];

  return (
    <div id="education">
      <div className="items-container">
        <h1>{t('education.title')}</h1>
        <VerticalTimeline>
          {educationItems.map((edu) => (
            <VerticalTimelineElement
              key={edu.key}
              date={edu.date}
              iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
              icon={<FontAwesomeIcon icon={faBriefcase} />}
            >
              <h3>{edu.title}</h3>
              <h4>{edu.school}</h4>

              <div style={{ marginTop: '8px' }}>
                {edu.labels.map((label) => (
                  <EducationChip key={label} label={label} />
                ))}
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Education;
