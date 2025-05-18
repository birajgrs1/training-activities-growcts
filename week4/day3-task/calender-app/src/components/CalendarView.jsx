import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import useCalendarStore from '../store/useCalendarStore';

const localizer = momentLocalizer(moment);

export default function CalendarView() {
  const {
    events,
    view: globalView,
    setView,
    selectedDate,
    setDate,
  } = useCalendarStore();

  const [view, setLocalView] = useState(globalView);
  const [date, setLocalDate] = useState(selectedDate);

  useEffect(() => {
    setLocalView(globalView);
  }, [globalView]);

  useEffect(() => {
    setLocalDate(selectedDate);
  }, [selectedDate]);

  // When calendar changes view, update Zustand
  const onViewChange = (newView) => {
    setLocalView(newView);
    setView(newView);
  };

  // When calendar navigates dates, update Zustand
  const onNavigate = (newDate) => {
    setLocalDate(newDate);
    setDate(newDate);
  };

  return (
    <div style={{ height: 600, margin: '20px' }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        view={view}
        onView={onViewChange}
        date={date}
        onNavigate={onNavigate}
        views={['day', 'week']}
        selectable
        popup
      />
    </div>
  );
}
