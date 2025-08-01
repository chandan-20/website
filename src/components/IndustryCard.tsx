import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface IndustryCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const IndustryCard = ({ title, description, icon, className }: IndustryCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHovered(true);
        }
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={cn(
        "relative flex items-center justify-center w-full aspect-square rounded-3xl transition-all duration-500 cubic-bezier(0.23, 1, 0.32, 1) cursor-pointer",
        isHovered && "transform translate-y-[-16px]",
        className
      )}
    >
      {/* Main content */}
      <div
        className={cn(
          "relative flex flex-col items-center justify-center gap-6 p-8 rounded-3xl w-full h-full text-white overflow-hidden bg-primary transition-all duration-500 cubic-bezier(0.23, 1, 0.32, 1)",
          "before:absolute before:content-[''] before:top-[-4%] before:left-1/2 before:w-[90%] before:h-[90%] before:transform before:translate-x-[-50%] before:bg-primary/70 before:z-[-1] before:transform-origin-bottom before:rounded-[inherit] before:transition-all before:duration-500 before:cubic-bezier(0.23, 1, 0.32, 1)",
          "after:absolute after:content-[''] after:top-[-8%] after:left-1/2 after:w-[80%] after:h-[80%] after:transform after:translate-x-[-50%] after:bg-primary/40 after:z-[-2] after:transform-origin-bottom after:rounded-[inherit] after:transition-all after:duration-500 after:cubic-bezier(0.23, 1, 0.32, 1)",
          isHovered && "before:rotate-[-8deg] before:top-0 before:w-full before:h-full",
          isHovered && "after:rotate-[8deg] after:top-0 after:w-full after:h-full"
        )}
      >
        {/* Icon */}
        <div className="w-12 h-12 text-white z-10">
          {icon}
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-bold text-center z-10 transition-all duration-500 cubic-bezier(0.23, 1, 0.32, 1)">
          {title}
        </h3>
        
        {/* Description */}
        <p className={cn(
          "text-sm text-center text-white/90 z-10 transition-all duration-500 cubic-bezier(0.23, 1, 0.32, 1)",
          isHovered ? "opacity-100 transform translate-y-0" : "opacity-70 transform translate-y-2"
        )}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default IndustryCard;