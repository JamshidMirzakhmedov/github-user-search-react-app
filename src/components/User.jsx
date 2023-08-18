import { Link } from "react-router-dom";
const User = (props) => {
  const { id, image, name, url } = props;

  return (
    <Link to={`/details/${name}`} className="card">
      <h5>UserId: {id}</h5>

      <div className="user-info">
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <a href={url} className="btn" target="_blank">
          View
        </a>
      </div>
    </Link>
  );
};

export default User;
