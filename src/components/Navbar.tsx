import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const whatsappMessage = `Hi, I'm ${name} (${email}). ${message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappURL = `https://wa.me/918005652230?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
    setIsModalOpen(false);
    setFormData({ name: '', email: '', message: '' });
  };

  const navLinks = [
    { name: "Portfolio", href: "#portfolio" },
    { name: "Results", href: "#results" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "About", href: "#about" },
    { name: "Team", href: "#team" },
  ];

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 md:left-[432px] md:transform-none z-50 transition-all duration-300 ${
          isScrolled ? "w-auto" : "w-auto"
        }`}
      >
        <div className="glass-nav rounded-full px-6 py-4 flex items-center gap-8">
          <div className="text-xl font-bold gradient-text">SocialGlow</div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <Button
            className="hidden lg:flex bg-primary text-primary-foreground hover:bg-primary/90 glow-hover rounded-full px-6"
            onClick={() => setIsModalOpen(true)}
          >
            Get Started
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground ml-auto"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={`lg:hidden mt-4 glass-nav rounded-3xl p-6 space-y-4 transition-all duration-300 ${
            isMobileMenuOpen ? 'w-screen left-0 -ml-4' : 'w-auto'
          }`}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-hover rounded-full"
              onClick={() => {
                setIsModalOpen(true);
                setIsMobileMenuOpen(false);
              }}
            >
              Get Started
            </Button>
          </div>
        )}
      </nav>

      {/* Get Started Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="glass-card rounded-3xl p-8 max-w-md w-full mx-4">
            <h2 className="text-2xl font-bold mb-4 gradient-text">Get Started</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-background/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-background/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-background/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="flex gap-4">
                <Button type="submit" className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 glow-hover rounded-full">
                  Send to WhatsApp
                </Button>
                <Button type="button" variant="outline" onClick={() => setIsModalOpen(false)} className="rounded-full">
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
