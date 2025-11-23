import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { Chip, ChipProps } from '@mui/material';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Career.scss';
import { useTranslation } from 'react-i18next';

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

const Career = () => {
  const { t } = useTranslation();

  return (
    <div id="career">
      <div className="items-container">
        <h1>{t("career.title")}</h1>

        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date={t("career.coda_portique.date")}
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3>{t("career.coda_portique.job")}</h3>
            <h4>{t("career.coda_portique.company_location")}</h4>
            <p>{t("career.coda_portique.summary")}</p>
            <ul>
              <li><p>{t("career.coda_portique.description_1")}</p></li>
              <li><p>{t("career.coda_portique.description_2")}</p></li>
              <li><p>{t("career.coda_portique.description_3")}</p></li>
              <li><p>{t("career.coda_portique.description_4")}</p></li>
            </ul>
            <div>
              {labelsPortique.map((label) => (
                <CareerChip
                  key={label}
                  label={label}
                  sx={
                    label === "Vue.js" ||
                    label === "Javascript" ||
                    label === "FastAPI" ||
                    label === "Python"
                      ? {
                          backgroundColor: "#42b883",
                          color: "white",
                          fontWeight: "bold",
                        }
                      : {}
                  }
                />
              ))}
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={t("career.c2t.date")}
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3>{t("career.c2t.job")}</h3>
            <h4>{t("career.c2t.company_location")}</h4>
            <p>{t("career.c2t.summary")}</p>
            <ul>
              <li><p>{t("career.c2t.description_1")}</p></li>
              <li><p>{t("career.c2t.description_2")}</p></li>
              <li><p>{t("career.c2t.description_3")}</p></li>
            </ul>
            <div>
              {labelsC2T.map((label) => (
                <CareerChip
                  key={label}
                  label={label}
                  sx={
                    label === "Python"
                      ? {
                          backgroundColor: "#42b883",
                          color: "white",
                          fontWeight: "bold",
                        }
                      : {}
                  }
                />
              ))}
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={t("career.qarnot.date")}
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3>{t("career.qarnot.job")}</h3>
            <h4>{t("career.qarnot.company_location")}</h4>
            <p>{t("career.qarnot.summary")}</p>
            <ul>
              <li><p>{t("career.qarnot.description_1")}</p></li>
              <li><p>{t("career.qarnot.description_2")}</p></li>
              <li><p>{t("career.qarnot.description_3")}</p></li>
              <li><p>{t("career.qarnot.description_4")}</p></li>
            </ul>
            <div>
              {labelsQarnot.map((label) => (
                <CareerChip
                  key={label}
                  label={label}
                  sx={
                    label === "Vue.js" ||
                    label === "Node.js" ||
                    label === "Javascript"
                      ? {
                          backgroundColor: "#42b883",
                          color: "white",
                          fontWeight: "bold",
                        }
                      : {}
                  }
                />
              ))}
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={t("career.stage_edf.date")}
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3>{t("career.stage_edf.job")}</h3>
            <h4>{t("career.stage_edf.company_location")}</h4>
            <p>{t("career.stage_edf.summary")}</p>
            <ul>
              <li><p>{t("career.stage_edf.description_1")}</p></li>
            </ul>
            <div>
              {labelsStageEDF.map((label) => (
                <CareerChip key={label} label={label} />
              ))}
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={t("career.stage_li_parad.date")}
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3>{t("career.stage_li_parad.job")}</h3>
            <h4>{t("career.stage_li_parad.company_location")}</h4>
            <p>{t("career.stage_li_parad.summary")}</p>
            <ul>
              <li><p>{t("career.stage_li_parad.description_1")}</p></li>
            </ul>
            <div>
              {labelsLIPaRAD.map((label) => (
                <CareerChip
                  key={label}
                  label={label}
                  sx={
                    label === "Python"
                      ? {
                          backgroundColor: "#42b883",
                          color: "white",
                          fontWeight: "bold",
                        }
                      : {}
                  }
                />
              ))}
            </div>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Career;
