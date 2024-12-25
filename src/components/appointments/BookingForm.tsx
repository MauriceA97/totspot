import { useState } from 'react';
import { 
  TextField, 
  Button, 
  Paper,
  Stack
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAppointments } from '../../context/AppointmentContext';

interface Provider {
  id: number;
  name: string;
  specialty: string;
  location: string;
  rating: number;
  availability: string;
  image: string;
  specialties: string[];
}

interface BookingFormProps {
  provider: Provider;
}

const BookingForm: React.FC<BookingFormProps> = ({ provider }) => {
  const navigate = useNavigate();
  const { addAppointment } = useAppointments();  // Add this line
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    reason: ''
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Add the appointment using context
    addAppointment({
      provider,
      ...formData
    });

    // Navigate to confirmation
    navigate('/booking-confirmation', { 
      state: { 
        provider,
        ...formData 
      }
    });
  };

  return (
    <Paper sx={{ p: 4, maxWidth: 500, mx: 'auto', mt: 4 }}>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            type="date"
            label="Preferred Date"
            value={formData.date}
            onChange={(e) => setFormData({...formData, date: e.target.value})}
            InputLabelProps={{ shrink: true }}
            required
          />
          
          <TextField
            type="time"
            label="Preferred Time"
            value={formData.time}
            onChange={(e) => setFormData({...formData, time: e.target.value})}
            InputLabelProps={{ shrink: true }}
            required
          />
          
          <TextField
            multiline
            rows={4}
            label="Reason for Visit"
            value={formData.reason}
            onChange={(e) => setFormData({...formData, reason: e.target.value})}
            required
          />
          
          <Button 
            type="submit" 
            variant="contained" 
            size="large"
          >
            Confirm Booking
          </Button>
        </Stack>
      </form>
    </Paper>
  );
};

export default BookingForm;