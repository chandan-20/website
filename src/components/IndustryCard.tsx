import React from "react";
import { cn } from "@/lib/utils";

interface IndustryCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'quaternary';
}

const IndustryCard = ({ title, description, icon, className, variant = 'primary' }: IndustryCardProps) => {
  const variants = {
    primary: {
      bg: 'hsl(var(--primary))',
      beforeBg: 'hsl(var(--primary) / 0.3)',
      afterBg: 'hsl(var(--primary) / 0.15)'
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

  return (
    <div
      className={cn(
        "card group relative flex items-center justify-center w-full max-w-[320px] mx-auto rounded-[24px] transition-all duration-[480ms] cubic-bezier(0.23, 1, 0.32, 1) hover:translate-y-[-16px]",
        className
      )}
      style={{ lineHeight: 1.6 }}
    >
      <div
        className="content relative flex flex-col items-start gap-6 p-9 rounded-[22px] text-white overflow-hidden w-full aspect-square transition-all duration-[480ms] cubic-bezier(0.23, 1, 0.32, 1)"
        style={{ 
          background: variants[variant].bg,
        }}
      >
        {/* Before pseudo element - exactly matching the reference */}
        <div
          className="absolute top-[-4%] left-1/2 w-[90%] h-[90%] transform translate-x-[-50%] origin-bottom z-[-1] rounded-[inherit] transition-all duration-[480ms] cubic-bezier(0.23, 1, 0.32, 1) group-hover:rotate-[-8deg] group-hover:top-0 group-hover:w-full group-hover:h-full"
          style={{
            background: variants[variant].beforeBg,
          }}
        />
        
        {/* After pseudo element - exactly matching the reference */}
        <div
          className="absolute top-[-8%] left-1/2 w-[80%] h-[80%] transform translate-x-[-50%] origin-bottom z-[-2] rounded-[inherit] transition-all duration-[480ms] cubic-bezier(0.23, 1, 0.32, 1) group-hover:rotate-[8deg] group-hover:top-0 group-hover:w-full group-hover:h-full"
          style={{
            background: variants[variant].afterBg,
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