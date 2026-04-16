export default function Skills() {
  return (
    <>
      <section id="skills">
        <div className="section-tag reveal">What I Work With</div>

        <h2 className="section-title reveal" style={{ transitionDelay: "0.1s" }}>
          My <span className="gradient-text">Tech Stack</span>
        </h2>

        <div className="skills-grid">

          {/* Frontend */}
          <div className="skill-category-title reveal">Frontend</div>

          <div className="skill-card reveal" style={{ transitionDelay: "0.05s" }}>
            <div className="skill-icon">
              <img src="/skills/react.png" alt="" />
            </div>
            <div className="skill-name">React</div>
          </div>

          <div className="skill-card reveal" style={{ transitionDelay: "0.1s" }}>
            <div className="skill-icon">
              <img src="/skills/js.png" alt="" />
            </div>
            <div className="skill-name">JavaScript</div>
          </div>

          <div className="skill-card reveal" style={{ transitionDelay: "0.15s" }}>
            <div className="skill-icon">
              <img src="/skills/html.png" alt="" />
            </div>
            <div className="skill-name">HTML</div>
          </div>

          <div className="skill-card reveal" style={{ transitionDelay: "0.2s" }}>
            <div className="skill-icon">
              <img src="/skills/css.png" alt="" />
            </div>
            <div className="skill-name">CSS3</div>
          </div>

          <div className="skill-card reveal" style={{ transitionDelay: "0.25s" }}>
            <div className="skill-icon">
              <img src="/skills/tailwind.png" alt="" />
            </div>
            <div className="skill-name">Tailwind</div>
          </div>

          <div className="skill-card reveal" style={{ transitionDelay: "0.25s" }}>
            <div className="skill-icon">
              <img src="/skills/bootstrap.png" alt="" />
            </div>
            <div className="skill-name">Bootstrap</div>
          </div>

          <div className="skill-card reveal" style={{ transitionDelay: "0.25s" }}>
            <div className="skill-icon">
              <img src="/skills/angular.png" alt="" />
            </div>
            <div className="skill-name">Angular</div>
          </div>

          {/* Backend */}
          <div className="skill-category-title reveal" style={{ transitionDelay: "0.1s" }}>
            Backend
          </div>

          <div className="skill-card reveal" style={{ transitionDelay: "0.05s" }}>
            <div className="skill-icon">
              <img src="/skills/node.png" alt="" />
            </div>
            <div className="skill-name">Node.js</div>
          </div>

          <div className="skill-card reveal" style={{ transitionDelay: "0.1s" }}>
            <div className="skill-icon">
              <img src="/skills/python.png" alt="" />
            </div>
            <div className="skill-name">Python</div>
          </div>

          <div className="skill-card reveal" style={{ transitionDelay: "0.15s" }}>
            <div className="skill-icon">
              <img src="/skills/java.png" alt="" />
            </div>
            <div className="skill-name">Java</div>
          </div>

          <div className="skill-card reveal" style={{ transitionDelay: "0.2s" }}>
            <div className="skill-icon">
              <img src="/skills/spring.png" alt="" />
            </div>
            <div className="skill-name">Spring Boot</div>
          </div>

          <div className="skill-card reveal" style={{ transitionDelay: "0.25s" }}>
            <div className="skill-icon">
              <img src="/skills/php.png" alt="" />
            </div>
            <div className="skill-name">PHP</div>
          </div>

          <div className="skill-card reveal" style={{ transitionDelay: "0.25s" }}>
            <div className="skill-icon">
              <img src="/skills/laravel.png" alt="" />
            </div>
            <div className="skill-name">Laravel</div>
          </div>

          {/* Database */}
          <div className="skill-category-title reveal" style={{ transitionDelay: "0.1s" }}>
            Data Base
          </div>

          <div className="skill-card reveal" style={{ transitionDelay: "0.05s" }}>
            <div className="skill-icon">
              <img src="/skills/mysql.png" alt="" />
            </div>
            <div className="skill-name">MySQL</div>
          </div>

          <div className="skill-card reveal" style={{ transitionDelay: "0.1s" }}>
            <div className="skill-icon">
              <img src="/skills/mongo (2).png" alt="" />
            </div>
            <div className="skill-name">MongoDB</div>
          </div>

          {/* AI */}
          <div className="skill-category-title reveal" style={{ transitionDelay: "0.1s" }}>
            Ai & Automation
          </div>

          <div className="skill-card reveal" style={{ transitionDelay: "0.15s" }}>
            <div className="skill-icon">
              <img src="/skills/n8n.png" alt="" />
            </div>
            <div className="skill-name">N8N</div>
          </div>

          {/* DevOps */}
          <div className="skill-category-title reveal" style={{ transitionDelay: "0.1s" }}>
            Tools & DevOps
          </div>

          <div className="skill-card reveal" style={{ transitionDelay: "0.05s" }}>
            <div className="skill-icon">
              <img src="/skills/docker.png" alt="" />
            </div>
            <div className="skill-name">Docker</div>
          </div>

          <div className="skill-card reveal" style={{ transitionDelay: "0.1s" }}>
            <div className="skill-icon">
              <img src="/skills/git.png" alt="" />
            </div>
            <div className="skill-name">Git</div>
          </div>

          <div className="skill-card reveal" style={{ transitionDelay: "0.2s" }}>
            <div className="skill-icon">
              <img src="/skills/ci_cd.png" alt="" />
            </div>
            <div className="skill-name">CI/CD</div>
          </div>

        </div>
      </section>

      <div className="glow-divider"></div>
    </>
  );
}