import { Link } from "react-router-dom";
import logo from "../../public/images/argentBankLogo.avif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <Link to="/" className="navbar__logo" aria-current="page">
          <img src={logo} alt="Argent Bank logo" />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <Link
          to="/signIn"
          className="navbar__link"
          aria-label="Sign In to your account"
        >
          <i>
            <FontAwesomeIcon icon={faCircleUser} />
          </i>
          <span>Sign In</span>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
