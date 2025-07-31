import { AnimatedTestimonials } from "@/components/ui/animated-testimonials"

const testimonials = [
  {
    quote: "Shree Varshitha Automats delivered exceptional precision for our automotive components. Their CNC machining quality exceeded our expectations and helped us maintain strict quality standards.",
    name: "Rajesh Kumar",
    title: "Production Manager, AutoTech Industries",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    quote: "The TRAUB component manufacturing service provided by SVA is outstanding. Their attention to detail and timely delivery have been crucial for our aerospace projects.",
    name: "Dr. Priya Sharma",
    title: "Chief Engineer, AeroSpace Solutions",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
  },
  {
    quote: "Working with Shree Varshitha Automats for our medical device components has been excellent. Their ISO-certified processes ensure the highest quality standards we require.",
    name: "Amit Patel",
    title: "Quality Director, MedTech Innovations",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    quote: "SVA's rapid prototyping services helped us accelerate our product development significantly. Their technical expertise and quick turnaround times are unmatched.",
    name: "Sneha Reddy",
    title: "R&D Head, Industrial Systems Ltd",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  },
  {
    quote: "The precision and consistency of SVA's CNC turning operations have been instrumental in maintaining our production quality. Highly recommended for any precision manufacturing needs.",
    name: "Vikram Singh",
    title: "Operations Manager, Heavy Industries Corp",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
  }
]

export default function AnimatedTestimonialsDemo() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-peach-light to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-primary/10 text-primary font-medium px-4 py-2 rounded-full text-sm mb-6">
            Client Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-neutral-900">
            What Our Clients Say
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Discover why industry leaders choose Shree Varshitha Automats for their precision manufacturing needs
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <AnimatedTestimonials testimonials={testimonials} />
        </div>
      </div>
    </section>
  )
}