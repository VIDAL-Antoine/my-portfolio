import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Education.scss'
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

const Education = () => {
  const { t } = useTranslation();

  const labelsISTY = t("education.isty.labels", { returnObjects: true }) as string[];
  const labelsHPC = t("education.hpc.labels", { returnObjects: true }) as string[];

  return (
    <div id="education">
      <div className="items-container">
        <h1>{t("education.title")}</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            date="2018 - 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3>{t("education.isty.title")}</h3>
            <h4>{t("education.isty.school")}</h4>

            <div style={{ marginTop: '8px' }}>
              {labelsISTY.map((label) => (
                <EducationChip key={label} label={label} />
              ))}
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            date="2022-2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3>{t("education.hpc.title")}</h3>
            <h4>{t("education.hpc.school")}</h4>

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