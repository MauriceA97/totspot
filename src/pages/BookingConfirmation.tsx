import { 
  Container, 
  Paper, 
  Typography, 
  Box, 
  Button,
  Divider 
} from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const BookingConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { provider, date, time, reason } = location.state || {};

  return (
    <Container maxWidth="sm">
      <Paper sx={{ p: 4, mt: 4, textAlign: 'center' }}>
        <CheckCircleIcon color="success" sx={{ fontSize: 60, mb: 2 }} />
        
        <Typography variant="h4" gutterBottom>
          Appointment Confirmed!
        </Typography>
        
        <Box sx={{ my: 4, textAlign: 'left' }}>
          <Typography variant="h6" gutterBottom>
            Appointment Details:
          </Typography>
          <Divider sx={{ mb: 2 }} />
          
          <Typography variant="body1" paragraph>
            <strong>Provider:</strong> {provider?.name}
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Date:</strong> {date}
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Time:</strong> {time}
          </Typography>
          {reason && (
            <Typography variant="body1" paragraph>
              <strong>Reason:</strong> {reason}
            </Typography>
          )}
        </Box>

        <Button 
          variant="contained" 
          onClick={() => navigate('/appointments')}
          sx={{ mr: 2 }}
        >
          View My Appointments
        </Button>
        <Button 
          variant="outlined" 
          onClick={() => navigate('/')}
        >
          Back to Home
        </Button>
      </Paper>
    </Container>
  );
};

export default BookingConfirmation;