"use client"

interface WaveSectionProps {
  variant?: "normal" | "reverse"
  color?: string
}

export function WaveSection({ variant = "normal", color = "rgb(249 250 251)" }: WaveSectionProps) {
  const isReverse = variant === "reverse"

  return (
    <div className="relative">
      <svg
        className={`w-full h-16 md:h-24 ${isReverse ? "rotate-180" : ""}`}
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          fill={color}
          className="animate-pulse"
          style={{ animationDuration: "4s" }}
        />
        <path
          d="M0,96L48,90.7C96,85,192,75,288,80C384,85,480,107,576,112C672,117,768,107,864,96C960,85,1056,75,1152,80C1248,85,1344,107,1392,117.3L1440,128L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          fill="rgb(16 185 129)"
          fillOpacity="0.1"
          className="animate-pulse"
          style={{ animationDuration: "6s", animationDelay: "1s" }}
        />
      </svg>
    </div>
  )
}
