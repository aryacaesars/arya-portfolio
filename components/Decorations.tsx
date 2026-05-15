export function GridBackground() {
  return (
    <div
      aria-hidden
      className="grid-bg pointer-events-none fixed inset-0 z-0 opacity-70"
    />
  );
}

export function AmbientGlows() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div className="animate-pulse-glow absolute -left-[12%] top-[8%] h-[460px] w-[460px] rounded-full bg-[#D9FF3F]/[0.08] blur-[140px]" />
      <div
        className="animate-pulse-glow absolute right-[-10%] top-[35%] h-[520px] w-[520px] rounded-full bg-[#2563FF]/[0.18] blur-[160px]"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="animate-pulse-glow absolute bottom-[5%] left-[35%] h-[420px] w-[420px] rounded-full bg-[#2563FF]/[0.1] blur-[120px]"
        style={{ animationDelay: "1.2s" }}
      />
    </div>
  );
}

export function CurvedLines() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[1] h-full w-full opacity-[0.18]"
      preserveAspectRatio="none"
      viewBox="0 0 1440 900"
    >
      <path
        d="M-50 280 Q 320 120, 620 320 T 1180 240 T 1500 380"
        fill="none"
        stroke="rgba(255,255,255,0.4)"
        strokeWidth="1"
      />
      <path
        d="M-80 720 Q 280 600, 540 780 T 1080 660 T 1500 760"
        fill="none"
        stroke="rgba(217,255,63,0.5)"
        strokeWidth="1"
      />
      <path
        d="M240 -50 Q 420 240, 360 540 T 540 980"
        fill="none"
        stroke="rgba(37,99,255,0.5)"
        strokeWidth="1"
      />
    </svg>
  );
}

export function Sparkles() {
  const items = [
    { className: "top-[16%] left-[12%] bg-[#D9FF3F]/70", size: "h-1.5 w-1.5" },
    { className: "top-[32%] right-[14%] bg-white/50", size: "h-1 w-8" },
    { className: "top-[58%] left-[6%] bg-[#2563FF]/70", size: "h-1.5 w-1.5" },
    { className: "bottom-[30%] right-[8%] bg-[#D9FF3F]/60", size: "h-1 w-10" },
    { className: "top-[46%] left-[42%] bg-white/40", size: "h-1 w-1" },
    { className: "bottom-[12%] left-[28%] bg-[#2563FF]/60", size: "h-1 w-8" },
    { className: "top-[80%] right-[28%] bg-[#D9FF3F]/70", size: "h-1.5 w-1.5" },
  ];

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[2]">
      {items.map((item, i) => (
        <span
          key={i}
          className={`animate-drift absolute rounded-full ${item.className} ${item.size}`}
          style={{ animationDelay: `${i * 1.4}s` }}
        />
      ))}
    </div>
  );
}

export function PlusSparkle({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className={`h-4 w-4 ${className}`}
      fill="currentColor"
    >
      <path d="M12 2 L13 10 L21 11 L13 12 L12 21 L11 12 L3 11 L11 10 Z" />
    </svg>
  );
}

export function ScribbleArrow({
  className = "",
  color = "white",
  flip = false,
}: {
  className?: string;
  color?: "white" | "lime" | "blue";
  flip?: boolean;
}) {
  const stroke =
    color === "lime"
      ? "#D9FF3F"
      : color === "blue"
        ? "#2563FF"
        : "rgba(255,255,255,0.6)";
  return (
    <svg
      aria-hidden
      viewBox="0 0 120 60"
      className={`${className} ${flip ? "scale-x-[-1]" : ""}`}
      fill="none"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke={stroke}
    >
      <path d="M5 35 C 25 5, 60 5, 95 30" />
      <path d="M95 30 L 85 22" />
      <path d="M95 30 L 88 38" />
    </svg>
  );
}

export function DottedDivider({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      className={`pointer-events-none ${className}`}
      viewBox="0 0 200 4"
      preserveAspectRatio="none"
    >
      <path
        d="M0 2 L 200 2"
        stroke="rgba(255,255,255,0.35)"
        strokeWidth="2"
        strokeDasharray="2 6"
      />
    </svg>
  );
}
