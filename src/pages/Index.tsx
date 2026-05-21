import { useRef, useMemo } from "react";
import ajstImage from "@/assets/ajst-branch.jpeg";
import { useImageCalibration, BasePosition } from "@/hooks/useImageCalibration";
import { CopyGroup } from "@/components/CopyGroup";

const basePositions: BasePosition[] = [
  { id: "haseb", label: "حاسب", value: "1583881#1", x: 0.37, y: 0.401 },
  { id: "jaib", label: "جيب", value: "593063", x: 0.89, y: 0.401 },
  { id: "mobile", label: "الجوال", value: "771251777", x: 0.68, y: 0.61 },
];

const Index = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const { positions, ready } = useImageCalibration(imageRef, basePositions);

  return (
    <div className="min-h-screen bg-page-bg flex items-center justify-center p-4" dir="rtl">
      <div className="relative w-full max-w-2xl mx-auto">
        <img
          ref={imageRef}
          src={ajstImage}
          alt="AJST - فرع الزهراوي - معلومات التحويل"
          className="w-full h-auto rounded-xl shadow-lg"
        />
        {ready &&
          positions.map((pos) => (
            <CopyGroup
              key={pos.id}
              label={pos.label}
              value={pos.value}
              left={pos.left}
              top={pos.top}
            />
          ))}
      </div>
    </div>
  );
};

export default Index;
