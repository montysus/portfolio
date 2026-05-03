export function SiteBg() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#0a0a0a]">
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          mask: "radial-gradient(ellipse 80% 70% at 50% 40%, black 40%, transparent 95%)",
        }}
      />

      {/* Ghost clouds */}
      <div
        className="pointer-events-none absolute right-[-10%] top-[-10%] h-[60vw] w-[60vw] rounded-full blur-[80px]"
        style={{
          background:
            "radial-gradient(circle, rgba(230,51,41,0.28), transparent 65%)",
          animation: "drift-a 28s ease-in-out infinite alternate",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-[-15%] left-[-15%] h-[55vw] w-[55vw] rounded-full blur-[80px]"
        style={{
          background:
            "radial-gradient(circle, rgba(230,51,41,0.16), transparent 65%)",
          animation: "drift-b 36s ease-in-out infinite alternate",
        }}
      />
      <div
        className="pointer-events-none absolute left-[20%] top-[30%] h-[45vw] w-[45vw] rounded-full blur-[80px]"
        style={{
          background:
            "radial-gradient(circle, rgba(230,51,41,0.10), transparent 65%)",
          animation: "drift-c 42s ease-in-out infinite alternate",
        }}
      />

      <style>{`
        @keyframes drift-a {
          0%   { transform: translate(0, 0) scale(1); }
          50%  { transform: translate(-8%, 6%) scale(1.12); }
          100% { transform: translate(4%, -4%) scale(1.05); }
        }
        @keyframes drift-b {
          0%   { transform: translate(0, 0) scale(1); }
          50%  { transform: translate(6%, -5%) scale(1.08); }
          100% { transform: translate(-4%, 4%) scale(1.14); }
        }
        @keyframes drift-c {
          0%   { transform: translate(0, 0) scale(1); }
          50%  { transform: translate(-5%, -8%) scale(1.2); }
          100% { transform: translate(5%, 5%) scale(0.95); }
        }
        @media (prefers-reduced-motion: reduce) {
          @keyframes drift-a, @keyframes drift-b, @keyframes drift-c {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
