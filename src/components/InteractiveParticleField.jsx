import React, { useEffect, useRef } from 'react';

const CONFIG = {
  baseDensity: 0.12, 
  maxSpeed: 0.6, 
  radius: [1.0, 2.2], 
  linkDist: 110, 
  linkAlpha: 0.16, 
  mouseInfluence: 110, 
  repelStrength: 0.35, 
  attractStrength: 0.2, 
  clickBurst: 120, 
  colorParticle: "#c9e7ff",
  colorLink: "#7dd3fc"
};

export default function InteractiveParticleField() {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    
    let DPR = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
    let W = 0, H = 0;
    let animFrameId = null;

    // Mouse state
    const mouse = { x: null, y: null, down: false };

    // Resize handler
    const resize = () => {
      DPR = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
      W = canvas.width = Math.floor(window.innerWidth * DPR);
      H = canvas.height = Math.floor(window.innerHeight * DPR);
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      computeParticlesCount();
    };

    const rand = (min, max) => Math.random() * (max - min) + min;
    const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

    class Particle {
      constructor() {
        this.reset(true);
      }
      reset(randomPos = false) {
        this.x = randomPos ? rand(0, W) : Math.random() < 0.5 ? 0 : W;
        this.y = randomPos ? rand(0, H) : rand(0, H);
        const ang = rand(0, Math.PI * 2);
        const speed = rand(0.05, CONFIG.maxSpeed);
        this.vx = Math.cos(ang) * speed;
        this.vy = Math.sin(ang) * speed;
        this.r = rand(CONFIG.radius[0], CONFIG.radius[1]) * DPR;
      }
      step(mx, my) {
        if (mx !== null && my !== null) {
          const dx = this.x - mx;
          const dy = this.y - my;
          const d2 = dx * dx + dy * dy;
          const r = CONFIG.mouseInfluence * DPR;
          if (d2 < r * r) {
            const d = Math.sqrt(d2) || 0.001;
            const ux = dx / d;
            const uy = dy / d;
            const strength = CONFIG.repelStrength;
            this.vx += ux * strength * (1 - d / r);
            this.vy += uy * strength * (1 - d / r);
          }
        }

        const sp = Math.hypot(this.vx, this.vy);
        const maxSp = CONFIG.maxSpeed;
        if (sp > maxSp) {
          this.vx *= maxSp / sp;
          this.vy *= maxSp / sp;
        }

        this.x += this.vx * DPR;
        this.y += this.vy * DPR;

        if (this.x < -50) this.x = W + 50;
        if (this.x > W + 50) this.x = -50;
        if (this.y < -50) this.y = H + 50;
        if (this.y > H + 50) this.y = -50;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = CONFIG.colorParticle;
        ctx.globalAlpha = 0.9;
        ctx.fill();
      }
    }

    const computeParticlesCount = () => {
      const area = (W * H) / (DPR * DPR);
      const per10k = CONFIG.baseDensity;
      let targetCount = Math.round(per10k * (area / 10000));
      targetCount = clamp(targetCount, 40, 220);
      
      const particles = particlesRef.current;
      if (particles.length < targetCount) {
        const add = targetCount - particles.length;
        for (let i = 0; i < add; i++) particles.push(new Particle());
      } else if (particles.length > targetCount) {
        particles.length = targetCount;
      }
    };

    const drawLinks = () => {
      const particles = particlesRef.current;
      ctx.lineWidth = 1 * DPR;
      ctx.strokeStyle = CONFIG.colorLink;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < CONFIG.linkDist * DPR) {
            const alpha = CONFIG.linkAlpha * (1 - dist / (CONFIG.linkDist * DPR));
            ctx.globalAlpha = alpha;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;
    };

    const loop = () => {
      ctx.clearRect(0, 0, W, H);
      const particles = particlesRef.current;
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].step(mouse.x, mouse.y);
      }
      
      drawLinks();
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].draw();
      }
      
      animFrameId = requestAnimationFrame(loop);
    };

    // Event Listeners for mouse
    const handleMouseMove = (e) => {
      mouse.x = e.clientX * DPR;
      mouse.y = e.clientY * DPR;
    };
    const handleMouseLeave = () => { mouse.x = mouse.y = null; };
    const handleMouseDown = () => { mouse.down = true; };
    const handleMouseUp = () => { mouse.down = false; };
    const handleClick = (e) => {
      const mx = e.clientX * DPR;
      const my = e.clientY * DPR;
      const particles = particlesRef.current;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const dx = p.x - mx;
        const dy = p.y - my;
        const d2 = dx * dx + dy * dy;
        const r = CONFIG.mouseInfluence * DPR;
        if (d2 < r * r) {
          const d = Math.sqrt(d2) || 0.001;
          const ux = dx / d;
          const uy = dy / d;
          p.vx += ux * (CONFIG.clickBurst / 100);
          p.vy += uy * (CONFIG.clickBurst / 100);
        }
      }
    };

    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("click", handleClick);

    // Initialization
    resize();
    for (let i = 0; i < 120; i++) particlesRef.current.push(new Particle());
    computeParticlesCount();
    loop();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("click", handleClick);
      cancelAnimationFrame(animFrameId);
    };
  }, []);

  return (
    <>
      <div className="fixed inset-0 z-0 bg-[#0b1220]" style={{
        backgroundImage: `
          radial-gradient(1200px 600px at 20% 20%, rgba(56, 189, 248, 0.1), transparent 60%),
          radial-gradient(1000px 500px at 80% 30%, rgba(124, 58, 237, 0.1), transparent 60%)
        `
      }} />
      <canvas ref={canvasRef} className="fixed inset-0 w-screen h-screen block z-0" />
    </>
  );
}
