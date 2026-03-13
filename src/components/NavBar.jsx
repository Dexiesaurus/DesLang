

import { HashLink as Link } from 'react-router-hash-link';

const NavBar = () => {
  return (
    <header className="navbar">
      <div className="nav-container">
        <Link smooth to="/#hero" className="nav-logo">D. LANG</Link>
        <nav>
          <ul className="nav-links">
            <li><Link smooth to="/#hero">HOME</Link></li>
            <li><Link smooth to="/#about">ABOUT</Link></li>
            {/* Matches the id="research" in your main tag */}
            <li><Link smooth to="/#research">RESEARCH</Link></li>
            <li><Link smooth to="/#writing">WRITING</Link></li>
            <li><Link smooth to="/#design">DESIGN</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
