// src/app/page.tsx
import { getRandomDevJoke } from "@/lib/quote-fetch";

export default async function Home() {
  try {
    const data = await getRandomDevJoke();

    return (
      <main className="min-h-screen flex items-center justify-center bg-slate-900 text-slate-100 p-6">
        <div className="max-w-xl w-full bg-slate-800 p-8 rounded-2xl shadow-2xl border border-slate-700 text-center">
          
          <span className="inline-block px-3 py-1 text-xs font-mono text-cyan-400 bg-cyan-950/50 rounded-full mb-6 uppercase tracking-wider">
            {data.category || "Quote"}
          </span>

          {/* If it's a two-part joke (Setup & Delivery) */}
          {data.quote && (
            <div className="space-y-4">
              <p className="text-xl md:text-2xl font-semibold text-slate-200">
                {data.quote}
              </p>
              <p className="text-lg md:text-xl text-cyan-400 italic font-mono pt-2">
                → {data.author}
              </p>
            </div>
          )}

          {/* If it's just a single line joke
          {data.joke && (
            <p className="text-xl md:text-2xl font-medium text-slate-200 leading-relaxed font-mono">
              {data.joke}
            </p>
          )} */}
          
        </div>
      </main>
    );
  } catch (error) {
    console.error(error);
    return (

      
      <main className="min-h-screen flex items-center justify-center bg-slate-950">
        <div className="p-6 bg-red-950/50 text-red-400 border border-red-900 rounded-xl max-w-sm text-center">
          <p className="font-semibold">Failed to load dev joke.</p>
          <p className="text-xs opacity-75 mt-1">{(error as Error).message}</p>
        </div>
      </main>
    );
  }
}