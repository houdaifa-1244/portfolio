import profile from '../assets/image/houdaifa__profile.png';
// import canva from '../assets/image/icons8-canva-48.png'

const About = () => {
    return(
    <main className="main">
        <section className="about section" id="about">
            <div className="about__container container grid">
                <div className="about__content">
                    <div className="about__data">
                        <h2 className="section__title about__titel">About Me</h2>

                        <p className="about__description">
                            I am a Full-Stack Developer specializing in creating 
                            modern, functional, and visually appealing websites. I combine 
                            creativity and functionality to transform ideas into intuitive 
                            interfaces, balancing design, usability, and quality code.
                        </p>

                        
                    </div>

        
                </div>

                <div className="about__image">
                    <img src={profile} alt="imag" className="about__img" />
                </div>
            </div>
        
        </section>
        
    </main>
    )
}

export default About