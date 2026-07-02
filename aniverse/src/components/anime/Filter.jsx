function Filter({ value, onChange }) {
  return (
    <select
      className="filter-select"
      value={value}
      onChange={onChange}
    >
      <option value="">All Types</option>
      <option value="tv">TV</option>
      <option value="movie">Movie</option>
      <option value="ova">OVA</option>
      <option value="ona">ONA</option>
      <option value="special">Special</option>
    </select>
  );
}

export default Filter;