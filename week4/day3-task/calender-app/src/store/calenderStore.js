import { create } from 'zustand'
import { persist } from 'zustand/middleware'
// import { format, isSameDay } from 'date-fns'

const useCalendarStore = create(persist(
  (set) => ({
    events: [],
    modalOpen: false,
    view: 'week',

    addEvent: (event) =>
      set((state) => ({ events: [...state.events, event] })),

    removeEvent: (id) =>
      set((state) => ({ events: state.events.filter(e => e.id !== id) })),

    toggleModal: () =>
      set((state) => ({ modalOpen: !state.modalOpen })),

    setView: (view) => set(() => ({ view })),
  }),
  {
    name: 'calendar-storage',
  }
))
export default useCalendarStore;