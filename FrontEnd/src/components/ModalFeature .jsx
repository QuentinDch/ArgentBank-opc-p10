import PropTypes from "prop-types";
import { useState } from "react";
import { useSelector } from "react-redux";

const ModalFeature = ({ onClose }) => {
  const { user } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    username: user?.userName,
    firstname: user?.firstName,
    lastname: user?.lastName,
  });

  // Gestion des modifications des champs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with:", formData);
    // Ajout de l'action Redux
  };

  return (
    <form className="edit-modal-wrapper" onSubmit={handleSubmit}>
      <div className="edit-modal-item">
        <label htmlFor="username">User name :</label>
        <input
          id="username"
          name="username"
          type="text"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </div>
      <div className="edit-modal-item">
        <label htmlFor="firstname">First name :</label>
        <input
          id="firstname"
          name="firstname"
          type="text"
          value={formData.firstname}
          onChange={handleChange}
          required
        />
      </div>
      <div className="edit-modal-item">
        <label htmlFor="lastname">Last name :</label>
        <input
          id="lastname"
          name="lastname"
          type="text"
          value={formData.lastname}
          onChange={handleChange}
          required
        />
      </div>
      <div className="button-wrapper">
        <button className="button" type="submit">
          Save
        </button>
        <button className="button" type="reset" onClick={onClose}>
          Cancel
        </button>
      </div>
    </form>
  );
};

ModalFeature.propTypes = {
  onClose: PropTypes.func,
};

export default ModalFeature;
