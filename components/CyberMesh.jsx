import { useEffect, useRef } from "react";

const CyberMesh = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;

    // Menyesuaikan ukuran canvas dengan window
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    // Posisi Mouse
    const mouse = {
      x: null,
      y: null,
      radius: 170, // Jarak jangkauan gravitasi/koneksi mouse
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    // Membuat Titik Node
    const nodeCount = Math.floor((window.innerWidth * window.innerHeight) / 18000);
    const nodes = [];

    for (let i = 0; i < Math.min(nodeCount, 60); i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 2 + 1.5,
        baseColor: Math.random() > 0.5 ? "rgba(52, 211, 153, " : "rgba(45, 212, 191, ", // Emerald / Teal
      });
    }

    // Loop Animasi Canvas
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update & Draw Nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        // Pergerakan Node
        node.x += node.vx;
        node.y += node.vy;

        // Bounce jika menabrak pinggir layar
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Interaksi dengan Mouse (Efek Magnetik & Glow)
        let isNearMouse = false;
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - node.x;
          const dy = mouse.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            isNearMouse = true;
            // Tarikan halus ke arah mouse
            const force = (mouse.radius - dist) / mouse.radius;
            node.x += (dx / dist) * force * 0.8;
            node.y += (dy / dist) * force * 0.8;
          }
        }

        // Gambar Titik Node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * (isNearMouse ? 1.8 : 1), 0, Math.PI * 2);
        ctx.fillStyle = node.baseColor + (isNearMouse ? "0.9)" : "0.5)");
        ctx.shadowBlur = isNearMouse ? 12 : 4;
        ctx.shadowColor = "rgba(52, 211, 153, 0.8)";
        ctx.fill();
        ctx.shadowBlur = 0; // Reset shadow

        // Gambar Garis Koneksi Antar Node yang Berdekatan
        for (let j = i + 1; j < nodes.length; j++) {
          const otherNode = nodes[j];
          const dx = node.x - otherNode.x;
          const dy = node.y - otherNode.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 140;

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.25;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(otherNode.x, otherNode.y);
            ctx.strokeStyle = `rgba(52, 211, 153, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Gambar Garis Koneksi Langsung ke Kursor Mouse
        if (isNearMouse) {
          const dx = mouse.x - node.x;
          const dy = mouse.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const alpha = (1 - dist / mouse.radius) * 0.45;

          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(45, 212, 191, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 opacity-80"
    />
  );
};

export default CyberMesh;