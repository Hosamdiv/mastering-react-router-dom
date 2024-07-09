import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="max-w-screen-sm mx-auto my-7">
      <ul className="nav-ui">
        <li className="hover:text-indigo-600 duration-300 ">
          <NavLink to="/home">Home</NavLink>
        </li>
        <li className="hover:text-indigo-600 duration-300">
          <NavLink to="/about">About Us</NavLink>
        </li>

        <li className="hover:text-indigo-600 duration-300">
          <NavLink to="/learn">Layout</NavLink>
        </li>
        <li className="hover:text-indigo-600 duration-300">
          <NavLink to="/contribute">Contribute</NavLink>
        </li>
        <li className="hover:text-indigo-600 duration-300">
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
