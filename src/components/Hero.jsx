import useScrollReveal from "../hooks/useScrollReveal";
import profile from "../assets/image/houdaifa_profile.png";
export default function Hero() {
  useScrollReveal();

  return (
    <>
      <section id="home">
        <div className="hero-grid">
          
          {/* LEFT */}
          <div>
            <div className="hero-eyebrow reveal">
              Welcome to my portfolio
            </div>

            <h1
              className="hero-name reveal"
              style={{ transitionDelay: "0.1s" }}
            >
              Houdaifa <br /> Mouden
            </h1>

            <p
              className="hero-role reveal"
              style={{ transitionDelay: "0.2s" }}
            >
              {"< "} <span>Full Stack Developer</span> {" />"}
            </p>

            <div
              className="hero-btns reveal"
              style={{ transitionDelay: "0.3s" }}
            >
              <a href="#projects" className="btn btn-primary">
                <i className="fas fa-rocket"></i> View Projects
              </a>

              <a href="#" className="btn btn-outline">
                <i className="fas fa-download"></i> Download CV
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div
            className="hero-avatar-wrap reveal-right"
            style={{ transitionDelay: "0.2s" }}
          >
            <div className="hero-avatar-glow"></div>

            <div className="hero-avatar-ring">
              <div className="hero-avatar-inner">
                <img
                  src={profile}
                  alt="Houdaifa Mouden"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      <div className="glow-divider"></div>
    </>
  );
}