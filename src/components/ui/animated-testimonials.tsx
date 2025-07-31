"use client"

import React, { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { cn } from "@/lib/utils"

interface Testimonial {
  quote: string
  name: string
  title: string
  image: string
}

interface AnimatedTestimonialsProps {
  testimonials: Testimonial[]
  autoplay?: boolean
  className?: string
}

export function AnimatedTestimonials({
  testimonials,
  autoplay = true,
  className,
}: AnimatedTestimonialsProps) {
  const [active, setActive] = useState(0)

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length)
  }

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const isActive = (index: number) => {
    return index === active
  }

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000)
      return () => clearInterval(interval)
    }
  }, [autoplay])

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10
  }

  return (
    <div className={cn("w-full", className)}>
      <div className="relative h-96 w-full">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 origin-bottom transition-all duration-500 ease-in-out",
              isActive(index)
                ? "z-40 opacity-100"
                : "z-20 opacity-40 hover:opacity-60"
            )}
            style={{
              transform: isActive(index)
                ? "none"
                : `scale(${1 - Math.abs(active - index) * 0.1}) rotateY(${randomRotateY()}deg)`,
            }}
          >
            <div className="flex h-full w-full flex-col justify-between rounded-3xl bg-white p-8 shadow-2xl">
              <div className="flex items-start justify-between">
                <Quote className="h-8 w-8 text-primary/60" />
              </div>
              
              <div className="my-8">
                <blockquote className="text-lg font-medium text-neutral-600 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
              </div>

              <div className="flex items-center gap-4">
                <div className="h-12 w-12 overflow-hidden rounded-full bg-neutral-100">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-neutral-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-neutral-500">
                    {testimonial.title}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-4 pt-8">
        <button
          onClick={handlePrev}
          className="rounded-full bg-primary/10 p-2 text-primary transition-colors hover:bg-primary hover:text-white"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={cn(
                "h-2 w-2 rounded-full transition-all",
                isActive(index)
                  ? "bg-primary w-8"
                  : "bg-primary/20 hover:bg-primary/40"
              )}
            />
          ))}
        </div>
        
        <button
          onClick={handleNext}
          className="rounded-full bg-primary/10 p-2 text-primary transition-colors hover:bg-primary hover:text-white"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}