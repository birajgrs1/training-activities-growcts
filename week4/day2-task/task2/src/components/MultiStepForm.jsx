import { useReducer, useState } from 'react';
import PersonalForm from './PersonalForm';
import AddressForm from './AddressForm';
import ConfirmForm from './ConfirmForm';

const initialState = {
  personal: {},
  address: {},
};

const formReducer = (state, action) => {
  switch (action.type) {
    case 'SET_PERSONAL':
      return { ...state, personal: action.payload };
    case 'SET_ADDRESS':
      return { ...state, address: action.payload };
    default:
      return state;
  }
};

const MultiStepForm = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const [step, setStep] = useState(1);

  const handleNext = () => setStep(step + 1);
  const handlePrevious = () => setStep(step - 1);

  return (
    <div className="max-w-lg mx-auto p-6">
      {step === 1 && <PersonalForm state={state} dispatch={dispatch} />}
      {step === 2 && <AddressForm state={state} dispatch={dispatch} />}
      {step === 3 && <ConfirmForm state={state} />}

      <div className="mt-4 flex justify-between">
        {step > 1 && <button onClick={handlePrevious} className="bg-gray-500 text-white p-2 rounded">Previous</button>}
        {step < 3 && <button onClick={handleNext} className="bg-blue-500 text-white p-2 rounded">Next</button>}
      </div>
    </div>
  );
};

export default MultiStepForm;
