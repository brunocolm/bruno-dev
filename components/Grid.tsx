import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { FaCode } from "react-icons/fa6";
import { gridItems } from "@/data";

function Grid() {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </section>
  );
}

export default Grid;
