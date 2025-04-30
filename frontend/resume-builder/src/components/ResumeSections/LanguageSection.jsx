import React from "react";
import Progress from "../Progress";

const LanguageInfo = ({ languages, accentColor, bgColor, progress }) => {
  return (
    <div className="flex items-center justify-between">
      <p className={`text-[12px] font-semibold text-gray-900`}>{languages}</p>
      {progress > 0 && (
        <Progress
          progress={(progress / 100) * 5}
          color={accentColor}
          bgColor={bgColor}
        />
      )}
    </div>
  );
};

const LanguageSection = ({ languages, accentColor, bgColor }) => {
  return (
    <div className="flex flex-col gap-2">
      {languages.map((language, index) => (
        <LanguageInfo
          key={`slanguage_${index}`}
          languages={language.name}
          progress={language.progress}
          accentColor={accentColor}
          bgColor={bgColor}
        />
      ))}
    </div>
  );
};

export default LanguageSection;
