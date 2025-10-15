import { Search, Lightbulb, Rocket, BarChart } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: "Discovery & Audit",
      description: "We deep-dive into your brand, audience, and current social presence to identify opportunities.",
      details: ["Competitor analysis", "Audience research", "Content audit", "Platform optimization"],
    },
    {
      icon: Lightbulb,
      title: "Strategy Development",
      description: "Custom roadmap designed specifically for your goals, industry, and target audience.",
      details: ["Content calendar", "Platform strategy", "Growth tactics", "KPI definition"],
    },
    {
      icon: Rocket,
      title: "Launch & Execute",
      description: "We create, publish, and manage all content while optimizing for maximum engagement.",
      details: ["Content creation", "Community management", "Paid campaigns", "Influencer partnerships"],
    },
    {
      icon: BarChart,
      title: "Analyze & Scale",
      description: "Continuous optimization based on data insights to scale what works and improve what doesn't.",
      details: ["Performance tracking", "A/B testing", "Strategy refinement", "Growth acceleration"],
    },
  ];

  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How We <span className="gradient-text">Make Magic</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our proven 4-step process that turns social media into your biggest growth channel.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="relative glass-card rounded-3xl p-6 glow-hover"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Step number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-2xl bg-primary glow-primary flex items-center justify-center text-xl font-bold">
                    {index + 1}
                  </div>

                  <div className="pt-4">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>

                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{step.description}</p>

                    <ul className="space-y-2">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 text-center">
          <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-full font-semibold glow-hover">
            Start Your Growth Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
