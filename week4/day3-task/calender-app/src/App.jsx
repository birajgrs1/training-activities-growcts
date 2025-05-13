import Home from "./pages/Home";
import EventModal from "./components/EventModal";
import { CssBaseline } from "@mui/material";

const App = () => {
  return (
    <div>
      <CssBaseline />
      <Home />
      <EventModal />
    </div>
  );
};

export default App;
