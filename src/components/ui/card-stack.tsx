"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { Button } from "./button";

let interval: any;

type Card = {
  id: number;
  image: string;
  title: string;
  description: string;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (isAutoPlaying) {
      startFlipping();
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards];
        newArray.unshift(newArray.pop()!);
        return newArray;
      });
    }, 5000);
  };

  const nextCard = () => {
    setCards((prevCards: Card[]) => {
      const newArray = [...prevCards];
      newArray.unshift(newArray.pop()!);
      return newArray;
    });
  };

  const prevCard = () => {
    setCards((prevCards: Card[]) => {
      const newArray = [...prevCards];
      newArray.push(newArray.shift()!);
      return newArray;
    });
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <div className="relative">
      <div className="relative h-80 w-full max-w-md mx-auto md:h-96 md:max-w-lg">
        {cards.map((card, index) => {
          return (
            <motion.div
              key={card.id}
              className="absolute bg-white h-80 w-full md:h-96 rounded-3xl shadow-xl border border-neutral-200 flex flex-col overflow-hidden"
              style={{
                transformOrigin: "top center",
              }}
              animate={{
                top: index * -CARD_OFFSET,
                scale: 1 - index * SCALE_FACTOR,
                zIndex: cards.length - index,
              }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
            >
              <div className="flex-1 relative overflow-hidden">
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-white/90 text-sm">{card.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
      
      {/* Controls */}
      <div className="flex justify-center items-center gap-4 mt-8">
        <Button
          variant="outline"
          size="sm"
          onClick={prevCard}
          className="rounded-full w-10 h-10 p-0"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        
        <Button
          variant="outline"
          size="sm"
          onClick={toggleAutoPlay}
          className="rounded-full w-10 h-10 p-0"
        >
          {isAutoPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </Button>
        
        <Button
          variant="outline"
          size="sm"
          onClick={nextCard}
          className="rounded-full w-10 h-10 p-0"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};