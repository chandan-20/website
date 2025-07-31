import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const testimonials = [
  {
    quote: "Shree Varshitha Automats delivered exceptional precision for our automotive components. Their CNC machining quality exceeded our expectations and helped us maintain strict quality standards that are crucial for our manufacturing process.",
    name: "Rajesh Kumar",
    designation: "Production Manager at AutoTech Industries",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote: "The TRAUB component manufacturing service provided by SVA is outstanding. Their attention to detail and timely delivery have been crucial for our aerospace projects. The precision and reliability are unmatched in the industry.",
    name: "Dr. Priya Sharma",
    designation: "Chief Engineer at AeroSpace Solutions",
    src: "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote: "Working with Shree Varshitha Automats for our medical device components has been excellent. Their ISO-certified processes ensure the highest quality standards we require for our critical medical applications.",
    name: "Amit Patel",
    designation: "Quality Director at MedTech Innovations",
    src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote: "SVA's rapid prototyping services helped us accelerate our product development significantly. Their technical expertise and quick turnaround times are unmatched. They understand our requirements perfectly.",
    name: "Sneha Reddy",
    designation: "R&D Head at Industrial Systems Ltd",
    src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote: "The precision and consistency of SVA's CNC turning operations have been instrumental in maintaining our production quality. Their commitment to excellence makes them our preferred manufacturing partner.",
    name: "Vikram Singh",
    designation: "Operations Manager at Heavy Industries Corp",
    src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function AnimatedTestimonialsDemo() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-peach-light/30 to-white">
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
        
        <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
      </div>
    </section>
  );
}