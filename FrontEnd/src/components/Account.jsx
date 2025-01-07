import PropTypes from "prop-types";

const AccountItem = ({ title, amount, description }) => (
  <div className="account-content-wrapper">
    <h3 className="account-title">{title}</h3>
    <p className="account-amount">{amount}</p>
    <p className="account-amount-description">{description}</p>
  </div>
);

const AccountSection = ({ title, amount, description }) => (
  <section className="account">
    <AccountItem title={title} amount={amount} description={description} />
    <div className="account-content-wrapper cta">
      <button className="button responsive-w100">View transactions</button>
    </div>
  </section>
);

const Account = () => {
  const accountList = [
    {
      id: 1,
      title: "Argent Bank Checking (x8349)",
      amount: "$2,082.79",
      description: "Available Balance",
    },
    {
      id: 2,
      title: "Argent Bank Savings (x6712)",
      amount: "$10,928.42",
      description: "Available Balance",
    },
    {
      id: 3,
      title: "Argent Bank Credit Card (x8349)",
      amount: "$184.30",
      description: "Current Balance",
    },
  ];

  return (
    <>
      {accountList.map((account) => (
        <AccountSection
          key={account.id}
          title={account.title}
          amount={account.amount}
          description={account.description}
        />
      ))}
    </>
  );
};

AccountItem.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

AccountSection.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Account;
