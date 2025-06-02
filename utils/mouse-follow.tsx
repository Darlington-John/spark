"use client";
import { useRef, useState } from "react";

const useMouseOffset = () => {
  type Offset = {
    x: number;
    y: number;
  };

  const [offset, setOffset] = useState<Offset>({ x: 0, y: 0 });
  const maxTranslate = 20;
  const moveRef = useRef<HTMLImageElement | null>(null);

  const mouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const screenWidth = window.innerWidth;

    if (screenWidth > 1023) {
      const container = event.currentTarget;
      const containerRect = container.getBoundingClientRect();

      if (moveRef.current) {
        const imageRect = moveRef.current.getBoundingClientRect();
        const maxX = (containerRect.width - imageRect.width) / 2;
        const maxY = (containerRect.height - imageRect.height) / 2;

        const mouseX = event.clientX - containerRect.left;
        const mouseY = event.clientY - containerRect.top;

        const offsetX = ((mouseX / containerRect.width) * 2 - 1) * maxTranslate;
        const offsetY =
          ((mouseY / containerRect.height) * 2 - 1) * maxTranslate;

        setOffset({
          x: Math.max(-maxX, Math.min(maxX, offsetX)),
          y: Math.max(-maxY, Math.min(maxY, offsetY)),
        });
      }
    } else {
      setOffset({ x: 0, y: 0 });
    }
  };

  const offsetStyle = { transform: `translate(${offset.x}px, ${offset.y}px)` };
  return {
    moveRef,
    offset,
    mouseMove,
    offsetStyle,
  };
};

export default useMouseOffset;
