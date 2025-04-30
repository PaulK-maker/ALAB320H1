function Nav() {
    return (
      <nav className="nav-main" aria-label="Main Navigation" role="navigation">
        <ul>
          <li><a href="#home" aria-current="page">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    );
  }
  export default Nav;