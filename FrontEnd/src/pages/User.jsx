import Account from "../components/Account";

const User = () => {
  return (
    <main className="main bg-dark">
      <div className="header">
        <h1 className="header__title">
          Welcome back <br />
          Tony Jarvis!
        </h1>
        <button className="edit-button" aria-label="Edit your name">
          Edit Name
        </button>
      </div>
      <h2 className="sr-only">Accounts</h2>
      <Account />
    </main>
  );
};

export default User;
