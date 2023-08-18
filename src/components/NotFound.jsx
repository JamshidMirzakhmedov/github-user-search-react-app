export default function NotFound({ username }) {
  return (
    <h2
      style={{
        textAlign: "center",
        color: "red",
      }}
      className="list-container"
    >
      There is no user with this username
    </h2>
  );
}
