import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Container, Typography, Box, Button, Stack } from '@mui/material';
import Search from './pages/Search';
import BookingConfirmation from './pages/BookingConfirmation';
import { AppointmentProvider } from './context/AppointmentContext';
import Appointments from './pages/Appointments';

function App() {
  return (
    <AppointmentProvider>
      <Router>
        <Container 
          sx={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Box 
            sx={{ 
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              gap: 4
            }}
          >
            <Typography 
              variant="h2" 
              component="h1" 
              sx={{ 
                fontWeight: 'bold',
                mb: 2 
              }}
            >
              Welcome to TotSpot
            </Typography>
            
            <Typography 
              variant="h5" 
              component="h2" 
              sx={{ mb: 4 }}
            >
              Your Pediatric Care Platform
            </Typography>
            
            <Stack 
              direction="row" 
              spacing={4} 
              sx={{ 
                justifyContent: 'center',
                width: '100%',
                mb: 4
              }}
            >
              <Button 
                variant="contained" 
                component={Link} 
                to="/search"
                sx={{ 
                  px: 6, 
                  py: 2,
                  fontSize: '1.1rem'
                }}
              >
                Find a Provider
              </Button>
              
              <Button 
                variant="outlined" 
                component={Link} 
                to="/appointments"
                sx={{ 
                  px: 6, 
                  py: 2,
                  fontSize: '1.1rem'
                }}
              >
                My Appointments
              </Button>
            </Stack>

            <Box sx={{ width: '100%' }}>
              <Routes>
                <Route path="/" element={
                  <Typography variant="h6" sx={{ mt: 4 }}>
                    Select an option above to get started
                  </Typography>
                } />
                <Route path="/search" element={<Search />} />
                <Route path="/booking-confirmation" element={<BookingConfirmation />} />
                <Route path="/appointments" element={<Appointments />} />
              </Routes>
            </Box>
          </Box>
        </Container>
      </Router>
    </AppointmentProvider>
  );
}

export default App;