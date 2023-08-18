import NotFound from "./NotFound";
import User from "./User";

const UserList = ({ users }) => {
  if (!users) {
    return <NotFound />;
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
          <User
            name={user.login}
            id={user.id}
            url={user.html_url}
            image={user.avatar_url}
            key={user.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default UserList;
