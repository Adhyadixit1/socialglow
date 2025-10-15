import { Quote } from "lucide-react";

const FounderStory = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image side */}
            <div className="relative fade-in-up">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 glow-primary overflow-hidden">
                <img
                  src="https://media.licdn.com/dms/image/v2/D4E03AQEwNG1A_JQIdA/profile-displayphoto-scale_400_400/B4EZfKekECHYAs-/0/1751448700847?e=2147483647&v=beta&t=oGIy5nmJxvdrBg23yoVbjQ550j6GaS9S96TBjHnOLGU"
                  alt="Alicia Martinez, Founder & CEO"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content side */}
            <div className="space-y-6 fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 glow-primary">
                <Quote className="w-8 h-8 text-primary" />
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold">
                Building Brands, <span className="gradient-text">One Post at a Time</span>
              </h2>

              <div className="space-y-4 text-foreground/80">
                <p>
                  My journey started in 2015 when I was managing social media for a small local coffee shop. 
                  I saw firsthand how powerful a well-crafted social media strategy could be - that coffee shop 
                  went from serving 50 customers a day to having lines out the door.
                </p>
                
                <p>
                  That's when I realized: <span className="font-semibold text-foreground">social media isn't just about posting 
                  pretty pictures. It's about creating genuine connections, telling compelling stories, and building 
                  communities that drive real business results.</span>
                </p>
                
                <p>
                  Fast forward to today, and we've helped over 500 brands achieve exponential growth. But the mission 
                  remains the same: empowering businesses to reach their full potential through strategic, data-driven 
                  social media marketing.
                </p>

                <p>
                  We don't believe in vanity metrics or empty promises. We believe in <span className="font-semibold text-foreground">
                  authentic engagement, sustainable growth, and building brands that people genuinely care about.</span>
                </p>
              </div>

              <div className="glass-card rounded-2xl p-6 border-l-4 border-primary">
                <p className="italic text-foreground/90">
                  "Success in social media isn't about going viral once. It's about creating a system that 
                  consistently delivers value to your audience and grows your business day after day."
                </p>
                <p className="text-sm text-muted-foreground mt-2">- Alicia Martinez</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderStory;
