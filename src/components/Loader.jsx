import { useEffect, useRef, useState } from "react";

export default function Loader() {
  const canvasRef = useRef(null);
  const nameRef = useRef(null);
  const barRef = useRef(null);

  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const name = "Houdaifa Mouden";
    let i = 0;
    let progress = 0;

    const el = nameRef.current;
    const bar = barRef.current;

    // Canvas
    const lc = canvasRef.current;
    const ctx = lc.getContext("2d");

    function resize() {
      lc.width = window.innerWidth;
      lc.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    const dots = Array.from({ length: 80 }, () => ({
      x: Math.random() * lc.width,
      y: Math.random() * lc.height,
      r: Math.random() * 1.5 + 0.5,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      a: Math.random()
    }));

    function drawLoader() {
      ctx.clearRect(0, 0, lc.width, lc.height);

      dots.forEach(d => {
        d.x += d.vx;
        d.y += d.vy;

        if (d.x < 0 || d.x > lc.width) d.vx *= -1;
        if (d.y < 0 || d.y > lc.height) d.vy *= -1;

        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(17,153,142,${d.a * 0.6})`;
        ctx.fill();
      });

      requestAnimationFrame(drawLoader);
    }
    drawLoader();

    // Typing
    const typing = setInterval(() => {
      if (el) {
        el.innerHTML =
          name.slice(0, i) + '<span class="loader-cursor"></span>';
      }
      i++;

      if (i > name.length) {
        clearInterval(typing);
        if (el) el.innerHTML = name;
      }
    }, 80);

    // Progress bar
    const prog = setInterval(() => {
      progress = Math.min(progress + Math.random() * 4 + 1, 100);

      if (bar) bar.style.width = progress + "%";

      if (progress >= 100) {
        clearInterval(prog);

        setTimeout(() => {
          setHidden(true);
        }, 500);
      }
    }, 40);

    return () => {
      clearInterval(typing);
      clearInterval(prog);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div id="loader" className={hidden ? "hidden" : ""}>
      <canvas className="loader-canvas" ref={canvasRef}></canvas>

      <div className="loader-content">
        <div className="loader-name" ref={nameRef}></div>
        <div className="loader-sub">Full Stack Developer</div>

        <div className="loader-bar-wrap">
          <div className="loader-bar" ref={barRef}></div>
        </div>
      </div>
    </div>
  );
}