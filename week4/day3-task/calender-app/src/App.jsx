import React from 'react';
import Header from './components/Header';
import EventModal from './components/EventModal';
import CalendarView from './components/CalendarView';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <CalendarView />
      <EventModal />
    </div>
  );
}

export default App;
