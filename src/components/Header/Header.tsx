import Logo from "../Logo/Logo.tsx";
import LogoutBtn from "../LogoutBtn/LogoutBtn.tsx";
import SubTitle from "../SubTitle/SubTitle.tsx";
import Title from "../Title/Title.tsx";

function Header() {
  return (
    <header>
      <Logo />
      <Title />
      <SubTitle />
      <SubTitle />
      <LogoutBtn />
    </header>
  );
}

export default Header;
