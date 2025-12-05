import { useEffect, useState } from "react";

export default function CircuitTransition() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "data-transition") {
          setIsActive(true);
          setTimeout(() => setIsActive(false), 1200);
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-transition"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Lightning Circuit Overlay */}
      {isActive && (
        <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
          {/* SVG Circuit Path with Lightning */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1920 1080"
            preserveAspectRatio="none"
          >
            {/* Main diagonal lightning path */}
            <path
              d="M 0 0 L 1920 1080"
              stroke="url(#lightningGradient)"
              strokeWidth="3"
              fill="none"
              className="animate-lightningMain"
              style={{
                filter: "drop-shadow(0 0 10px #00c8ff)",
              }}
            />

            {/* Circuit branches */}
            <path
              d="M 480 270 L 600 350 L 480 430"
              stroke="url(#lightningGradient)"
              strokeWidth="2"
              fill="none"
              className="animate-circuitBranch1"
              style={{
                filter: "drop-shadow(0 0 8px #8800ff)",
              }}
            />

            <path
              d="M 960 540 L 1100 620 L 960 700"
              stroke="url(#lightningGradient)"
              strokeWidth="2"
              fill="none"
              className="animate-circuitBranch2"
              style={{
                filter: "drop-shadow(0 0 8px #8800ff)",
              }}
            />

            <path
              d="M 1440 810 L 1560 870 L 1440 930"
              stroke="url(#lightningGradient)"
              strokeWidth="2"
              fill="none"
              className="animate-circuitBranch3"
              style={{
                filter: "drop-shadow(0 0 8px #8800ff)",
              }}
            />

            {/* Circuit nodes (circles) */}
            <circle cx="480" cy="270" r="8" fill="#00c8ff" opacity="0.8" className="animate-nodeGlow1" />
            <circle cx="600" cy="350" r="6" fill="#8800ff" opacity="0.6" className="animate-nodeGlow2" />
            <circle cx="960" cy="540" r="8" fill="#00c8ff" opacity="0.8" className="animate-nodeGlow3" />
            <circle cx="1100" cy="620" r="6" fill="#8800ff" opacity="0.6" className="animate-nodeGlow4" />
            <circle cx="1440" cy="810" r="8" fill="#00c8ff" opacity="0.8" className="animate-nodeGlow5" />

            {/* Gradient definitions */}
            <defs>
              <linearGradient id="lightningGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00c8ff" stopOpacity="1" />
                <stop offset="50%" stopColor="#8800ff" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#00c8ff" stopOpacity="1" />
              </linearGradient>
            </defs>
          </svg>

          {/* Flash effect background */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 via-purple-500/20 to-cyan-500/30 animate-flashBg" />

          {/* Electric glow particles */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyan-400 rounded-full blur-3xl animate-particle1 opacity-0" />
          <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-purple-500 rounded-full blur-2xl animate-particle2 opacity-0" />
          <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-cyan-400 rounded-full blur-3xl animate-particle3 opacity-0" />
        </div>
      )}

      <style>{`
        @keyframes lightningMainStroke {
          0% {
            stroke-dasharray: 2000;
            stroke-dashoffset: 2000;
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          40% {
            stroke-dasharray: 2000;
            stroke-dashoffset: 0;
            opacity: 1;
          }
          100% {
            stroke-dasharray: 2000;
            stroke-dashoffset: 0;
            opacity: 0;
          }
        }

        @keyframes circuitBranchStroke {
          0% {
            stroke-dasharray: 500;
            stroke-dashoffset: 500;
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            stroke-dasharray: 500;
            stroke-dashoffset: 0;
            opacity: 0;
          }
        }

        @keyframes nodeGlowAnim {
          0% {
            r: 2;
            opacity: 0;
          }
          50% {
            r: 14;
            opacity: 1;
          }
          100% {
            r: 2;
            opacity: 0;
          }
        }

        @keyframes flashBgAnim {
          0% {
            opacity: 0.9;
          }
          100% {
            opacity: 0;
          }
        }

        @keyframes particleBurst1 {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(-150px, -150px) scale(0);
            opacity: 0;
          }
        }

        @keyframes particleBurst2 {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(150px, -100px) scale(0);
            opacity: 0;
          }
        }

        @keyframes particleBurst3 {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(100px, 150px) scale(0);
            opacity: 0;
          }
        }

        .animate-lightningMain {
          animation: lightningMainStroke 1s ease-out forwards;
        }

        .animate-circuitBranch1 {
          animation: circuitBranchStroke 0.8s ease-out forwards;
        }

        .animate-circuitBranch2 {
          animation: circuitBranchStroke 0.8s ease-out 0.2s both;
        }

        .animate-circuitBranch3 {
          animation: circuitBranchStroke 0.8s ease-out 0.4s both;
        }

        .animate-nodeGlow1 {
          animation: nodeGlowAnim 0.6s ease-out forwards;
        }

        .animate-nodeGlow2 {
          animation: nodeGlowAnim 0.6s ease-out 0.1s both;
        }

        .animate-nodeGlow3 {
          animation: nodeGlowAnim 0.6s ease-out 0.2s both;
        }

        .animate-nodeGlow4 {
          animation: nodeGlowAnim 0.6s ease-out 0.3s both;
        }

        .animate-nodeGlow5 {
          animation: nodeGlowAnim 0.6s ease-out 0.4s both;
        }

        .animate-flashBg {
          animation: flashBgAnim 0.6s ease-out forwards;
        }

        .animate-particle1 {
          animation: particleBurst1 0.8s ease-out forwards;
        }

        .animate-particle2 {
          animation: particleBurst2 0.8s ease-out 0.2s both;
        }

        .animate-particle3 {
          animation: particleBurst3 0.8s ease-out 0.1s both;
        }
      `}</style>
    </>
  );
}
