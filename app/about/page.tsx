import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';

export default function AboutPage() {
    return (
        <Container maxWidth="lg" sx={{ py: 8 }}>
            <Typography
                variant="h3"
                component="h1"
                align="center"
                sx={{ mb: 6, fontFamily: 'Playfair Display', fontWeight: 700 }}
            >
                About Us
            </Typography>
            <Grid container spacing={6} alignItems="center">
                <Grid size={{ xs: 12, md: 6 }}>
                    <Box
                        component="img"
                        src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                        alt="Restaurant Interior"
                        sx={{ width: '100%', borderRadius: 4, boxShadow: 3 }}
                    />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Typography variant="h5" gutterBottom sx={{ fontFamily: 'Playfair Display', fontWeight: 600 }}>
                        Our Story
                    </Typography>
                    <Typography paragraph color="text.secondary">
                        Founded in 2010, FANDB has been serving exquisite culinary experiences to our guests.
                        Our mission is to bring people together through the love of food, offering a blend of
                        traditional flavors and modern innovation.
                    </Typography>
                    <Typography paragraph color="text.secondary">
                        We source our ingredients from local farmers and sustainable suppliers to ensure the
                        highest quality and freshness in every dish.
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
}
