import React, { useEffect, useRef } from 'react';

// Animated Circles Background
const CirclesBackground = ({ color = '#4ac8c8', count = 30, className = '' }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    // Set canvas size
    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setSize();
    window.addEventListener('resize', setSize);

    // Generate circles
    const circles = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 60 + 30,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.25 + 0.1,
    }));

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const c of circles) {
        ctx.beginPath();
        ctx.arc(c.x, c.y, c.r, 0, 2 * Math.PI);
        ctx.fillStyle = color + Math.round(c.alpha * 255).toString(16).padStart(2, '0');
        ctx.fill();
        c.x += c.dx;
        c.y += c.dy;
        // Bounce off edges
        if (c.x - c.r < 0 || c.x + c.r > canvas.width) c.dx *= -1;
        if (c.y - c.r < 0 || c.y + c.r > canvas.height) c.dy *= -1;
      }
      animationRef.current = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', setSize);
    };
  }, [color, count]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 w-full h-full pointer-events-none z-1 ${className}`}
    />
  );
};

export default CirclesBackground;
