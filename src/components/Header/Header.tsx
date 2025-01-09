import Logo from "../Logo/Logo.tsx";
import logoPath from "../../assets/img/log-in-page-logo.png";
import LogoutBtn from "../LogoutBtn/LogoutBtn.tsx";
import SubTitle from "../SubTitle/SubTitle.tsx";
import Title from "../Title/Title.tsx";

function Header() {
  return (
    <header>
      <Logo logo={logoPath} />
      <Title />
      <SubTitle />
      <SubTitle />
      <LogoutBtn />
    </header>
  );
}

export default Header;
