const ModalFeature = () => {
  return (
    <form className="edit-modal-wrapper">
      <div className="edit-modal-item">
        <label htmlFor="username">User name :</label>
        <input id="username" name="username" type="text" required />
      </div>
      <div className="edit-modal-item">
        <label htmlFor="firstname">First name :</label>
        <input id="firstname" name="firstname" type="text" required />
      </div>
      <div className="edit-modal-item">
        <label htmlFor="lastname">Last name :</label>
        <input id="lastname" name="lastname" type="text" required />
      </div>
      <div className="button-wrapper">
        <button className="button" type="submit">
          Save
        </button>
        <button className="button" type="reset">
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ModalFeature;
