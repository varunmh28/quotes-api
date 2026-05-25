// src/app/authors/page.tsx
import { getAllAuthors } from "@/lib/quote-fetch";

export default async function AuthorsPage() {
  try {
    const responseData = await getAllAuthors();
    const authors = responseData.data; // This is the ["Abraham Lincoln", "Aeschylus", ...] array

    return (
      <main className="min-h-screen bg-slate-950 text-slate-100 p-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-800 pb-6 mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold text-cyan-400">Famous Authors</h1>
              <p className="text-slate-400 font-light mt-1">Explore quotes from top history creators.</p>
            </div>
            
            {/* Stats Tag */}
            <div className="bg-slate-900 border border-slate-800 px-4 py-2 rounded-xl text-sm font-mono text-slate-400 self-start md:self-auto">
              Total Authors: <span className="text-cyan-400 font-bold">{responseData.totalItems}</span>
            </div>
          </div>

          {/* Grid Layout mapping over the plain string names */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {authors.map((authorName, index) => (
              <div 
                key={index} 
                className="p-4 bg-slate-900 border border-slate-800/80 rounded-xl transition-all hover:border-cyan-500/40 hover:bg-slate-900/50 flex items-center gap-3 group"
              >
                {/* Visual Circle Initial */}
                <span className="w-8 h-8 rounded-full bg-cyan-950 text-cyan-400 font-bold flex items-center justify-center text-xs border border-cyan-900/30 group-hover:bg-cyan-900 group-hover:text-cyan-200 transition-colors">
                  {authorName.charAt(0).toUpperCase()}
                </span>
                
                {/* The Author Name */}
                <span className="font-medium text-slate-200 group-hover:text-white transition-colors">
                  {authorName}
                </span>
              </div>
            ))}
          </div>

          {/* Pagination Info Footer Layout */}
          <div className="mt-12 pt-6 border-t border-slate-900 flex items-center justify-between text-xs font-mono text-slate-500">
            <p>Page {responseData.currentPage} of {responseData.totalPages}</p>
            <p>Showing {responseData.pageSize} items per page</p>
          </div>

        </div>
      </main>
    );
  } catch (error) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-slate-950">
        <div className="p-6 bg-red-950/30 text-red-400 border border-red-900/30 rounded-xl text-center">
          <p className="font-semibold">Failed to fetch the authors pagination layer.</p>
          <p className="text-xs opacity-75 mt-1">Check your network connection and API limits.</p>
        </div>
      </main>
    );
  }
}