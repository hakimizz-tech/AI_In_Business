
import React from "react";
import FadeIn from "./animations/FadeIn";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/50 to-background/20 pointer-events-none" />
      
      {/* Background shapes */}
      <div className="absolute top-[20%] right-[10%] w-64 h-64 rounded-full bg-primary/5 animate-float pointer-events-none" />
      <div className="absolute bottom-[15%] left-[5%] w-40 h-40 rounded-full bg-primary/10 animate-float pointer-events-none" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-[30%] right-[20%] w-24 h-24 rounded-full bg-primary/5 animate-float pointer-events-none" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <span className="inline-block px-3 py-1 mb-5 text-xs font-medium rounded-full bg-primary/10 text-primary">
              AI-Powered Business Solutions
            </span>
          </FadeIn>
          
          <FadeIn delay={100}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Optimize Your Business with{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Intelligent Tools
              </span>
            </h1>
          </FadeIn>
          
          <FadeIn delay={200}>
            <p className="text-lg md:text-xl text-foreground/70 mb-10 max-w-2xl mx-auto">
              Discover AI-powered solutions that streamline operations, automate tasks,
              and provide valuable insights to drive your business forward.
            </p>
          </FadeIn>
          
          <FadeIn delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#tools"
                className="px-6 py-3 rounded-full bg-primary text-white font-medium shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:translate-y-[-2px] transition-all duration-300 min-w-[160px]"
              >
                Explore Tools
              </a>
              <a
                href="#features"
                className="px-6 py-3 rounded-full bg-white text-primary border border-primary/30 font-medium hover:bg-primary/5 transition-all duration-300 min-w-[160px]"
              >
                Learn More
              </a>
            </div>
          </FadeIn>
          
          <FadeIn delay={500}>
            <div className="mt-16 text-sm text-foreground/50 flex flex-wrap justify-center gap-8">
              <span>Financial Analysis</span>
              <span>Inventory Management</span>
              <span>Automated Reporting</span>
              <span>Document Processing</span>
              <span>Workflow Optimization</span>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Hero;
