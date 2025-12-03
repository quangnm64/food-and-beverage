'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function MyBookingsPage() {
    const { user } = useAuth();
    const router = useRouter();

    React.useEffect(() => {
        if (!user) {
            router.push('/login?redirect=/my-bookings');
        }
    }, [user, router]);

    if (!user) {
        return null; // Or a loading spinner
    }

    return (
        <Container maxWidth="md" sx={{ py: 8 }}>
            <Typography
                variant="h3"
                component="h1"
                align="center"
                sx={{ mb: 6, fontFamily: 'Playfair Display', fontWeight: 700 }}
            >
                My Bookings
            </Typography>

            {user.myBookings && user.myBookings.length > 0 ? (
                <List sx={{ width: '100%', bgcolor: 'background.paper', borderRadius: 2, boxShadow: 2 }}>
                    {user.myBookings.map((booking: any, index: number) => (
                        <React.Fragment key={booking.id || index}>
                            <ListItem alignItems="flex-start" sx={{ py: 3 }}>
                                <ListItemText
                                    primary={
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                            <Typography variant="h6" component="span" fontWeight="bold">
                                                {booking.date} at {booking.time}
                                            </Typography>
                                            <Chip label={booking.status || 'Confirmed'} color="success" size="small" />
                                        </Box>
                                    }
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                component="span"
                                                variant="body2"
                                                color="text.primary"
                                                sx={{ display: 'block', mb: 0.5 }}
                                            >
                                                Branch: {booking.branch} | Guests: {booking.guests}
                                            </Typography>
                                            {booking.requests && (
                                                <Typography component="span" variant="body2" color="text.secondary">
                                                    Requests: {booking.requests}
                                                </Typography>
                                            )}
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                            {index < user.myBookings.length - 1 && <Paper variant="outlined" sx={{ mx: 2 }} />}
                        </React.Fragment>
                    ))}
                </List>
            ) : (
                <Box sx={{ textAlign: 'center', py: 8 }}>
                    <Typography variant="h6" color="text.secondary" sx={{ mb: 2 }}>
                        You haven't made any bookings yet.
                    </Typography>
                    <Button variant="contained" component={Link} href="/booking">
                        Book a Table Now
                    </Button>
                </Box>
            )}
        </Container>
    );
}
