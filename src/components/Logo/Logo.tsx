import { Link } from "react-router-dom";
import css from "./logo.module.css";

function Logo({ logo }: { logo: string }): JSX.Element {
  return (
    <Link className={css.logoContainer} to='/'>
      <img src={logo} alt="logo" />
      <span className={css.logoText}>E-Pharmacy</span>
    </Link>
  );
}

export default Logo;
