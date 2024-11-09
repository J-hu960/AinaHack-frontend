// CustomLink.js
import { Link } from "react-router-dom";

function CustomLink({ to, children, ...props }) {
  const linkStyle = {
    color: "#007bff",
    fontWeight: "bold",
    textDecoration: "none",
    padding: "8px 12px",
    borderRadius: "8px",
    transition: "all 0.3s ease",
    display: "inline-block",
  };

  const hoverStyle = {
    color: "#0056b3",
    backgroundColor: "#e6f0ff",
    textDecoration: "underline",
  };

  return (
    <Link
      to={to}
      style={linkStyle}
      {...props}
      onMouseEnter={(e) => Object.assign(e.target.style, hoverStyle)}
      onMouseLeave={(e) => Object.assign(e.target.style, linkStyle)}
    >
      {children}
    </Link>
  );
}

export default CustomLink;
