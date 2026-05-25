// src/lib/quotes.ts (or quote-fetch.ts)


import { DevJoke } from "@/types/quote";


export async function getRandomDevJoke(): Promise<DevJoke> {
  // We point directly to the base path of the endpoint you linked.
  // We drop '?type=inspirational' completely to prevent the 400 Bad Request error.
  const url = 'https://quotes-api12.p.rapidapi.com/quotes/random?type=inspirational'; 

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'x-rapidapi-key': process.env.RAPID_API_KEY as string,
      'x-rapidapi-host': process.env.RAPID_API_HOST as string,
    },
    next: { revalidate: 0 } // Fetch a completely new joke every time you refresh
  });

  if (!response.ok) {
    throw new Error(`API responded with status: ${response.status}`);
  }

  return response.json();
}