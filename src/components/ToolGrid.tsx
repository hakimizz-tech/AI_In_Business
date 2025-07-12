
import React, { useState } from "react";
import { tools, categories, businessSizes, Tool } from "@/lib/tools";
import ToolCard from "./ToolCard";
import FadeIn from "./animations/FadeIn";
import { cn } from "@/lib/utils";

const ToolGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeSize, setActiveSize] = useState("all");

  const filteredTools = tools.filter((tool) => {
    const categoryMatch = activeCategory === "all" || tool.category === activeCategory;
    const sizeMatch = activeSize === "all" || tool.businessSize === activeSize || tool.businessSize === "all";
    return categoryMatch && sizeMatch;
  });

  return (
    <section id="tools" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-3xl font-bold text-center mb-12">
            AI-Powered Business Tools
          </h2>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                    activeCategory === category.id
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "bg-secondary hover:bg-secondary/80 text-foreground"
                  )}
                >
                  {category.name}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-2 mt-4 md:mt-0">
              {businessSizes.map((size) => (
                <button
                  key={size.id}
                  onClick={() => setActiveSize(size.id)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                    activeSize === size.id
                      ? "bg-accent text-accent-foreground shadow-sm"
                      : "bg-secondary hover:bg-secondary/80 text-foreground"
                  )}
                >
                  {size.name}
                </button>
              ))}
            </div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.length > 0 ? (
            filteredTools.map((tool, index) => (
              <FadeIn key={tool.id} delay={150 + index * 50}>
                <ToolCard tool={tool} index={index} />
              </FadeIn>
            ))
          ) : (
            <div className="col-span-3 text-center py-16">
              <p className="text-muted-foreground">
                No tools found matching your criteria. Try adjusting your filters.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ToolGrid;
