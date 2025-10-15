import { Linkedin, Twitter } from "lucide-react";

const Team = () => {
  const team = [
    {
      name: "Marcus Chen",
      role: "Head of Strategy",
      experience: "10 years in digital marketing",
      expertise: "Multi-platform campaigns, viral content strategy",
      bio: "Former VP at major ad agency, led campaigns for Fortune 500 brands.",
      image: "https://cdn.mos.cms.futurecdn.net/ynywUkESSVXQwFDTsf6AKX-1200-80.jpg",
    },
    {
      name: "Sofia Rodriguez",
      role: "Creative Director",
      experience: "8 years in content creation",
      expertise: "Video production, brand storytelling, visual design",
      bio: "Award-winning creative with campaigns featured in industry publications.",
      image: "https://images.squarespace-cdn.com/content/v1/5d937e59b96b590bddd5c63d/1587013907010-F5IS6KQNCRR6MYPHUNBM/Sofia+Rodriguez.jpeg?format=1000w",
    },
    {
      name: "James Wilson",
      role: "Analytics Lead",
      experience: "12 years in data science",
      expertise: "Performance tracking, predictive modeling, ROI optimization",
      bio: "Ph.D. in Data Science, previously at Google Analytics.",
      image: "https://www.geschichte.uni-konstanz.de/fileadmin/_processed_/0/e/csm_P275-19_Wilson_James_copy_4cce6ef079.jpg",
    },
    {
      name: "Priya Patel",
      role: "Community Manager",
      experience: "6 years in social media",
      expertise: "Community building, engagement strategies, crisis management",
      bio: "Built communities from 0 to 1M+ followers across multiple platforms.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "Alex Thompson",
      role: "Paid Media Specialist",
      experience: "9 years in paid advertising",
      expertise: "Facebook Ads, TikTok Ads, LinkedIn Campaigns",
      bio: "Managed $50M+ in ad spend with consistent 3x+ ROAS.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "Nina Kowalski",
      role: "Content Strategist",
      experience: "7 years in content marketing",
      expertise: "SEO, content planning, editorial strategy",
      bio: "Created content strategies that generated 100M+ organic impressions.",
      image: "https://www.headshotphoto.io/images/blogs/architectural-background.jpg",
    },
  ];

  return (
    <section id="team" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meet The <span className="gradient-text">Dream Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experts who eat, sleep, and breathe social media. Your success is our obsession.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="glass-card rounded-3xl p-6 glow-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 mb-4 overflow-hidden glow-primary">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="space-y-3">
                <div>
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-sm text-primary">{member.role}</p>
                </div>

                <div className="text-xs text-muted-foreground">
                  <p className="font-semibold mb-1">{member.experience}</p>
                  <p className="mb-2">{member.expertise}</p>
                </div>

                <p className="text-sm text-foreground/80">{member.bio}</p>

                <div className="flex gap-2 pt-2">
                  <button className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                    <Linkedin className="w-4 h-4 text-primary" />
                  </button>
                  <button className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                    <Twitter className="w-4 h-4 text-primary" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
