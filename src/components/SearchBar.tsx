
import React, { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SearchBarProps {
  onSearch: (query: string) => void;
  isLoading: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, isLoading }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-2xl gap-2">
      <div className="relative flex-grow">
        <Input
          type="text"
          placeholder="Search for AI tools (e.g., 'customer service automation')"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-3 pr-10"
        />
        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
          <Search size={16} className="text-muted-foreground" />
        </div>
      </div>
      <Button type="submit" disabled={!query.trim() || isLoading}>
        {isLoading ? "Searching..." : "Search"}
      </Button>
    </form>
  );
};

export default SearchBar;
