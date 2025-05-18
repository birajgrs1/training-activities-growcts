import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { isSameDay } from 'date-fns';

const useCalendarStore = create(
  persist(
    (set, get) => ({
      events: [],
      selectedDate: new Date(),
      view: 'week', // 'day' or 'week'
      isModalOpen: false,
      history: [],
      future: [],

      addEvent: (event) => {
        set((state) => ({
          events: [...state.events, event],
          history: [...state.history, state.events],
          future: [],
        }));
      },

      removeEvent: (eventId) => {
        set((state) => {
          const filtered = state.events.filter((e) => e.id !== eventId);
          return {
            events: filtered,
            history: [...state.history, state.events],
            future: [],
          };
        });
      },

      selectDate: (date) => set({ selectedDate: date }),

      toggleView: () =>
        set((state) => ({
          view: state.view === 'week' ? 'day' : 'week',
        })),

      openModal: () => set({ isModalOpen: true }),
      closeModal: () => set({ isModalOpen: false }),

      undo: () => {
        const history = get().history;
        if (history.length === 0) return;
        const last = history[history.length - 1];
        set((state) => ({
          events: last,
          history: history.slice(0, -1),
          future: [state.events, ...state.future],
        }));
      },

      redo: () => {
        const future = get().future;
        if (future.length === 0) return;
        const next = future[0];
        set((state) => ({
          events: next,
          future: future.slice(1),
          history: [...state.history, state.events],
        }));
      },

      setView: (view) => set({ view }),
      setDate: (date) => set({ selectedDate: date }),
    }),
    {
      name: 'calendar-storage',
    }
  )
);

export default useCalendarStore;

export const isDateEqual = (date1, date2) => isSameDay(date1, date2);