
import { Tool } from "./tools";

const OPENAI_API_URL = "https://api.openai.com/v1/chat/completions";

export async function searchAITools(query: string, apiKey: string): Promise<Tool[]> {
  if (!apiKey) {
    throw new Error("OpenAI API key is required");
  }

  const prompt = `
    I'm looking for AI tools that can help with the following business need: "${query}".
    
    Please provide a list of 3-5 relevant AI tools that can address this need.
    
    For each tool, include:
    1. A unique ID (lowercase with hyphens)
    2. The tool name
    3. A brief description of what it does specifically for this business need
    4. The most relevant category (must be one of: finance, inventory, automation, reporting, accounting)
    5. The business size it's best for (must be one of: small, midsize, enterprise, all)
    6. Three key features as bullet points
    7. A color hex code for visual representation
    
    Format the response as a valid JSON array that matches this TypeScript interface:
    
    interface Tool {
      id: string;
      name: string;
      description: string;
      category: "finance" | "inventory" | "automation" | "reporting" | "accounting";
      businessSize: "small" | "midsize" | "enterprise" | "all";
      features: string[];
      color?: string;
    }
    
    Only return the JSON array, nothing else.
  `;

  try {
    const response = await fetch(OPENAI_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || "Failed to search for AI tools");
    }

    const data = await response.json();
    const content = data.choices[0]?.message?.content;

    if (!content) {
      throw new Error("No content in response");
    }

    // Extract JSON from the response
    const jsonMatch = content.match(/\[[\s\S]*\]/);
    if (!jsonMatch) {
      throw new Error("Could not parse JSON from response");
    }

    const tools = JSON.parse(jsonMatch[0]) as Tool[];
    
    // Ensure each tool has required properties
    return tools.map(tool => ({
      id: tool.id || `tool-${Math.random().toString(36).substring(2, 9)}`,
      name: tool.name,
      description: tool.description,
      category: tool.category,
      businessSize: tool.businessSize,
      features: tool.features || [],
      color: tool.color || `#${Math.floor(Math.random()*16777215).toString(16)}`,
    }));
  } catch (error) {
    console.error("Error searching for AI tools:", error);
    throw error;
  }
}
