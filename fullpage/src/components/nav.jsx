import { NavLink } from "react-router-dom";

export default function Nav() {
  const linkStyle = (isActive) => ({

  color: isActive ? "#FFF5C2" : "#FFF5C2",
  borderBottom: isActive ? "2px solid #FFF5C2" : "2px solid transparent",
  padding: "0.25rem 0",

  fontFamily: "Limelight, serif",
  textTransform: "uppercase",
  fontSize: "0.85rem",

  textDecoration: "none",
  textShadow: isActive ? "0 0 3px #D29E62" : "none",
  
  transform: isActive ? "scale(1.05)" : "scale(1)",
    transition: "0.3s",
  }
);


  return (
    <div
      className="subject"
      style={{
        display: "flex",
        gap: "3rem",

        justifyContent: "center",
        padding: "0.9rem 0",

        alignItems: "center",
        marginTop: "-54px",
      }}
    >
      <NavLink to="/by-date" style={({ isActive }) => linkStyle(isActive)}>
        BY DATE
      </NavLink>
      <NavLink to="/today" style={({ isActive }) => linkStyle(isActive)}>
        TODAY
      </NavLink>
      <NavLink to="/since" style={({ isActive }) => linkStyle(isActive)}>
        SINCE
      </NavLink>
    </div>
  );
}
