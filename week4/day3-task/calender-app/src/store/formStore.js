import { create } from "zustand";

const useFormStore = create((set) => ({
  step: 1,
  formData: {},
  errors: {},
  stepCount: 3,

  setStep: (step) => set(() => ({ step })),

  updateData: (newData) =>
    set((state) => ({ formData: { ...state.formData, ...newData } })),

  setErrors: (stepErrors) => set(() => ({ errors: stepErrors })),

  resetForm: () => set(() => ({ step: 1, formData: {}, errors: {} })),

  setStepCount: (count) => set(() => ({ stepCount: count })),
}));

export default useFormStore;
