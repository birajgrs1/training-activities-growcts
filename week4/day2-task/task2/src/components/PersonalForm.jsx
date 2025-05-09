const PersonalForm = ({ state, dispatch }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Personal Information</h2>
      <input
        type="text"
        placeholder="First Name"
        onChange={(e) =>
          dispatch({
            type: "SET_PERSONAL",
            payload: { ...state.personal, firstName: e.target.value },
          })
        }
        className="border p-2 rounded mb-4 w-full"
      />
      <input
        type="text"
        placeholder="Last Name"
        onChange={(e) =>
          dispatch({
            type: "SET_PERSONAL",
            payload: { ...state.personal, lastName: e.target.value },
          })
        }
        className="border p-2 rounded mb-4 w-full"
      />
    </div>
  );
};

export default PersonalForm;
