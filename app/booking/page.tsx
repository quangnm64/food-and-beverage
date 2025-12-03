'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { Grid } from '@mui/material';

const timeSlots = [
    '11:00', '11:30', '12:00', '12:30', '13:00', '13:30',
    '18:00', '18:30', '19:00', '19:30', '20:00', '20:30'
];

const branches = ['Downtown', 'Riverside', 'Uptown'];

export default function BookingPage() {
    const { user, updateUser } = useAuth();
    const router = useRouter();
    const [date, setDate] = React.useState<Dayjs | null>(dayjs());
    const [time, setTime] = React.useState('');
    const [guests, setGuests] = React.useState(2);
    const [branch, setBranch] = React.useState(branches[0]);
    const [requests, setRequests] = React.useState('');
    const [openSnackbar, setOpenSnackbar] = React.useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!user) {
            router.push('/login?redirect=/booking');
            return;
        }

        if (!date || !time) {
            alert('Please select date and time');
            return;
        }

        const newBooking = {
            id: Math.random().toString(36).substr(2, 9),
            date: date.format('YYYY-MM-DD'),
            time,
            guests,
            branch,
            requests,
            status: 'Confirmed',
        };

        const updatedUser = {
            ...user,
            myBookings: [...user.myBookings, newBooking],
        };

        updateUser(updatedUser);
        setOpenSnackbar(true);

        // Reset form
        setTime('');
        setRequests('');
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Container maxWidth="md" sx={{ py: 8 }}>
                <Typography
                    variant="h3"
                    component="h1"
                    align="center"
                    sx={{ mb: 2, fontFamily: 'Playfair Display', fontWeight: 700 }}
                >
                    Book a Table
                </Typography>
                <Typography variant="body1" align="center" sx={{ mb: 6, color: 'text.secondary' }}>
                    Reserve your spot at Gourmet Haven for an unforgettable dining experience.
                </Typography>

                <Box component="form" onSubmit={handleSubmit} sx={{ bgcolor: 'background.paper', p: 4, borderRadius: 2, boxShadow: 3 }}>
                    <Grid container spacing={3}>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <DatePicker
                                label="Date"
                                value={date}
                                onChange={(newValue) => setDate(newValue)}
                                slotProps={{ textField: { fullWidth: true } }}
                                disablePast
                            />
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <TextField
                                select
                                fullWidth
                                label="Time"
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                            >
                                {timeSlots.map((slot) => (
                                    <MenuItem key={slot} value={slot}>
                                        {slot}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <TextField
                                type="number"
                                fullWidth
                                label="Number of Guests"
                                value={guests}
                                onChange={(e) => setGuests(parseInt(e.target.value))}
                                slotProps={{ htmlInput: { min: 1, max: 20 } }}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <TextField
                                select
                                fullWidth
                                label="Branch"
                                value={branch}
                                onChange={(e) => setBranch(e.target.value)}
                            >
                                {branches.map((b) => (
                                    <MenuItem key={b} value={b}>
                                        {b}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid size={{ xs: 12 }}>
                            <TextField
                                fullWidth
                                multiline
                                rows={3}
                                label="Special Requests (Optional)"
                                value={requests}
                                onChange={(e) => setRequests(e.target.value)}
                            />
                        </Grid>
                        <Grid size={{ xs: 12 }}>
                            <Button
                                type="submit"
                                variant="contained"
                                size="large"
                                fullWidth
                                sx={{ py: 1.5, fontSize: '1.1rem' }}
                            >
                                Confirm Reservation
                            </Button>
                        </Grid>
                    </Grid>
                </Box>

                <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                    <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
                        Booking confirmed! Check My Bookings for details.
                    </Alert>
                </Snackbar>
            </Container>
        </LocalizationProvider>
    );
}
