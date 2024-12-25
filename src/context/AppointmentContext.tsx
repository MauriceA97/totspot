import { createContext, useContext, useState } from 'react';

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

interface Appointment {
  id: string;
  provider: Provider;
  date: string;
  time: string;
  reason: string;
  createdAt: Date;
}

interface AppointmentContextType {
  appointments: Appointment[];
  addAppointment: (appointment: Omit<Appointment, 'id' | 'createdAt'>) => void;
}

const AppointmentContext = createContext<AppointmentContextType | undefined>(undefined);

export const AppointmentProvider = ({ children }: { children: React.ReactNode }) => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  const addAppointment = (appointmentData: Omit<Appointment, 'id' | 'createdAt'>) => {
    const newAppointment = {
      ...appointmentData,
      id: Date.now().toString(),
      createdAt: new Date(),
    };
    setAppointments(prev => [...prev, newAppointment]);
  };

  return (
    <AppointmentContext.Provider value={{ appointments, addAppointment }}>
      {children}
    </AppointmentContext.Provider>
  );
};

export const useAppointments = () => {
  const context = useContext(AppointmentContext);
  if (!context) {
    throw new Error('useAppointments must be used within an AppointmentProvider');
  }
  return context;
};