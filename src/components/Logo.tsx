export const Logo = () => {
  return (
    <a
      href="/"
      className="logo"
      style={{ display: "flex", alignItems: "center", color: "white" }}
    >
      <img src="./road.png" alt="logo" style={{ marginRight: "10px" }} />
      <span>
        <strong>#all_the_way</strong>
      </span>
    </a>
  );
};
