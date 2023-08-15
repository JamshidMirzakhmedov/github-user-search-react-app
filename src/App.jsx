import Footer from "./Footer";
import { useState } from "react";
import SearchForm from "./components/SearchForm";
import UserList from "./components/UserList";

function App() {
  const [searchUsername, setSearchUsername] = useState("jamshidmirzakhmedov");

  return (
    <div className="App">
      <h1>GitHub User Search</h1>
      <SearchForm setSearch={setSearchUsername} />
      <UserList searchUsername={searchUsername} />
      <Footer />
    </div>
  );
}

export default App;
