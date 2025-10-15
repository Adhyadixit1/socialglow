import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechFlow",
      content: "Working with this team transformed our social media from a cost center to a revenue driver. Our engagement increased 300% in just 3 months.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Founder, FitLife",
      content: "The strategic approach and execution are unmatched. They understand the algorithms and know how to create content that converts.",
      rating: 5,
    },
    {
      name: "Emma Rodriguez",
      role: "CMO, StyleHub",
      content: "Finally, an agency that gets it. They don't just post content - they build communities. Our brand loyalty has never been higher.",
      rating: 5,
    },
    {
      name: "David Park",
      role: "VP Marketing, CloudSync",
      content: "The ROI speaks for itself. We've seen a 250% increase in qualified leads from social media since partnering with them.",
      rating: 5,
    },
    {
      name: "Lisa Thompson",
      role: "Director, BeautyBox",
      content: "Their creativity combined with data-driven strategies is a game-changer. Our TikTok account went from 5K to 500K followers.",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Hear from the brands we've helped scale.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="glass-card rounded-3xl p-6 h-full glow-hover">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-sm mb-6 text-foreground/80">{testimonial.content}</p>
                  <div className="border-t border-border pt-4">
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="glass-card" />
          <CarouselNext className="glass-card" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
