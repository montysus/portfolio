"use client";

export function DroneAnimation() {
  return (
    <div className="relative aspect-square w-full max-w-lg overflow-hidden border border-[#222222] bg-gradient-to-b from-red-950/5 to-black/65">
      {/* Corner accents */}
      <div className="absolute left-0 top-0 z-10 size-3.5 border-l border-t border-red-600" />
      <div className="absolute right-0 top-0 z-10 size-3.5 border-r border-t border-red-600" />
      <div className="absolute bottom-0 left-0 z-10 size-3.5 border-b border-l border-red-600" />
      <div className="absolute bottom-0 right-0 z-10 size-3.5 border-b border-r border-red-600" />

      {/* HUD label */}
      <div className="absolute left-8 top-8 z-20 flex items-center gap-2 font-mono text-xs tracking-widest text-[#999999]">
        <span className="inline-block size-1.5 rounded-full bg-red-600" />
        DRONE · PICKUP
      </div>

      {/* Pad labels */}
      <div className="absolute bottom-12 left-8 z-20 font-mono text-xs text-[#666666]">
        PAD A
      </div>
      <div className="absolute bottom-12 right-8 z-20 font-mono text-xs text-[#666666]">
        PAD B
      </div>

      {/* SVG animation */}
      <svg
        viewBox="0 0 400 400"
        className="size-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <style>{`
            @keyframes drone-move {
              0% {
                transform: translate(50px, 300px);
              }
              15% {
                transform: translate(50px, 150px);
              }
              25% {
                transform: translate(50px, 300px);
              }
              50% {
                transform: translate(50px, 300px);
              }
              65% {
                transform: translate(350px, 150px);
              }
              75% {
                transform: translate(350px, 300px);
              }
              100% {
                transform: translate(350px, 300px);
              }
            }

            @keyframes rotor-spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }

            @keyframes box-clamp {
              0% { opacity: 0; }
              24% { opacity: 0; }
              26% { opacity: 1; }
              50% { opacity: 1; }
              64% { opacity: 1; }
              76% { opacity: 0; }
              100% { opacity: 0; }
            }

            @keyframes tether-draw {
              0% { stroke-dasharray: 0, 500; }
              15% { stroke-dasharray: 150, 500; }
              25% { stroke-dasharray: 0, 500; }
              50% { stroke-dasharray: 0, 500; }
              65% { stroke-dasharray: 150, 500; }
              75% { stroke-dasharray: 0, 500; }
              100% { stroke-dasharray: 0, 500; }
            }

            .drone { animation: drone-move 8s infinite; }
            .rotor { animation: rotor-spin 0.2s linear infinite; }
            .box { animation: box-clamp 8s infinite; }
            .tether { animation: tether-draw 8s infinite; }
          `}</style>
        </defs>

        {/* Pads */}
        <rect
          x="20"
          y="350"
          width="60"
          height="30"
          fill="#222222"
          opacity="0.4"
        />
        <rect
          x="320"
          y="350"
          width="60"
          height="30"
          fill="#222222"
          opacity="0.4"
        />

        {/* Tether (cable from drone to box) */}
        <line
          x1="100"
          y1="320"
          x2="100"
          y2="350"
          stroke="#e63329"
          strokeWidth="1"
          opacity="0.6"
          className="tether"
          strokeDasharray="0,500"
        />

        {/* Box being carried */}
        <rect
          x="70"
          y="330"
          width="60"
          height="40"
          fill="none"
          stroke="#e63329"
          strokeWidth="1.5"
          className="box"
          opacity="0"
        />

        {/* Shadow under box */}
        <ellipse
          cx="100"
          cy="380"
          rx="45"
          ry="8"
          fill="#e63329"
          opacity="0.15"
          className="box"
        />

        {/* Drone group - the moving quadcopter */}
        <g className="drone">
          {/* Drone body */}
          <circle cx="0" cy="0" r="12" fill="#f5f5f5" />

          {/* Arms */}
          <line
            x1="-22"
            y1="0"
            x2="22"
            y2="0"
            stroke="#999999"
            strokeWidth="2"
          />
          <line
            x1="0"
            y1="-22"
            x2="0"
            y2="22"
            stroke="#999999"
            strokeWidth="2"
          />

          {/* Motors */}
          <circle cx="-22" cy="0" r="5" fill="#666666" />
          <circle cx="22" cy="0" r="5" fill="#666666" />
          <circle cx="0" cy="-22" r="5" fill="#666666" />
          <circle cx="0" cy="22" r="5" fill="#666666" />

          {/* Rotors */}
          <g className="rotor" style={{ transformOrigin: "-22px 0" }}>
            <ellipse
              cx="-22"
              cy="0"
              rx="18"
              ry="4"
              fill="none"
              stroke="#e63329"
              strokeWidth="0.8"
              opacity="0.7"
            />
          </g>
          <g className="rotor" style={{ transformOrigin: "22px 0" }}>
            <ellipse
              cx="22"
              cy="0"
              rx="18"
              ry="4"
              fill="none"
              stroke="#e63329"
              strokeWidth="0.8"
              opacity="0.7"
            />
          </g>
          <g className="rotor" style={{ transformOrigin: "0 -22px" }}>
            <ellipse
              cx="0"
              cy="-22"
              rx="4"
              ry="18"
              fill="none"
              stroke="#e63329"
              strokeWidth="0.8"
              opacity="0.7"
            />
          </g>
          <g className="rotor" style={{ transformOrigin: "0 22px" }}>
            <ellipse
              cx="0"
              cy="22"
              rx="4"
              ry="18"
              fill="none"
              stroke="#e63329"
              strokeWidth="0.8"
              opacity="0.7"
            />
          </g>

          {/* Status light */}
          <circle cx="0" cy="0" r="2" fill="#e63329" />
        </g>

        {/* Grid lines background */}
        <defs>
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="#222222"
              strokeWidth="0.5"
              opacity="0.3"
            />
          </pattern>
        </defs>
        <rect width="400" height="400" fill="url(#grid)" />
      </svg>
    </div>
  );
}
