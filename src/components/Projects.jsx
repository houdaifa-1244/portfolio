import useScrollReveal from "../hooks/useScrollReveal";

export default function Projects() {
  useScrollReveal();

  const projects = [
    {
      title: "Stadium Booking",
      img: "/projects/book.png",
      tech: ["PHP", "JavaScript", "MySQL"],
      code: "https://github.com/houdaifa-1244/resrvation-terrain",
      live: "https://teranresrvation.42web.io/"
    },
  ];

  return (
    <>
      <section id="projects">
        <div className="section-tag reveal">What I've Built</div>

        <h2
          className="section-title reveal"
          style={{ transitionDelay: "0.1s" }}
        >
          Featured <span className="gradient-text">Projects</span>
        </h2>

        <div className="projects-grid">

          {projects.map((p, i) => (
            <div key={i} className="project-card reveal">

              <div className="project-img">
                <img className="project-img-inner" src={p.img} alt={p.title} />

                <div className="project-overlay"></div>
              </div>

              <div className="project-body">
                <div className="project-title">{p.title}</div>

                <div className="project-tech">
                  {p.tech.map((t, i2) => (
                    <span key={i2} className="tech-badge">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-footer">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={p.code}
                  className="proj-btn code"
                >
                  <i className="fab fa-github"></i> Code
                </a>

                <a
                  target="_blank"
                  rel="noreferrer"
                  href={p.live}
                  className="proj-btn live"
                >
                  <i className="fas fa-external-link-alt"></i> Live
                </a>
              </div>

            </div>
          ))}

        </div>
      </section>

      <div className="glow-divider"></div>
    </>
  );
}