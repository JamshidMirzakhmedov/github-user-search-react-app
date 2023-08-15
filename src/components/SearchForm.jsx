import { useState } from "react";
import { BsSearch } from "react-icons/bs";

const SearchForm = ({ setSearch }) => {
  const [username, setUsername] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearch(username);
  };

  return (
    <form onSubmit={handleSubmit}>
      <BsSearch className="search-icon" />
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button disabled={!username} type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
