import { TrendingUp, Users, Target, Zap } from "lucide-react";

const Results = () => {
  const stats = [
    {
      icon: Users,
      value: "500+",
      label: "Brands Scaled",
      description: "Across all industries",
    },
    {
      icon: TrendingUp,
      value: "250M+",
      label: "Total Reach",
      description: "Combined audience",
    },
    {
      icon: Target,
      value: "85%",
      label: "Average Growth",
      description: "Within first 90 days",
    },
    {
      icon: Zap,
      value: "3.2x",
      label: "ROI Average",
      description: "Client returns",
    },
  ];

  return (
    <section id="results" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Results That <span className="gradient-text">Speak</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Numbers don't lie. Here's what we've achieved for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="glass-card rounded-3xl p-8 text-center glow-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4 glow-primary">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 glass-card rounded-3xl p-8 md:p-12 glow-primary">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to become our next <span className="gradient-text">success story</span>?
              </h3>
              <p className="text-muted-foreground mb-6">
                Join hundreds of brands that trusted us to transform their social media presence into a revenue-generating machine.
              </p>
              <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-full font-semibold glow-hover">
                Let's Talk Growth
              </button>
            </div>
            <div className="space-y-4">
              {[
                "Custom strategy tailored to your brand",
                "Dedicated account manager",
                "Real-time analytics dashboard",
                "Weekly performance reports",
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
