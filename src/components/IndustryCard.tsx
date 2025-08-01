import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface IndustryCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'quaternary';
}

const IndustryCard = ({ title, description, icon, className, variant = 'primary' }: IndustryCardProps) => {
  const [isActivated, setIsActivated] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const variants = {
    primary: {
      bg: 'hsl(var(--primary))',
      beforeBg: 'hsl(var(--primary) / 0.7)',
      afterBg: 'hsl(var(--primary) / 0.4)'
    },
    secondary: {
      bg: '#22c55e',
      beforeBg: '#86efac',
      afterBg: '#bbf7d0'
    },
    tertiary: {
      bg: '#f59e0b',
      beforeBg: '#fcd34d',
      afterBg: '#fef3c7'
    },
    quaternary: {
      bg: '#8b5cf6',
      beforeBg: '#c4b5fd',
      afterBg: '#e9d5ff'
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsActivated(true);
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
        "relative flex items-center justify-center w-full max-w-[320px] mx-auto rounded-3xl transition-all duration-[480ms] cubic-bezier(0.23, 1, 0.32, 1)",
        isActivated && "transform translate-y-[-16px]",
        className
      )}
    >
      <div
        className="relative flex flex-col items-start gap-6 p-9 rounded-[22px] text-white overflow-hidden w-full aspect-square transition-all duration-[480ms] cubic-bezier(0.23, 1, 0.32, 1)"
        style={{ 
          background: variants[variant].bg,
        }}
      >
        {/* Before pseudo element */}
        <div
          className={cn(
            "absolute top-[-4%] left-1/2 w-[90%] h-[90%] transform translate-x-[-50%] z-[-1] origin-bottom rounded-[inherit] transition-all duration-[480ms] cubic-bezier(0.23, 1, 0.32, 1)",
            isActivated && "rotate-[-8deg] top-0 w-full h-full"
          )}
          style={{
            background: variants[variant].beforeBg
          }}
        />
        
        {/* After pseudo element */}
        <div
          className={cn(
            "absolute top-[-8%] left-1/2 w-[80%] h-[80%] transform translate-x-[-50%] z-[-2] origin-bottom rounded-[inherit] transition-all duration-[480ms] cubic-bezier(0.23, 1, 0.32, 1)",
            isActivated && "rotate-[8deg] top-0 w-full h-full"
          )}
          style={{
            background: variants[variant].afterBg
          }}
        />

        {/* Icon */}
        <div className="w-12 h-12 text-white z-10">
          {icon}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold z-10 leading-tight">
          {title}
        </h3>

        {/* Description */}
        <p className="z-10 opacity-100 text-lg leading-relaxed transition-all duration-[480ms] cubic-bezier(0.23, 1, 0.32, 1)">
          {description}
        </p>
      </div>
    </div>
  );
};

export default IndustryCard;