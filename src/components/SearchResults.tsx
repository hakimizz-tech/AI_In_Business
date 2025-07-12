
import React from "react";
import { Tool } from "@/lib/tools";
import ToolCard from "./ToolCard";
import FadeIn from "./animations/FadeIn";

interface SearchResultsProps {
  results: Tool[];
  isLoading: boolean;
  error: string | null;
}

const SearchResults: React.FC<SearchResultsProps> = ({ results, isLoading, error }) => {
  if (isLoading) {
    return (
      <div className="my-8 text-center">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
        <p className="mt-2 text-muted-foreground">Searching for AI tools...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="my-8 p-4 bg-destructive/10 rounded-lg text-center">
        <p className="text-destructive font-medium">Error: {error}</p>
        <p className="text-sm text-muted-foreground mt-2">
          Please check your API key and try again.
        </p>
      </div>
    );
  }

  if (results.length === 0) {
    return null;
  }

  return (
    <div className="mt-8">
      <FadeIn>
        <h3 className="text-2xl font-bold mb-6">Search Results</h3>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {results.map((tool, index) => (
          <FadeIn key={tool.id} delay={150 + index * 50}>
            <ToolCard tool={tool} index={index} />
          </FadeIn>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
