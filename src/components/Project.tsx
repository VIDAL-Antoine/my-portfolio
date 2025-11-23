import jlptexplorer from '../assets/images/jlptexplorer-preview.png';
import myportfoliopreview from '../assets/images/my-portfolio-preview.png';
import '../assets/styles/Project.scss';
import { useTranslation } from 'react-i18next';

const Project = () => {
    const { t } = useTranslation();

    const projects = t("projects.items", { returnObjects: true }) as {
        title: string;
        description: string;
        image: string;
        link?: string;
    }[];

    return(
    <div className="projects-container" id="projects">
        <h1>{t("projects.title")}</h1>
        <div className="projects-grid">
            {projects.map((project, index) => (
                <div className="project" key={index}>
                    {project.link ? (
                        <a href={project.link} target="_blank" rel="noreferrer">
                            <img src={project.image} className="zoom" alt="thumbnail" width="100%" />
                        </a>
                    ) : (
                        <img src={project.image} className="zoom" alt="thumbnail" width="100%" />
                    )}
                    {project.link ? (
                        <a href={project.link} target="_blank" rel="noreferrer">
                            <h2>{project.title}</h2>
                        </a>
                    ) : (
                        <h2>{project.title}</h2>
                    )}
                    <p dangerouslySetInnerHTML={{ __html: project.description }} />
                </div>
            ))}
        </div>
    </div>
    );
}

export default Project;
