const Header = () => {
  const site = "https://aprakash97.github.io/Portfolio-/";
  return (
    <header className="header">
      <a href={site} className="logo">
        Movie Tracker
      </a>
      <i className="bx bx-menu" id="menu-icon"></i>

      <nav className="navbar">
        <a href="#home" className="active">
          Home
        </a>
        <a href="#about">Browse</a>
        <a href="#services">Favourites</a>
      </nav>
    </header>
  );
};

export default Header;
