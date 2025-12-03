'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { Dayjs } from 'dayjs';

export default function ReservationPage() {
    const [formData, setFormData] = React.useState({
        name: '',
        phone: '',
        email: '',
        guests: '',
        date: null as Dayjs | null,
        time: null as Dayjs | null,
    });

    const [errors, setErrors] = React.useState({
        name: false,
        phone: false,
        guests: false,
        date: false,
        time: false,
    });

    const [openSnackbar, setOpenSnackbar] = React.useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
        setErrors({
            ...errors,
            [event.target.name]: false,
        });
    };

    const handleDateChange = (newValue: Dayjs | null) => {
        setFormData({ ...formData, date: newValue });
        setErrors({ ...errors, date: false });
    };

    const handleTimeChange = (newValue: Dayjs | null) => {
        setFormData({ ...formData, time: newValue });
        setErrors({ ...errors, time: false });
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const newErrors = {
            name: formData.name === '',
            phone: formData.phone === '',
            guests: formData.guests === '',
            date: formData.date === null,
            time: formData.time === null,
        };

        setErrors(newErrors);

        if (!Object.values(newErrors).some((error) => error)) {
            // Submit logic here
            console.log('Form Submitted', formData);
            setOpenSnackbar(true);
            // Reset form
            setFormData({
                name: '',
                phone: '',
                email: '',
                guests: '',
                date: null,
                time: null,
            });
        }
    };

    const handleCloseSnackbar = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackbar(false);
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Container maxWidth="md" sx={{ py: 8 }}>
                <Typography variant="h2" component="h1" align="center" gutterBottom sx={{ fontFamily: 'Playfair Display', fontWeight: 700, mb: 2 }}>
                    Book a Table
                </Typography>
                <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6 }}>
                    Reserve your spot for an unforgettable dining experience.
                </Typography>

                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <Grid container spacing={4}>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <TextField
                                required
                                fullWidth
                                id="name"
                                label="Full Name"
                                name="name"
                                autoComplete="name"
                                value={formData.name}
                                onChange={handleChange}
                                error={errors.name}
                                helperText={errors.name ? 'Name is required' : ''}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <TextField
                                required
                                fullWidth
                                id="phone"
                                label="Phone Number"
                                name="phone"
                                autoComplete="tel"
                                value={formData.phone}
                                onChange={handleChange}
                                error={errors.phone}
                                helperText={errors.phone ? 'Phone number is required' : ''}
                            />
                        </Grid>
                        <Grid size={{ xs: 12 }}>
                            <TextField
                                fullWidth
                                id="email"
                                label="Email Address (Optional)"
                                name="email"
                                autoComplete="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 4 }}>
                            <TextField
                                select
                                required
                                fullWidth
                                id="guests"
                                label="Guests"
                                name="guests"
                                value={formData.guests}
                                onChange={handleChange}
                                error={errors.guests}
                                helperText={errors.guests ? 'Please select number of guests' : ''}
                            >
                                {[1, 2, 3, 4, 5, 6, 7, 8, '8+'].map((option) => (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 4 }}>
                            <DatePicker
                                label="Date"
                                value={formData.date}
                                onChange={handleDateChange}
                                slotProps={{
                                    textField: {
                                        fullWidth: true,
                                        required: true,
                                        error: errors.date,
                                        helperText: errors.date ? 'Date is required' : '',
                                    },
                                }}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 4 }}>
                            <TimePicker
                                label="Time"
                                value={formData.time}
                                onChange={handleTimeChange}
                                slotProps={{
                                    textField: {
                                        fullWidth: true,
                                        required: true,
                                        error: errors.time,
                                        helperText: errors.time ? 'Time is required' : '',
                                    },
                                }}
                            />
                        </Grid>
                        <Grid size={{ xs: 12 }}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                size="large"
                                sx={{ mt: 3, mb: 2, py: 1.5 }}
                            >
                                Confirm Reservation
                            </Button>
                        </Grid>
                    </Grid>
                </Box>

                <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                    <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
                        Reservation request sent successfully!
                    </Alert>
                </Snackbar>
            </Container>
        </LocalizationProvider>
    );
}
