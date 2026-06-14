"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  rotation: number;
  rotationSpeed: number;
}

export default function SmokeCursor() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, lastX: 0, lastY: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.active = true;

      // Spawn particles based on speed of cursor movement
      const dx = mouseRef.current.x - mouseRef.current.lastX;
      const dy = mouseRef.current.y - mouseRef.current.lastY;
      const speed = Math.sqrt(dx * dx + dy * dy);
      
      const spawnCount = Math.min(Math.floor(speed / 4) + 1, 6);

      for (let i = 0; i < spawnCount; i++) {
        // Offset slightly around the cursor for a wider trail
        const offsetAngle = Math.random() * Math.PI * 2;
        const offsetRadius = Math.random() * 8;
        
        particlesRef.current.push({
          x: mouseRef.current.x + Math.cos(offsetAngle) * offsetRadius,
          y: mouseRef.current.y + Math.sin(offsetAngle) * offsetRadius,
          // Add velocity: slightly opposite to mouse movement + random puffiness
          vx: -dx * 0.15 + (Math.random() - 0.5) * 1.5,
          vy: -dy * 0.15 + (Math.random() - 0.5) * 1.5 - 0.4, // float upwards slightly
          radius: Math.random() * 10 + 8,
          alpha: Math.random() * 0.25 + 0.25, // starting opacity between 0.25 and 0.5
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.05,
        });
      }

      mouseRef.current.lastX = mouseRef.current.x;
      mouseRef.current.lastY = mouseRef.current.y;
    };

    window.addEventListener("mousemove", handleMouseMove);

    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        // Update physics
        p.x += p.vx;
        p.y += p.vy;
        p.radius += 0.8; // smoke expands
        p.alpha -= 0.007; // smoke fades away
        p.rotation += p.rotationSpeed;
        
        // Add a bit of air resistance / slowing down
        p.vx *= 0.96;
        p.vy *= 0.96;

        // Remove dead particles
        if (p.alpha <= 0 || p.radius <= 0) {
          particles.splice(i, 1);
          continue;
        }

        // Draw particle as a soft smoke cloud
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);

        // Draw multiple overlapping soft layers for volume
        const gradient = ctx.createRadialGradient(0, 0, p.radius * 0.1, 0, 0, p.radius);
        // Soft grey tones
        gradient.addColorStop(0, `rgba(130, 130, 130, ${p.alpha})`);
        gradient.addColorStop(0.3, `rgba(110, 110, 110, ${p.alpha * 0.6})`);
        gradient.addColorStop(0.7, `rgba(90, 90, 90, ${p.alpha * 0.2})`);
        gradient.addColorStop(1, `rgba(80, 80, 80, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(0, 0, p.radius, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      }

      // Limit particle count to avoid memory bloat
      if (particles.length > 200) {
        particles.splice(0, particles.length - 200);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-[9999]"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
