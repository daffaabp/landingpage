import type React from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  highlightWord?: string;
  align?: "left" | "center";
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  highlightWord,
  align = "center",
}) => {
  const alignmentClass = align === "left" ? "text-left" : "text-center mx-auto";

  // Basic split to inject highlight if present
  const renderTitle = () => {
    if (!highlightWord) return title;
    const parts = title.split(highlightWord);
    return (
      <>
        {parts[0]}
        <span className="text-[#1E3A8A] relative inline-block">
          {highlightWord}
          <svg
            aria-hidden="true"
            className="absolute w-full h-3 -bottom-1 left-0 text-[#D97706] z-[-1] opacity-60"
            viewBox="0 0 100 10"
            preserveAspectRatio="none"
          >
            <path
              d="M0 5 Q 50 10 100 5"
              stroke="currentColor"
              strokeWidth="8"
              fill="none"
            />
          </svg>
        </span>
        {parts[1]}
      </>
    );
  };

  return (
    <div className={`mb-12 max-w-3xl ${alignmentClass}`}>
      {subtitle && (
        <span className="text-[#3B82F6] font-(family-name:--font-lora) font-bold uppercase tracking-wider text-sm mb-3 block">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-(family-name:--font-lora) font-bold text-gray-800 leading-tight">
        {renderTitle()}
      </h2>
    </div>
  );
};

export default SectionHeader;
