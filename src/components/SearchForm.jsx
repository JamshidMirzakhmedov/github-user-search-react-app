import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useQuery } from "@tanstack/react-query";
import fetchSearch from "../fetchSearch";
import UserList from "./UserList";

const SearchForm = () => {
  const [requestParam, setRequestParam] = useState("jamshidmirzakhmedov");
  // const [users, setUsers] = useState([]);

  const results = useQuery(["search", requestParam], fetchSearch);

  const users = results?.data?.items ?? [];

  console.log(users);

  return (
    <main>
      <form
        onSubmit={(e) => {
          event.preventDefault();
          const formData = new FormData(e.target);
          const name = formData.get("searchName") ?? "jamshidmirzakhmedov";
          setRequestParam(name);
        }}
      >
        <BsSearch className="search-icon" />
        <input
          type="text"
          placeholder="Enter GitHub username"
          name="searchName"
        />
        <button disabled={!requestParam} type="submit">
          Search
        </button>
      </form>

      <UserList users={users} />
    </main>
  );
};

export default SearchForm;
