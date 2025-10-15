import { Instagram, Twitter, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks = {
    Services: ["Social Media Strategy", "Content Creation", "Community Management", "Paid Advertising", "Analytics & Reporting"],
    Company: ["About Us", "Our Team", "Careers", "Case Studies", "Blog"],
    Resources: ["Free Audit", "Growth Guide", "Webinars", "Templates", "Newsletter"],
    Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR"],
  };

  const pathMap: Record<string, string> = {
    // Services
    "Social Media Strategy": "/social-media-strategy",
    "Content Creation": "/content-creation",
    "Community Management": "/community-management",
    "Paid Advertising": "/paid-advertising",
    "Analytics & Reporting": "/analytics-reporting",
    // Company
    "About Us": "/about-us",
    "Our Team": "/our-team",
    Careers: "/careers",
    "Case Studies": "/case-studies",
    Blog: "/blog",
    // Resources
    "Free Audit": "/free-audit",
    "Growth Guide": "/growth-guide",
    Webinars: "/webinars",
    Templates: "/templates",
    Newsletter: "/newsletter",
    // Legal
    "Privacy Policy": "/privacy-policy",
    "Terms of Service": "/terms-of-service",
    "Cookie Policy": "/cookie-policy",
    GDPR: "/gdpr",
  };

  return (
    <footer className="relative pt-24 pb-12 border-t border-border">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-2xl font-bold gradient-text">SocialGlow</h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              Transforming brands through strategic social media marketing. Your growth is our mission.
            </p>
            
            <div className="space-y-2">
              <a href="mailto:hello@socialglow.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="w-4 h-4" />
                hello@socialglow.com
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="w-4 h-4" />
                +1 (234) 567-890
              </a>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                San Francisco, CA
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              {[Instagram, Twitter, Linkedin, Youtube].map((Icon, i) => (
                <button
                  key={i}
                  className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors glow-hover"
                >
                  <Icon className="w-5 h-5 text-primary" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links Columns */}
          {Object.entries(quickLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      to={pathMap[link] || "#"}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="glass-card rounded-3xl p-8 mb-12">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <h3 className="text-2xl font-bold">Stay in the Loop</h3>
            <p className="text-muted-foreground">
              Get weekly insights, growth tips, and exclusive case studies delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-full font-semibold glow-hover whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © 2024 SocialGlow. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link to="/terms-of-service" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </Link>
            <Link to="/cookie-policy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
