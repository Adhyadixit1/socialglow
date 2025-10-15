import { ExternalLink } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "Fashion Brand Launch",
      category: "Instagram Growth",
      metric: "2.5M Reach",
      description: "Viral campaign that generated 500K+ followers in 3 months",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
    },
    {
      title: "Tech Startup Scale",
      category: "LinkedIn Strategy",
      metric: "150% ROI",
      description: "B2B lead generation through targeted content",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=300&fit=crop",
    },
    {
      title: "E-commerce Blast",
      category: "TikTok Viral",
      metric: "10M Views",
      description: "Product launch that sold out in 48 hours",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
    },
    {
      title: "Fitness Influencer",
      category: "Multi-Platform",
      metric: "1M+ Followers",
      description: "Built personal brand from 10K to 1M+ across platforms",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
    },
    {
      title: "SaaS Product",
      category: "Twitter Growth",
      metric: "300% Engagement",
      description: "Community-driven growth through authentic conversations",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    },
    {
      title: "Beauty Brand",
      category: "YouTube Strategy",
      metric: "5M+ Views",
      description: "Educational content series that built brand authority",
      image: "https://images.unsplash.com/photo-1559599101-f09722fb4948?w=400&h=300&fit=crop",
    },
  ];

  return (
    <section id="portfolio" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real results for real businesses. See how we've transformed brands across industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card rounded-3xl p-6 glow-hover group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl mb-4 overflow-hidden group-hover:scale-105 transition-transform">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-primary">{project.category}</span>
                  <span className="text-xs font-bold text-foreground">{project.metric}</span>
                </div>
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
