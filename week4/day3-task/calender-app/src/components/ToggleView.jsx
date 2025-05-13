// import useCalendarStore from "../store/calendarStore";
import useCalendarStore from "../store/calenderStore";

const ToggleView = () => {
  const { view, setView } = useCalendarStore();
  return (
    <div className="flex items-center justify-center gap-4 p-2">
      <button
        onClick={() => setView("day")}
        className={view === "day" ? "font-bold" : ""}
      >
        Day View
      </button>
      <button
        onClick={() => setView("week")}
        className={view === "week" ? "font-bold" : ""}
      >
        Week View
      </button>
    </div>
  );
};

export default ToggleView;
