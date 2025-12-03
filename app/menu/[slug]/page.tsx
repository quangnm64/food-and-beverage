'use client';

import * as React from 'react';
import { useParams } from 'next/navigation';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Rating from '@mui/material/Rating';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import { dishes } from '@/data/dishes';
import ImageGallery from '@/components/Dish/ImageGallery';
import { useOrder } from '@/context/OrderContext';
import Link from 'next/link';

export default function DishDetailPage() {
    const params = useParams();
    const slug = params.slug as string;
    const dish = dishes.find((d) => d.slug === slug);
    const { addToOrder } = useOrder();

    if (!dish) {
        return (
            <Container sx={{ py: 8, textAlign: 'center' }}>
                <Typography variant="h4">Dish not found</Typography>
                <Button component={Link} href="/menu" sx={{ mt: 2 }}>
                    Back to Menu
                </Button>
            </Container>
        );
    }

    const handleAddToCart = () => {
        addToOrder({
            id: dish.id,
            name: dish.name,
            price: dish.price,
            image: dish.images[0],
            quantity: 1,
        });
    };

    return (
        <Box>
            <Container maxWidth="lg" sx={{ py: 8, pb: 12 }}>
                <Grid container spacing={6}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <ImageGallery images={dish.images} />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography variant="h3" component="h1" sx={{ fontFamily: 'Playfair Display', fontWeight: 700, mb: 2 }}>
                            {dish.name}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <Rating value={dish.rating} precision={0.1} readOnly />
                            <Typography variant="body1" sx={{ ml: 1, color: 'text.secondary' }}>
                                ({dish.rating} / 5)
                            </Typography>
                        </Box>
                        <Typography variant="h4" color="primary.main" sx={{ mb: 3, fontWeight: 'bold' }}>
                            ${dish.price}
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ mb: 4, fontSize: '1.1rem' }}>
                            {dish.description}
                        </Typography>

                        <Divider sx={{ mb: 3 }} />

                        <Typography variant="h6" sx={{ mb: 2, fontFamily: 'Playfair Display' }}>
                            Ingredients
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
                            {dish.ingredients.map((ingredient) => (
                                <Chip key={ingredient} label={ingredient} variant="outlined" />
                            ))}
                        </Box>

                        <Button
                            variant="contained"
                            size="large"
                            fullWidth
                            onClick={handleAddToCart}
                            sx={{ py: 1.5, fontSize: '1.1rem' }}
                        >
                            Add to Order
                        </Button>
                    </Grid>
                </Grid>
            </Container>

            {/* Sticky Booking Bar */}
            <Paper
                sx={{
                    position: 'fixed',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    p: 2,
                    zIndex: 1000,
                    borderTop: '1px solid',
                    borderColor: 'divider',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    px: { xs: 2, md: 8 },
                }}
                elevation={3}
            >
                <Box>
                    <Typography variant="subtitle1" fontWeight="bold">
                        Want to dine in?
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Reserve a table for the best experience.
                    </Typography>
                </Box>
                <Button
                    variant="contained"
                    color="secondary"
                    component={Link}
                    href="/booking"
                    sx={{ borderRadius: 50, px: 4 }}
                >
                    Book a Table
                </Button>
            </Paper>
        </Box>
    );
}
