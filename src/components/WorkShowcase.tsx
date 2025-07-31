import { CardStack } from "@/components/ui/card-stack";

const WorkShowcase = () => {
  const workImages = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      title: "CNC Precision Manufacturing",
      description: "High-precision components manufactured with advanced CNC technology"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1565003278532-d7e8c0168d09?auto=format&fit=crop&w=800&q=80",
      title: "TRAUB Component Production",
      description: "Specialized TRAUB parts with micron-level accuracy"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1574694434765-0c4b22de2c66?auto=format&fit=crop&w=800&q=80",
      title: "Quality Control Process",
      description: "Rigorous testing ensures every component meets specifications"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80",
      title: "Factory Operations",
      description: "State-of-the-art manufacturing facility with modern equipment"
    }
  ];

  return (
    <section className="section-modern">
      <div className="container-modern">
        <div className="scroll-reveal">
          <CardStack items={workImages} />
        </div>
      </div>
    </section>
  );
};

export default WorkShowcase;