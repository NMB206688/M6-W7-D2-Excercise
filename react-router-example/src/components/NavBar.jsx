import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
      <NavLink className="navbar-brand fw-bold me-3" to="/">Blogposts</NavLink>
      <div className="navbar-nav">
        <NavLink className="nav-link" to="/" end>Home</NavLink>
        <NavLink className="nav-link" to="/about">About</NavLink>
        <NavLink className="nav-link" to="/posts">Posts</NavLink>
      </div>
    </nav>
  );
}
