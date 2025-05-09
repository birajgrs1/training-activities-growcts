const ConfirmForm = ({ state }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Confirm Information</h2>
      <div>
        <p>
          <strong>Personal Info:</strong> {state.personal.firstName}
          {state.personal.lastName}
        </p>
        <p>
          <strong>Address:</strong> {state.address.street}, {state.address.city}
        </p>
      </div>
    </div>
  );
};

export default ConfirmForm;
