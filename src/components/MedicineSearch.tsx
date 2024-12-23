import React, { useState } from 'react';
import { Search } from 'lucide-react';
import Button from './ui/Button';

interface MedicineSearchProps {
  onSearch: (query: string) => void;
}

const MedicineSearch = ({ onSearch }: MedicineSearchProps) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex gap-2">
        <div className="relative flex-1">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search medicine by name..."
            className="w-full px-4 py-2 pl-10 pr-4 text-gray-700 bg-white border border-purple-200 rounded-lg focus:outline-none focus:border-purple-500"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
        <Button type="submit" disabled={!query.trim()}>
          <Search className="h-5 w-5 mr-2" />
          Search
        </Button>
      </div>
    </form>
  );
};

export default MedicineSearch;