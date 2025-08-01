import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface AnimatedServiceCardProps {
  title: string;
  content: string;
  icon: React.ReactNode;
  className?: string;
}

const AnimatedServiceCard = ({ title, content, icon, className }: AnimatedServiceCardProps) => {
  const [isContentVisible, setIsContentVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsContentVisible(true);
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
        "relative w-full max-w-xs h-48 rounded-xl transition-all duration-700 cubic-bezier(0.23, 1, 0.320, 1) cursor-pointer overflow-hidden",
        "bg-gradient-to-br from-primary via-primary/90 to-primary/80",
        "flex items-center justify-center shadow-lg",
        className
      )}
    >
      {/* Icon - always visible, hides when content shows */}
      <div 
        className={cn(
          "text-white transition-all duration-700 cubic-bezier(0.23, 1, 0.320, 1)",
          isContentVisible ? "scale-0 rotate-[-45deg] opacity-0" : "scale-100 rotate-0 opacity-100"
        )}
      >
        {icon}
      </div>

      {/* Content - shows when scrolled into view */}
      <div
        className={cn(
          "absolute inset-0 p-6 bg-white transition-all duration-700 cubic-bezier(0.23, 1, 0.320, 1)",
          "flex flex-col justify-center",
          isContentVisible 
            ? "transform translate-x-0 translate-y-0 rotate-0 opacity-100" 
            : "transform translate-x-[-50%] translate-y-[-50%] rotate-[-45deg] opacity-0"
        )}
        style={{
          transformOrigin: 'center center'
        }}
      >
        <h3 className="text-xl font-bold text-gray-800 mb-3 leading-tight">
          {title}
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          {content}
        </p>
      </div>
    </div>
  );
};

export default AnimatedServiceCard;