import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Account from "../components/Account";

const User = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  if (!isAuthenticated) {
    return <Navigate to="/signIn" replace />;
  }

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1 className="header__title">
          Welcome back <br />
          {user.firstName} {user.lastName}!
        </h1>
        <button className="edit-button" aria-label="Edit your name">
          Edit user info
        </button>
      </div>
      <h2 className="sr-only">Accounts</h2>
      <Account />
    </main>
  );
};

export default User;
