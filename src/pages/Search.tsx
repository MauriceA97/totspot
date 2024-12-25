import { useState } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  TextField, 
  Grid, 
  Card, 
  CardContent,
  InputAdornment,
  Chip,
  Rating,
  Button,
  Avatar
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useNavigate } from 'react-router-dom';
import { useAppointments } from '../context/AppointmentContext';

// Define Provider interface
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

// Mock data with proper typing
const mockProviders: Provider[] = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Pediatrician",
    location: "New York, NY",
    rating: 4.8,
    availability: "Available today",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    specialties: ["General Pediatrics", "Newborn Care"]
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Pediatric Dentist",
    location: "Brooklyn, NY",
    rating: 4.5,
    availability: "Next available: Tomorrow",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    specialties: ["Pediatric Dentistry", "Orthodontics"]
  }
];

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const { addAppointment } = useAppointments();

  const handleBookAppointment = (provider: Provider) => {
    const appointmentData = {
      provider,
      date: new Date().toISOString().split('T')[0],
      time: '09:00',
      reason: 'General checkup'
    };
    addAppointment(appointmentData);
    navigate('/booking-confirmation', { state: appointmentData });
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: `
          linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9))
        `,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        position: 'relative'
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ 
          py: 5,
          display: 'flex',
          flexDirection: 'column',
          gap: 4
        }}>
          {/* Search Header */}
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
              Find Your Child's Perfect Doctor
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Search from our network of qualified pediatric care providers
            </Typography>
          </Box>

          {/* Search Bar */}
          <Box sx={{ maxWidth: 800, mx: 'auto', width: '100%' }}>
            <TextField
              fullWidth
              placeholder="Search by doctor name, specialty, or location"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon color="primary" />
                  </InputAdornment>
                ),
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 3,
                  backgroundColor: 'white',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }
              }}
            />
          </Box>

          {/* Provider Cards */}
          <Grid container spacing={3} sx={{ mt: 4 }}>
            {mockProviders.map((provider: Provider) => (
              <Grid item xs={12} md={6} key={provider.id}>
                <Card 
                  sx={{ 
                    height: '100%',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: 4
                    }
                  }}
                >
                  <CardContent>
                    <Grid container spacing={2}>
                      <Grid item>
                        <Avatar
                          src={provider.image}
                          sx={{ width: 80, height: 80 }}
                        />
                      </Grid>
                      <Grid item xs>
                        <Typography variant="h6" gutterBottom>
                          {provider.name}
                        </Typography>
                        <Typography color="text.secondary" gutterBottom>
                          {provider.specialty}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                          <LocationOnIcon color="action" sx={{ fontSize: 20, mr: 0.5 }} />
                          <Typography variant="body2" color="text.secondary">
                            {provider.location}
                          </Typography>
                        </Box>
                        <Rating value={provider.rating} precision={0.1} readOnly size="small" />
                        <Box sx={{ mt: 1 }}>
                          {provider.specialties.map((specialty, index) => (
                            <Chip
                              key={index}
                              label={specialty}
                              size="small"
                              sx={{ mr: 0.5, mb: 0.5 }}
                            />
                          ))}
                        </Box>
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            mt: 1,
                            color: provider.availability.includes('today') ? 'success.main' : 'text.secondary'
                          }}
                        >
                          {provider.availability}
                        </Typography>
                        <Button
                          variant="contained"
                          fullWidth
                          sx={{ mt: 2 }}
                          onClick={() => handleBookAppointment(provider)}
                        >
                          Book Appointment
                        </Button>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Search;