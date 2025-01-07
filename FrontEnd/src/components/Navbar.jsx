import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../public/images/argentBankLogo.avif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { logoutUser } from "../redux/actions/auth.actions";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/");
  };

  return (
    <header>
      <nav className="navbar">
        <Link to="/" className="navbar__logo" aria-current="page">
          <img src={logo} alt="Argent Bank logo" />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>

        {!isAuthenticated ? (
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
        ) : (
          <div className="log">
            <Link to="/user" className="navbar__link">
              <i>
                <FontAwesomeIcon icon={faCircleUser} />
              </i>
              <span>{user?.firstName}</span>
            </Link>
            <button onClick={handleLogout} className="navbar__link">
              <i>
                <FontAwesomeIcon icon={faArrowRightFromBracket} />
              </i>
              <span>Log Out</span>
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
