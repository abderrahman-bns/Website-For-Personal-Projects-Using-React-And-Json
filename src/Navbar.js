import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>xDEVELYNNx</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create" style={{ 
          color: 'white', 
          backgroundColor: '#6E8EED',
          borderRadius: '8px' 
        }}>New Project</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;