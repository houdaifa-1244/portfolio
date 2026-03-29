import { useEffect, useRef } from 'react';
import profile from '../assets/image/houdaifa__profile.png'
import profile2 from '../assets/image/prf.png'
import cv from '../assets/pdf/HOUDAIFA_MOUDEN_CV.pdf'
import Typed from 'typed.js';
import { Link } from 'react-router-dom';

const Home = () => {

    const typedRef = useRef(null);

    useEffect(() => {
        const typed = new Typed(typedRef.current, {
        strings: ['Web Developer', 'Full-Stack Developer', 'App Desktop Developer'],
        typeSpeed: 80,
        backSpeed: 40,
        backDelay: 2000,
        loop: true,
        cursorChar: '|',
        });

        return () => {
        typed.destroy();
        };
    }, []);

    return(
    <main className="main">
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__content">
                    <div className="home__image">
                        <img src={profile} alt="image" className="home__img" id="img_profile" />
                    </div>

                    <div className="home__socail">
                        <a href="https://www.linkedin.com/in/houdaifa-mouden-126185236/" target="_blank" className="home__link">
                            <i className="ri-linkedin-box-fill"></i>
                        </a>

                        <a href="https://github.com/houdaifa-1244" target="_blank" className="home__link">
                            <i className="ri-github-fill"></i>
                        </a>

                        <a href="mailto:hodayfamoden06@gmail.com" className="home__link">
                            <i className="ri-google-fill"></i>
                        </a>



                    </div>
                </div>

                <div className="home__data grid" id="grid">
                    <p className="home__subtitle">
                        Hi, I'm a <span ref={typedRef}></span>
                    </p>

                    <h1 className="home__title">Houdaifa Mouden</h1>

                    <p className="home__description">
                        Full-Stack based in Tetouan, Morocco, specializing 
                        in creating websites for businesses. See my portfolio, which 
                        includes modern websites, and more.
                    </p>
                    
                    <div className="home__buttons">
                        <a href={cv} download="" target="_blank" className="button">Download CV</a>
                        <Link to="/projects" className="button button__ghost">Projects</Link>
                    </div>


                </div>
            </div>
        </section>
    </main>
    )
}

export default Home