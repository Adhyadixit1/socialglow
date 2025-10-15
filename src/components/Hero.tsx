import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";

const Hero = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout>();
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const handleScrollStart = () => {
      if (!isScrolling) {
        setIsScrolling(true);
        if (iframeRef.current) {
          iframeRef.current.contentWindow?.postMessage({ action: 'pause' }, '*');
        }
      }

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
        if (iframeRef.current) {
          iframeRef.current.contentWindow?.postMessage({ action: 'play' }, '*');
        }
      }, 200); // Slightly longer delay for smoother transition
    };

    const handleTouchStart = () => {
      if (!isScrolling) {
        setIsScrolling(true);
        if (iframeRef.current) {
          iframeRef.current.contentWindow?.postMessage({ action: 'pause' }, '*');
        }
      }
    };

    const handleTouchEnd = () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
        if (iframeRef.current) {
          iframeRef.current.contentWindow?.postMessage({ action: 'play' }, '*');
        }
      }, 200);
    };

    window.addEventListener('scroll', handleScrollStart, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScrollStart);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  return (
    <section className="relative min-h-[70vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Spline 3D Background - Full Screen */}
      <div className="absolute inset-0 z-0">
        <iframe
          ref={iframeRef}
          src="https://my.spline.design/rememberallrobot-jujF0mLzhzQrP9monGmAzLV1/"
          frameBorder="0"
          width="100%"
          height="100%"
          title="3D Robot Animation Background"
          className={`w-full h-full transition-all duration-200 ${isScrolling ? 'pointer-events-none touch-none' : 'pointer-events-auto'}`}
        />
      </div>
      {/* Transparent overlay to capture scroll events during scrolling */}
      {isScrolling && <div className="absolute inset-0 z-5 pointer-events-auto" />}

      {/* Content - Split to sides */}
      <div className="container mx-auto px-4 relative z-10 pt-20 pointer-events-none">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[80vh] md:min-h-[80vh]">
          {/* Left Side Content - Simplified for mobile */}
          <div className="lg:col-span-4 space-y-4 fade-in-up text-center lg:text-left pointer-events-auto">
            <h2 className="text-xl md:text-3xl font-bold">
              Your Social Media
              <span className="gradient-text block mt-2">Growth Partner</span>
            </h2>
            <p className="text-sm md:text-base text-foreground/90 max-w-md mx-auto lg:mx-0">
              We architect viral movements that turn followers into communities.
            </p>
            <div className="space-y-3">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 glow-hover rounded-full px-6 py-5 text-sm md:text-base w-full lg:w-auto">
                Start Growing Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <div className="glass-card rounded-3xl p-4 text-center glow-hover hidden md:block">
                <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">500+</div>
                <div className="text-xs text-foreground/80">Brands Scaled</div>
              </div>
              <div className="glass-card rounded-3xl p-4 text-center glow-hover hidden md:block">
                <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">250M+</div>
                <div className="text-xs text-foreground/80">Total Reach</div>
              </div>
            </div>
          </div>

          {/* Center Empty Space - Spline visible here */}
          <div className="lg:col-span-4 hidden lg:block" />

          {/* Right Side Content - Hidden on mobile */}
          <div className="lg:col-span-4 space-y-4 fade-in-up text-center lg:text-right pointer-events-auto hidden lg:block" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-2xl md:text-3xl font-bold">
              Transform Your
              <span className="gradient-text block mt-2">Brand Presence</span>
            </h2>
            <p className="text-base text-foreground/90 max-w-md mx-auto lg:ml-auto lg:mr-0">
              Data-driven strategies that deliver exponential growth.
            </p>
            <div className="space-y-3">
              <Button variant="outline" className="glass-card border-primary/50 text-foreground hover:bg-primary/10 rounded-full px-6 py-5 text-base w-full lg:w-auto">
                View Case Studies
              </Button>
              <div className="glass-card rounded-3xl p-4 text-center glow-hover">
                <div className="text-3xl font-bold gradient-text mb-1">85%</div>
                <div className="text-xs text-foreground/80">Average Growth</div>
              </div>
              <div className="glass-card rounded-3xl p-4 text-center glow-hover">
                <div className="text-3xl font-bold gradient-text mb-1">3.2x</div>
                <div className="text-xs text-foreground/80">ROI Average</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blurry strip at bottom to blend with next section and hide Spline watermark */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background via-background/50 to-transparent backdrop-blur-sm z-10"></div>
    </section>
  );
};

export default Hero;
