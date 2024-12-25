import { Container, Typography, Paper, Box, List, ListItem, ListItemText } from '@mui/material';
import { useAppointments } from '../context/AppointmentContext';

const Appointments = () => {
  const { appointments } = useAppointments();

  if (appointments.length === 0) {
    return (
      <Container maxWidth="md">
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography variant="h5">
            No appointments scheduled yet
          </Typography>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="md">
      <Typography variant="h4" sx={{ mb: 4 }}>
        My Appointments
      </Typography>
      <List>
        {appointments.map((appointment, index) => (
          <Paper key={index} sx={{ mb: 2 }}>
            <ListItem>
              <ListItemText
                primary={
                  <Typography variant="h6">
                    Dr. {appointment.provider.name}
                  </Typography>
                }
                secondary={
                  <Box sx={{ mt: 1 }}>
                    <Typography variant="body1">
                      Date: {appointment.date}
                    </Typography>
                    <Typography variant="body1">
                      Time: {appointment.time}
                    </Typography>
                    <Typography variant="body1">
                      Location: {appointment.provider.location}
                    </Typography>
                    {appointment.reason && (
                      <Typography variant="body1">
                        Reason: {appointment.reason}
                      </Typography>
                    )}
                  </Box>
                }
              />
            </ListItem>
          </Paper>
        ))}
      </List>
    </Container>
  );
};

export default Appointments;