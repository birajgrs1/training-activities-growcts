import React, { useState } from 'react';
import { Modal, Box, TextField, Button } from '@mui/material';
import useCalendarStore from '../store/useCalendarStore';

export default function EventModal() {
  const { isModalOpen, closeModal, addEvent } = useCalendarStore();
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = () => {
    if (!title || !date) return alert('Please fill all fields');

    addEvent({
      id: Date.now(),
      title,
      start: new Date(date),
      end: new Date(date),
    });

    setTitle('');
    setDate('');
    closeModal();
  };

  return (
    <Modal open={isModalOpen} onClose={closeModal}>
      <Box
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-md shadow-md"
        sx={{ width: 400 }}
      >
        <h2 className="mb-4 text-lg font-semibold text-gray-700">Add Event</h2>
        <TextField
          fullWidth
          label="Event Title"
          variant="outlined"
          margin="normal"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          fullWidth
          label="Date"
          type="date"
          InputLabelProps={{ shrink: true }}
          variant="outlined"
          margin="normal"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <Button
          variant="contained"
          sx={{ bgcolor: '#d946ef', mt: 2 }}
          fullWidth
          onClick={handleSubmit}
        >
          Add
        </Button>
      </Box>
    </Modal>
  );
}
