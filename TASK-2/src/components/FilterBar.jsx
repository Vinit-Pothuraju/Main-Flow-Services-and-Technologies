import React from 'react';

export default function FilterBar({ onFilter }) {
  return (
    <div className="flex flex-wrap gap-3 items-center mt-4">
      <select onChange={e => onFilter({ type: e.target.value })} className="p-2 border rounded">
        <option value="">All Types</option>
        <option value="movie">Movies</option>
        <option value="series">Series</option>
        <option value="episode">Episodes</option>
      </select>

      <input
        type="number"
        placeholder="Year (e.g., 2015)"
        onBlur={e => onFilter({ year: e.target.value })}
        className="p-2 border rounded w-32"
      />
    </div>
  );
}
