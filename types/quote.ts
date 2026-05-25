// src/types/quote.ts

export interface AuthorsResponse {
    data: string[];         // An array of strings: ["Abraham Lincoln", "Aeschylus", ...]
    totalItems: number;     // 192
    totalPages: number;     // 20
    currentPage: number;    // 1
    pageSize: number;       // 10
    nextPageUrl: string | null;
    prevPageUrl: string | null;
  }