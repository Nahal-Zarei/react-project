import HeaderMenu from "./Header-Menu";
import HeaderIcons from "./Header-Icons";
import HeaderLogo from "./Header-logo";
function Header(){
  return (
    <header>
      <div class="header-div">
          <HeaderMenu />
          <HeaderLogo />
          <HeaderIcons />
      </div>
    </header>
  );
}

export default Header;