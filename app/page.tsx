import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { dishes } from '@/data/dishes';
import DishCard from '@/components/Dish/DishCard';
import { Grid, Link } from '@mui/material';

export default function Home() {
  const featuredDishes = dishes.slice(0, 3); // Show top 3 dishes

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'primary.contrastText',
          py: { xs: 8, md: 12 },
          background: 'linear-gradient(45deg, #FF5722 30%, #FF8A50 90%)',
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography
            component="h1"
            variant="h2"
            sx={{ mb: 4, fontFamily: 'Playfair Display', fontWeight: 700 }}
          >
            Experience the Taste of Luxury
          </Typography>
          <Typography variant="h5" sx={{ mb: 6, opacity: 0.9 }}>
            Discover our premium selection of culinary delights, crafted with passion and the finest ingredients.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            component={Link}
            href="/menu"
            sx={{ px: 4, py: 1.5, fontSize: '1.1rem', borderRadius: 50 }}
          >
            Explore Menu
          </Button>
        </Container>
      </Box>

      {/* Featured Dishes Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h3"
          component="h2"
          align="center"
          sx={{ mb: 6, fontFamily: 'Playfair Display', fontWeight: 700, color: 'text.primary' }}
        >
          Featured Dishes
        </Typography>
        <Grid container spacing={4}>
          {featuredDishes.map((dish) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={dish.id}>
              <DishCard dish={dish} />
            </Grid>
          ))}
        </Grid>
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button variant="outlined" color="primary" size="large" component={Link} href="/menu">
            View Full Menu
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
