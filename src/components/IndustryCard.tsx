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
  return (
    <div className={cn("industry-card max-w-[320px] mx-auto", className)}>
      <div className={cn("industry-card-content", variant)}>
        <div className="industry-card-icon text-white">
          {icon}
        </div>
        
        <h3 className="industry-card-title text-white">
          {title}
        </h3>
        
        <p className="industry-card-description text-white">
          {description}
        </p>
      </div>
    </div>
  );
};

export default IndustryCard;