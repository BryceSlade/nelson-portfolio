import Project from '../project/Project';
import './projects.css';
import { projects } from '../../data';

const Projects = () => {
    return (
        <section id='projects'>
            <div className='pl'>
                <div className="pl-texts">
                    <h1 className='pl-title'>Projects</h1>
                    <p className='pl-desc'>Take a look at some of the projects I've worked on. More to come!</p>
                </div>
                <div className="pl-list">
                    {projects.map(item => (
                        <Project key={item.id} img={item.img} link={item.link}/>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;