import { useState, useEffect } from "react";
const UserList = ({ searchUsername }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Inside the effect, you can make the fetch request
    fetch(`https://api.github.com/search/users?q=${searchUsername}`)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.items); // Set the fetched data into state
        setLoading(false); // Indicate that loading is done
      })
      .catch((error) => {
        console.log("Error fetching data:", error);

        setLoading(false);
      });
  }, [searchUsername]);

  if (loading) {
    return (
      <div className="fancy-spinner">
        <div className="ring"></div>
        <div className="ring"></div>
        <div className="dot"></div>
      </div>
    );
  }
  if (users?.length === 0) {
    return (
      <h2
        style={{ textAlign: "center", color: "red" }}
        className="list-container"
      >
        There is no user with {searchUsername}
      </h2>
    );
  }

  return (
    <div className="list-container">
      {users?.length > 1 && (
        <h2>
          <span>{users?.length} </span>
          users found
        </h2>
      )}
      <ul>
        {users.map((user) => (
          <li key={user.id} className="card">
            <h5>UserId: {user.id}</h5>
            <div className="user-info">
              <img src={user.avatar_url} alt={user.login} />

              <h3>{user.login}</h3>
              <a href={user.html_url}>Follow</a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
