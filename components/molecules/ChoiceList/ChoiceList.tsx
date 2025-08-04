import React, { useState } from "react";
import ChoiceTag from "../../atoms/ChoiceTag/ChoiceTag";

type ChoiceListProps = {
  choices: string[];
};

const ChoiceList: React.FC<ChoiceListProps> = ({ choices }) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div
      className={`
        flex items-center gap-[10px]
        max-[1024px]:flex-wrap max-[1024px]:justify-center
        max-[768px]:flex-wrap max-[768px]:justify-center
      `}
    >
      {choices.map((choice, index) => (
        <ChoiceTag
          key={choice}
          text={choice}
          highlighted={hovered === index}
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}
        />
      ))}
    </div>
  );
};

export default ChoiceList;
