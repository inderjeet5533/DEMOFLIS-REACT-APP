import NavItem from "./NavItem";
import SearchBar from "./SearchBar";

interface Props {
  style: string;
}

function NavBar({ style }: Props) {
  return (
    <nav
      id={style}
      className="navbar navbar-expand-lg position-fixed z-1 w-100"
    >
      <div className="container-fluid mx-5">
        <a href="/dashboard">
          <img
            className="margin-right-25px"
            src="src/assets/demoflix_icon.png"
            alt="DEMOFLIX"
            width="100"
            height="52"
          />
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-font-size">
            <NavItem itemName="Home"></NavItem>
            <NavItem itemName="TV Shows"></NavItem>
            <NavItem itemName="Movies"></NavItem>
            <NavItem itemName="New & Popular"></NavItem>
            <NavItem itemName="My List"></NavItem>
            <NavItem itemName="Browse by Language"></NavItem>
          </ul>
          <SearchBar></SearchBar>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
