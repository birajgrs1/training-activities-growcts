const AddressForm = ({ state, dispatch }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Address</h2>
      <input
        type="text"
        placeholder="Street"
        onChange={(e) =>
          dispatch({
            type: "SET_ADDRESS",
            payload: { ...state.address, street: e.target.value },
          })
        }
        className="border p-2 rounded mb-4 w-full"
      />
      <input
        type="text"
        placeholder="City"
        onChange={(e) =>
          dispatch({
            type: "SET_ADDRESS",
            payload: { ...state.address, city: e.target.value },
          })
        }
        className="border p-2 rounded mb-4 w-full"
      />
    </div>
  );
};

export default AddressForm;
