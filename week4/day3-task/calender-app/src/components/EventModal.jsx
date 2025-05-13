// import useCalendarStore from "../store/calendarStore";
import useCalendarStore from "../store/calenderStore";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";
import { useState } from "react";

const EventModal = () => {
  const { modalOpen, toggleModal, addEvent } = useCalendarStore();
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const handleAdd = () => {
    if (title && date) {
      addEvent({ id: Date.now(), title, date });
      toggleModal();
      setTitle("");
      setDate("");
    }
  };

  return (
    <div className="flex items-center justify-center">
    <Dialog open={modalOpen} onClose={toggleModal}>
      <DialogTitle>Add Event</DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          label="Event Title"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Date"
          type="date"
          fullWidth
          InputLabelProps={{ shrink: true }}
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={toggleModal}>Cancel</Button>
        <Button onClick={handleAdd}>Add</Button>
      </DialogActions>
    </Dialog>
    </div>
  );
};

export default EventModal;