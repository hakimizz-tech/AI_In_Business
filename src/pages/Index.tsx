
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ToolGrid from "@/components/ToolGrid";
import FeatureSection from "@/components/FeatureSection";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import ApiKeyInput from "@/components/ApiKeyInput";
import SearchResults from "@/components/SearchResults";
import { Tool } from "@/lib/tools";
import { searchAITools } from "@/lib/openai";
import { toast } from "sonner";
import FadeIn from "@/components/animations/FadeIn";

const Index = () => {
  const [apiKey, setApiKey] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Tool[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchError, setSearchError] = useState<string | null>(null);

  useEffect(() => {
    // Load API key from local storage
    const savedApiKey = localStorage.getItem("openai_api_key");
    if (savedApiKey) {
      setApiKey(savedApiKey);
    }
    
    // Smooth scroll implementation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const href = this.getAttribute('href');
        if (!href) return;
        
        const target = document.querySelector(href);
        if (!target) return;
        
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.scrollY - 80,
          behavior: 'smooth'
        });
      });
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', () => {});
      });
    };
  }, []);

  const handleSearch = async (query: string) => {
    if (!apiKey) {
      toast.error("Please set your OpenAI API key first");
      return;
    }

    setIsSearching(true);
    setSearchError(null);

    try {
      const results = await searchAITools(query, apiKey);
      setSearchResults(results);
      
      if (results.length === 0) {
        toast.info("No AI tools found matching your query");
      } else {
        toast.success(`Found ${results.length} AI tools that might help`);
      }
    } catch (error) {
      console.error("Search error:", error);
      setSearchError(error instanceof Error ? error.message : "Unknown error occurred");
      toast.error("Failed to search for AI tools");
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <section id="search" className="py-16 bg-accent">
          <div className="container mx-auto px-4">
            <FadeIn>
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">
                  Find More AI Tools for Your Business
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                  Not finding what you need? Search for specialized AI tools tailored to your specific business requirements.
                </p>
                <div className="flex justify-center mb-4">
                  <ApiKeyInput onApiKeySet={setApiKey} hasApiKey={!!apiKey} />
                </div>
                <div className="flex justify-center">
                  <SearchBar onSearch={handleSearch} isLoading={isSearching} />
                </div>
              </div>
            </FadeIn>
            <SearchResults results={searchResults} isLoading={isSearching} error={searchError} />
          </div>
        </section>
        <ToolGrid />
        <FeatureSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
