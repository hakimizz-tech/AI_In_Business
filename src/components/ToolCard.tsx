
import React from "react";
import { Tool } from "@/lib/tools";
import { cn } from "@/lib/utils";

interface ToolCardProps {
  tool: Tool;
  index: number;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool, index }) => {
  return (
    <div 
      className="group relative flex flex-col h-full overflow-hidden rounded-xl bg-white border border-border/50 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-4px]"
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      {/* Colored accent bar */}
      <div 
        className="h-1.5 w-full" 
        style={{ backgroundColor: tool.color || "#3B82F6" }}
      />
      
      <div className="flex flex-col flex-1 p-6">
        {/* Category badge */}
        <div className="mb-4">
          <span 
            className="inline-block px-2.5 py-0.5 text-xs font-medium rounded-full text-primary bg-primary/10"
          >
            {tool.category.charAt(0).toUpperCase() + tool.category.slice(1)}
          </span>
          <span 
            className="inline-block ml-2 px-2.5 py-0.5 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
          >
            {tool.businessSize === "all" 
              ? "All Businesses" 
              : tool.businessSize.charAt(0).toUpperCase() + tool.businessSize.slice(1)}
          </span>
        </div>
        
        {/* Tool name */}
        <h3 className="text-xl font-semibold mb-2">{tool.name}</h3>
        
        {/* Description */}
        <p className="text-muted-foreground mb-4 flex-1">{tool.description}</p>
        
        {/* Features */}
        <div className="flex flex-wrap gap-2 mt-auto mb-4">
          {tool.features.map((feature, i) => (
            <span 
              key={i} 
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent text-accent-foreground"
            >
              {feature}
            </span>
          ))}
        </div>
        
        {/* Action button */}
        <button 
          className={cn(
            "mt-auto text-sm font-medium py-2 rounded-lg transition-colors duration-200",
            "text-primary hover:bg-primary/5"
          )}
        >
          Learn more
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4 inline-block ml-1 transition-transform duration-200 group-hover:translate-x-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ToolCard;
