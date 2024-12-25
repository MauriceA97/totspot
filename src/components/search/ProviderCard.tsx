import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface ProviderProps {
  name: string;
  specialty: string;
  location: string;
  rating: number;
}

const ProviderCard: React.FC<ProviderProps> = ({ name, specialty, location, rating }) => {
  const navigate = useNavigate();

  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {name}
        </Typography>
        <Typography color="textSecondary">
          {specialty}
        </Typography>
        <Typography variant="body2">
          Location: {location}
        </Typography>
        <Typography variant="body2">
          Rating: {rating}/5
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Button 
            variant="contained" 
            color="primary"
            onClick={() => navigate('/booking-confirmation', { 
              state: { provider: { name, specialty, location, rating } } 
            })}
          >
            Book Appointment
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProviderCard;