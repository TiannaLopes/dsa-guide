import React, { useState, ChangeEvent, useEffect } from 'react';

interface SearchComponentProps {
  data: string[];
  onSearch: (results: string[]) => void;
}

const SearchComponent: React.FC<SearchComponentProps> = ({ data, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredResults, setFilteredResults] = useState<string[]>(data);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);

    const filtered = value
      ? data.filter((item) => item.toLowerCase().includes(value))
      : data;

    setFilteredResults(filtered);
  };

  // Call the onSearch callback whenever the filtered results change
  useEffect(() => {
    onSearch(filteredResults);
  }, [filteredResults, onSearch]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search topics..."
        value={searchTerm}
        onChange={handleSearch}
        className="border p-2 mb-4 w-full"
      />
    </div>
  );
};

export default SearchComponent;
