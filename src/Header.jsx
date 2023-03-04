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

        <form>
          <input type="text" placeholder="Search.." name="search" className="search" />
          <button type="submit">Submit</button>
        </form>
      </nav>
    </header>
  );
};

export default Header;
