import CalendarView from "../components/CalenderView";
import ToggleView from "../components/ToggleView";
import useCalenderStore from "../store/calenderStore";

const Home = () => {
  const { toggleModal } = useCalenderStore();

  return (
    <div className="p-4">
      <div className="flex items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Calendar App</h1>
      </div>
      <ToggleView />
      <div className="flex items-center justify-center">
        <button
          onClick={toggleModal}
          className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
        >
          Add Event
        </button>
      </div>
      <CalendarView />
    </div>
  );
};

export default Home;
