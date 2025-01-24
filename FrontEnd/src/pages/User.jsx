import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import Account from "../components/Account";
import ModalFeature from "../components/ModalFeature";

const User = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!isAuthenticated) {
    return <Navigate to="/signIn" replace />;
  }

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1 className="header__title">
          Welcome back <br />
          {user.firstName} {user.lastName}!
        </h1>
        <button
          className="button"
          aria-label="Edit your name"
          onClick={toggleModal}
        >
          Edit user info
        </button>
        {isModalOpen && <ModalFeature onClose={toggleModal} />}
      </div>
      <h2 className="sr-only">Accounts</h2>
      <Account />
    </main>
  );
};

export default User;
