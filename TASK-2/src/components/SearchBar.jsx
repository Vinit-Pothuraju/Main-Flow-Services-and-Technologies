import React, { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (query.trim()) onSearch(query.trim());
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-md mx-auto">
      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search movies..."
        className="flex-1 p-2 border rounded-l-md"
      />
      <button className="px-4 bg-blue-600 text-white rounded-r-md">Search</button>
    </form>
  );
}
