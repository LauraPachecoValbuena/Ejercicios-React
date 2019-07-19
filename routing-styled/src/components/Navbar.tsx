import React from "react";
import { Link } from 'react-router-dom';

interface IProps {
  username: string;
}

const Navbar: React.FC<IProps> = props => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          {props.username}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" >
                 <Link to="/1">Page 1</Link> 
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link"  >
                 <Link to="/2">Page 2</Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                <Link to="/3"> Page 3</Link>
              </a>
            </li>
          </ul>
          <span className="navbar-text">{props.username}</span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
