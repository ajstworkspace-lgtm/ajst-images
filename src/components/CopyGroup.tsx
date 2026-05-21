// CopyGroup.tsx
import { useState } from "react";
import { Files, CopyCheck } from "lucide-react";

interface CopyGroupProps {
  value: string;
  label: string;
  left: number;   // Keep these for absolute positioning
  top: number;    // Keep these for absolute positioning
}

export function CopyGroup({ value, label, left, top }: CopyGroupProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = value;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      onClick={handleCopy}
      className="absolute flex items-center justify-center w-10 h-10 bg-white/80  rounded shadow-md hover:opacity-60 active:scale-90 transition-all duration-150 cursor-pointer z-10 border-none"
      style={{ left, top, transform: "translate(-50%, -50%)" }}
      aria-label={`نسخ ${label}`}
    >
      {copied ? (
        <CopyCheck className="w-5 h-5 text-green-600" />
      ) : (
        <Files className="w-8 h-9 text-blue-900" />
      )}
    </button>
  );
}