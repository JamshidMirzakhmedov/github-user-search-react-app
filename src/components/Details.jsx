import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchUser from "../fetchUser";
import Loading from "./Loading";
import { RiGitRepositoryLine } from "react-icons/ri";
import { PiUsersThreeDuotone } from "react-icons/pi";
import { TbUsersPlus } from "react-icons/tb";
import { GiArchiveRegister } from "react-icons/gi";
import { SiBiolink } from "react-icons/si";
const Details = () => {
  const { name } = useParams();
  const results = useQuery(["details", name], fetchUser);

  if (results.isLoading) {
    return <Loading />;
  }

  const user = results.data;

  return (
    <div className="details">
      <ul>
        <li>
          <div className="details-icon">
            <RiGitRepositoryLine />
          </div>
          <div className="details-info">
            <h1>{user.public_repos}</h1>
            <p>Repos</p>
          </div>
        </li>
        <li>
          <div className="details-icon">
            <PiUsersThreeDuotone />
          </div>
          <div className="details-info">
            <h1>{user.followers}</h1>
            <p>Followers</p>
          </div>
        </li>
        <li>
          <div className="details-icon">
            <TbUsersPlus />
          </div>
          <div className="details-info">
            <h1>{user.following}</h1>
            <p>Following</p>
          </div>
        </li>
        <li>
          <div className="details-icon">
            <GiArchiveRegister />
          </div>
          <div className="details-info">
            <h1>{user.public_gists}</h1>
            <p>Gists</p>
          </div>
        </li>
      </ul>
      <div className="details-main">
        {" "}
        <div className="details-user">
          <div className="user-img">
            <img src={user.avatar_url} alt={user.name} />
          </div>{" "}
          <div className="user-txt">
            <h1>{user.name}</h1>

            <p>@{user.login}</p>

            <p>
              Bio: {user.bio},{user.company && <span> {user.company}</span>}
            </p>

            {user.location ? (
              <p> Location: {user.location} </p>
            ) : (
              <p>from Earth</p>
            )}
            {user.blog && (
              <a href={user.blog} target="_blank">
                {user.blog}
              </a>
            )}
            <a className="btn" href={user.url} target="_blank">
              Follow
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
