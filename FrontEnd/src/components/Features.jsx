import PropTypes from "prop-types";

import iconChat from "../../public/images/icon-chat.svg";
import iconMoney from "../../public/images/icon-money.svg";
import iconSecurity from "../../public/images/icon-security.svg";

const FeatureItem = ({ icon, title, text }) => (
  <li className="feature-item">
    <img className="feature-icon" src={icon} aria-hidden="true" />
    <h3 className="feature-item-title">{title}</h3>
    <p className="feature-item-text">{text}</p>
  </li>
);

const Features = () => {
  const featuresList = [
    {
      id: 1,
      icon: iconChat,
      title: "You are our #1 priority",
      text: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
    },
    {
      id: 2,
      icon: iconMoney,
      title: "More savings means higher rates",
      text: "The more you save with us, the higher your interest rate will be!",
    },
    {
      id: 3,
      icon: iconSecurity,
      title: "Security you can trust",
      text: "We use top of the line encryption to make sure your data and money is always safe.",
    },
  ];

  return (
    <ul className="features">
      {featuresList.map((feature) => (
        <FeatureItem key={feature.id} {...feature} />
      ))}
    </ul>
  );
};

FeatureItem.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Features;
