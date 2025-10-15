import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const TrustedBy = () => {
  const logos = [
    { name: "Microsoft", industry: "Technology" },
    { name: "Nike", industry: "Sports & Fashion" },
    { name: "Amazon", industry: "E-commerce" },
    { name: "Tesla", industry: "Automotive" },
    { name: "Apple", industry: "Technology" },
    { name: "Netflix", industry: "Entertainment" },
    { name: "Spotify", industry: "Music" },
    { name: "Airbnb", industry: "Travel" },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-primary/10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trusted By <span className="gradient-text">Industry Leaders</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From startups to Fortune 500 companies, brands trust us to amplify their voice.
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
            {logos.map((logo, index) => (
              <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                <div className="glass-card rounded-3xl p-8 h-40 flex flex-col items-center justify-center glow-hover text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">
                    {logo.name}
                  </div>
                  <div className="text-xs text-muted-foreground">{logo.industry}</div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="glass-card" />
          <CarouselNext className="glass-card" />
        </Carousel>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { value: "98%", label: "Client Satisfaction" },
            { value: "5 Years", label: "Average Partnership" },
            { value: "24/7", label: "Support Available" },
            { value: "50+", label: "Industries Served" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
