import { Link } from "react-router-dom";
import css from "./logo.module.css";
import Image from "../Image/Image.tsx";

function Logo({ logo }: { logo: string }): JSX.Element {
  return (
    <Link className={css.logoContainer} to="/">
      <Image imagePath={logo} imageAlt="logo" />
      <span className={css.logoText}>E-Pharmacy</span>
    </Link>
  );
}

export default Logo;
