import { useReducer } from "react";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  error: "",
};

const formReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, [action.field]: action.value };
    case "SET_ERROR":
      return { ...state, error: action.value };
    default:
      return state;
  }
};

const Login = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleInputChange = (e) => {
    dispatch({
      type: "UPDATE_FIELD",
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !state.firstName ||
      !state.lastName ||
      !state.email ||
      !state.password
    ) {
      dispatch({ type: "SET_ERROR", value: "All fields are required!" });
      return;
    }

    dispatch({ type: "SET_ERROR", value: "" });
    alert("Form submitted successfully!");
  };

  return (
    <div className="form-container flex items-center justify-center p-3 bg-gray-50 shadow-md mt-[24px] ml-[360px] w-[40%]">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-72">
        {state.error && (
          <div className="text-red-500 mb-2 text-sm">{state.error}</div>
        )}

        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={state.firstName}
          onChange={handleInputChange}
          className="p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={state.lastName}
          onChange={handleInputChange}
          className="p-2 border border-gray-300 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={state.email}
          onChange={handleInputChange}
          className="p-2 border border-gray-300 rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleInputChange}
          className="p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
