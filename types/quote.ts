
// src/types/quote.ts
export interface DevJoke {
    //  id: number;
      setup?: string;     // The joke's setup question (optional if it's a single-line joke)
      delivery?: string;  // The punchline (optional)
      joke?: string;      // If it's a plain single-line joke
      category: string;
      quote?: string,
      author: string
    }