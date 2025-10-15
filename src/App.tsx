import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SocialMediaStrategy from "./pages/SocialMediaStrategy";
import ContentCreation from "./pages/ContentCreation";
import CommunityManagement from "./pages/CommunityManagement";
import PaidAdvertising from "./pages/PaidAdvertising";
import AnalyticsReporting from "./pages/AnalyticsReporting";
import AboutUs from "./pages/AboutUs";
import OurTeam from "./pages/OurTeam";
import Careers from "./pages/Careers";
import CaseStudies from "./pages/CaseStudies";
import Blog from "./pages/Blog";
import FreeAudit from "./pages/FreeAudit";
import GrowthGuide from "./pages/GrowthGuide";
import Webinars from "./pages/Webinars";
import Templates from "./pages/Templates";
import Newsletter from "./pages/Newsletter";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import GDPR from "./pages/GDPR";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* Services */}
          <Route path="/social-media-strategy" element={<SocialMediaStrategy />} />
          <Route path="/content-creation" element={<ContentCreation />} />
          <Route path="/community-management" element={<CommunityManagement />} />
          <Route path="/paid-advertising" element={<PaidAdvertising />} />
          <Route path="/analytics-reporting" element={<AnalyticsReporting />} />
          {/* Company */}
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/blog" element={<Blog />} />
          {/* Resources */}
          <Route path="/free-audit" element={<FreeAudit />} />
          <Route path="/growth-guide" element={<GrowthGuide />} />
          <Route path="/webinars" element={<Webinars />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/newsletter" element={<Newsletter />} />
          {/* Legal */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/gdpr" element={<GDPR />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
