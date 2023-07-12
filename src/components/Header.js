import Logo from "../assets/Logo.svg";

function Header() {
  return <header>
    {/*Logo*/}
    <div class="logo">
      <img src={Logo} alt="Little Lemon Logo"></img>
    </div>
  </header>;
}

export default Header;
