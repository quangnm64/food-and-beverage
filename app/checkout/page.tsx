'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import { useOrder } from '@/context/OrderContext';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function CheckoutPage() {
    const { orderItems, removeFromOrder, clearOrder, total } = useOrder();
    const { user, updateUser } = useAuth();
    const router = useRouter();

    const handleCheckout = () => {
        if (!user) {
            router.push('/login?redirect=/checkout');
            return;
        }

        const newOrder = {
            id: Math.random().toString(36).substr(2, 9),
            date: new Date().toISOString().split('T')[0],
            time: new Date().toLocaleTimeString(),
            guests: 1, // Default for orders
            branch: 'Online Order',
            status: 'Completed',
            items: orderItems,
            total: total,
        };

        const updatedUser = {
            ...user,
            myBookings: [...user.myBookings, newOrder],
        };

        updateUser(updatedUser);
        clearOrder();
        router.push('/my-bookings');
    };

    if (orderItems.length === 0) {
        return (
            <Container maxWidth="md" sx={{ py: 8, textAlign: 'center' }}>
                <Typography variant="h4" gutterBottom>
                    Your Cart is Empty
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                    Looks like you haven't added any dishes yet.
                </Typography>
                <Button variant="contained" component={Link} href="/menu">
                    Browse Menu
                </Button>
            </Container>
        );
    }

    return (
        <Container maxWidth="md" sx={{ py: 8 }}>
            <Typography
                variant="h3"
                component="h1"
                align="center"
                sx={{ mb: 6, fontFamily: 'Playfair Display', fontWeight: 700 }}
            >
                Checkout
            </Typography>

            <Grid container spacing={4}>
                <Grid size={{ xs: 12, md: 8 }}>
                    <List sx={{ bgcolor: 'background.paper', borderRadius: 2, boxShadow: 1 }}>
                        {orderItems.map((item) => (
                            <React.Fragment key={item.id}>
                                <ListItem
                                    secondaryAction={
                                        <IconButton edge="end" aria-label="delete" onClick={() => removeFromOrder(item.id)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    }
                                >
                                    <ListItemAvatar>
                                        <Avatar src={item.image} alt={item.name} variant="rounded" sx={{ width: 56, height: 56, mr: 2 }} />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={item.name}
                                        secondary={`$${item.price} x ${item.quantity}`}
                                        primaryTypographyProps={{ fontWeight: 600 }}
                                    />
                                    <Typography variant="body1" fontWeight="bold">
                                        ${item.price * item.quantity}
                                    </Typography>
                                </ListItem>
                                <Divider variant="inset" component="li" />
                            </React.Fragment>
                        ))}
                    </List>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <Paper sx={{ p: 3, borderRadius: 2, boxShadow: 3 }}>
                        <Typography variant="h6" gutterBottom fontWeight="bold">
                            Order Summary
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                            <Typography variant="body1">Subtotal</Typography>
                            <Typography variant="body1" fontWeight="bold">
                                ${total.toFixed(2)}
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                            <Typography variant="body1">Tax (10%)</Typography>
                            <Typography variant="body1" fontWeight="bold">
                                ${(total * 0.1).toFixed(2)}
                            </Typography>
                        </Box>
                        <Divider sx={{ mb: 3 }} />
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
                            <Typography variant="h5" fontWeight="bold">
                                Total
                            </Typography>
                            <Typography variant="h5" color="primary.main" fontWeight="bold">
                                ${(total * 1.1).toFixed(2)}
                            </Typography>
                        </Box>
                        <Button
                            variant="contained"
                            size="large"
                            fullWidth
                            onClick={handleCheckout}
                            sx={{ py: 1.5, fontSize: '1.1rem' }}
                        >
                            Checkout
                        </Button>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
}
