import project1 from '../assets/projects/project-1.png'
import project2 from '../assets/projects/project-2.png'
import project3 from '../assets/projects/project-3.png'
import project4 from '../assets/projects/project-4.png'
import project5 from '../assets/projects/project-5.png'
import project6 from '../assets/projects/project-6.png'
const Projects = () => {
    return(
    <main className="main">
        <section className="projects section" id="projects">
            <h2 className="section__title">Projects</h2>

            <div className="projects__container container grid">

                <article className="projects__card">
                    <img src={project1} alt="" className="projects__img" />

                    <div className="projects__data">
                        <h3 className="projects__title">Travel Website</h3>
                        <p className="project__description">Creation, design and development of a website for a user.</p>
                        <div className="btnn">
                            <a href="" target="_blank" className="button button__ghost"><i className="ri-external-link-fill"></i><span>Liv</span></a>
                            <a href="" target="_blank" className="button button__ghost"><i className="ri-github-fill"></i><span>Code</span></a>
                        </div>
                        
                    </div>
                </article>

                <article className="projects__card">
                    <img src={project2} alt="" className="projects__img" />

                    <div className="projects__data">
                        <h3 className="projects__title">Gym Website</h3>
                        <p className="project__description">Creation, design and development of a website for a user.</p>
                        <div className="btnn">
                            <a href="" target="_blank" className="button button__ghost"><i className="ri-external-link-fill"></i><span>Liv</span></a>
                            <a href="" target="_blank" className="button button__ghost"><i className="ri-github-fill"></i><span>Code</span></a>
                        </div>                    
                    </div>
                </article>

                <article className="projects__card">
                    <img src={project3} alt="" className="projects__img" />

                    <div className="projects__data">
                        <h3 className="projects__title">Coffe Website</h3>
                        <p className="project__description">Creation, design and development of a website for a user.</p>
                        <div className="btnn">
                            <a href="" target="_blank" className="button button__ghost"><i className="ri-external-link-fill"></i><span>Liv</span></a>
                            <a href="" target="_blank" className="button button__ghost"><i className="ri-github-fill"></i><span>Code</span></a>
                        </div>                    
                    </div>
                </article>

                <article className="projects__card">
                    <img src={project4}    alt="" className="projects__img" />

                    <div className="projects__data">
                        <h3 className="projects__title">Business Design</h3>
                        <p className="project__description">Creation, design and development of a website for a user.</p>
                        <div className="btnn">
                            <a href="" target="_blank" className="button button__ghost"><i className="ri-external-link-fill"></i><span>Liv</span></a>
                            <a href="" target="_blank" className="button button__ghost"><i className="ri-github-fill"></i><span>Code</span></a>
                        </div>                   
                    </div>
                </article>

                <article className="projects__card">
                    <img src={project5} alt="" className="projects__img" />

                    <div className="projects__data">
                        <h3 className="projects__title">Food Design</h3>
                        <p className="project__description">Creation, design and development of a website for a user.</p>
                        <div className="btnn">
                            <a href="" target="_blank" className="button button__ghost"><i className="ri-external-link-fill"></i><span>Liv</span></a>
                            <a href="" target="_blank" className="button button__ghost"><i className="ri-github-fill"></i><span>Code</span></a>
                        </div>                    
                    </div>
                </article>

                <article className="projects__card">
                    <img src={project6} alt="" className="projects__img" />

                    <div className="projects__data">
                        <h3 className="projects__title">IA Website & Design</h3>
                        <p className="project__description">Creation, design and development of a website for a user.</p>
                        <div className="btnn">
                            <a href="" target="_blank" className="button button__ghost"><i className="ri-external-link-fill"></i><span>Liv</span></a>
                            <a href="" target="_blank" className="button button__ghost"><i className="ri-github-fill"></i><span>Code</span></a>
                        </div>       
                    </div>
                </article>

            </div>

        </section>
    </main>
    )
}

export default Projects