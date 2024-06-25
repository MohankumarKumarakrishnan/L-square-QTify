import Button from "../BasicComponents/Button";
import { SearchBar } from "../BasicComponents/SearchBar";
import style from "./navbar.module.css";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={style.navbarContainer}>
      <Link to="/">
        <Logo />
      </Link>
      <SearchBar />
      <Button appearance="secondary">Give Feedback</Button>
    </nav>
  );
};

export default Navbar;
