"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn, isMobile } from "@/utils/helpers";

export const BoxesCore = ({ className, ...rest }: { className?: string }) => {
  const rows = new Array(22).fill(1);
  const cols = new Array(22).fill(1);
  let colors = [
    "--sky-300",
    "--pink-300",
    "--green-300",
    "--yellow-300",
    "--red-300",
    "--blue-300",
    "--indigo-300",
    "--violet-300",
  ];
  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const [litUpCells, setLitUpCells] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (!isMobile()) return;

    const lightedUpCellsMinRatio = 0.2;
    const lightedUpCellsMaxRatio = 0.4;
    const numberOfRandomTurnOn = 12;
    const numberOfRandomTurnOff = 15;

    const turnOnRandomCell = (newLitUpCells: Set<string>) => {
      let randomPosition: string;
      do {
        const randomRow = Math.floor(Math.random() * rows.length);
        const randomCol = Math.floor(Math.random() * cols.length);
        randomPosition = `${randomRow}-${randomCol}`;
      } while (newLitUpCells.has(randomPosition));
      newLitUpCells.add(randomPosition);
    };

    const turnOffRandomCell = (newLitUpCells: Set<string>) => {
      const array = Array.from(newLitUpCells);
      const randomIndex = Math.floor(Math.random() * array.length);
      newLitUpCells.delete(array[randomIndex]);
    };

    const lightUpRandomCells = () => {
      setLitUpCells((prev) => {
        const newLitUpCells = new Set<string>(prev);

        while (
          newLitUpCells.size <
          Math.floor(rows.length * cols.length * lightedUpCellsMinRatio)
        ) {
          turnOnRandomCell(newLitUpCells);
        }

        while (
          newLitUpCells.size >
          Math.floor(rows.length * cols.length * lightedUpCellsMaxRatio)
        ) {
          turnOffRandomCell(newLitUpCells);
        }

        const randomLight =
          Math.floor(Math.random() * numberOfRandomTurnOn) + 1;

        for (let i = 0; i < randomLight; i++) {
          turnOnRandomCell(newLitUpCells);
        }
        const randomTurnOff =
          Math.floor(Math.random() * numberOfRandomTurnOff) + 1;
        for (let i = 0; i < randomTurnOff; i++) {
          turnOffRandomCell(newLitUpCells);
        }
        return newLitUpCells;
      });
    };

    const interval = setInterval(lightUpRandomCells, 1000);

    return () => clearInterval(interval); // Cleanup
  }, [cols.length, rows.length]);

  return (
    <div
      style={{
        transform: `skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`,
      }}
      className={cn(
        "absolute -left-8 -top-full p-4  flex  w-full h-full z-0 ",
        className
      )}
      {...rest}
    >
      {rows.map((_, i) => (
        <motion.div
          key={`row` + i}
          className="w-16 h-8  border-l  border-slate-700 relative"
        >
          {cols.map((_, j) => {
            const cellKey = `${i}-${j}`;
            return (
              <motion.div
                whileHover={{
                  backgroundColor: `var(${getRandomColor()})`,
                  transition: { duration: 0 },
                }}
                whileTap={{
                  backgroundColor: `var(${getRandomColor()})`,
                  transition: { duration: 0 },
                }}
                animate={{
                  backgroundColor: litUpCells.has(cellKey)
                    ? `var(${getRandomColor()})`
                    : "#0f172a",
                  transition: { duration: 1 },
                }}
                key={`col` + j}
                className={"w-16 h-8  border-r border-t border-slate-700 relative"}
              >
                
              </motion.div>
            );
          })}
        </motion.div>
      ))}
    </div>
  );
};

export const ColorGrid = React.memo(BoxesCore);
