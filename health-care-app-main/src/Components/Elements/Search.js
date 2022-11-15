import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search for doctors,labs,etc....."
        className="search"
      />
      <FaSearch className="search-icon" />
    </div>
  );
};

export default Search;
