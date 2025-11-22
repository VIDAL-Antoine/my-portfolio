import jlptexplorer from '../assets/images/jlptexplorer-preview.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projets personnels</h1>
        <div className="projects-grid">
            <div className="project">
                <img src={jlptexplorer} className="zoom" alt="thumbnail" width="100%"/>
                <h2>JLPT Explorer</h2>
                <p>Site web pour apprendre le japonais. Application full-stack : interface en <strong>React</strong> et API REST via <strong>Node.js</strong> connectée à une base MongoDB.</p>
            </div>
            <div className="project">
                <a href="https://www.example.com" target="_blank" rel="noreferrer"><img src={jlptexplorer} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.example.com" target="_blank" rel="noreferrer"><h2>Mon site portfolio</h2></a>
                <p>Le site où vous êtes actuellement. Développé avec <strong>React</strong>.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;