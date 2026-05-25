// src/lib/quotes.ts
import { AuthorsResponse } from "@/types/quote";

export async function getAllAuthors(): Promise<AuthorsResponse> {
  const url = 'https://quotes-api12.p.rapidapi.com/author?page=1&limit=200'; // you can change pages and limit 

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'e4cc73c410mshe6884844d52e739p17ef1ajsn65ef6b10ba07',
      'x-rapidapi-host': 'quotes-api12.p.rapidapi.com',
    },
    next: { revalidate: 3600 } 
  });

  if (!response.ok) {
    throw new Error(`API responded with status: ${response.status}`);
  }

  return response.json();
}