function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search anime..."
      className="search-input"
      value={value}
      onChange={onChange}
    />
  );
}

export default SearchBar;