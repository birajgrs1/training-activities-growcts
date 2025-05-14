import { useAuthStore } from './authSlice';
import { useCartStore } from './cartSlice';
import { useUISlice } from './uiSlice';

export const useStore = () => ({
  ...useAuthStore(),
  ...useCartStore(),
  ...useUISlice(),
});
