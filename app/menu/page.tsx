'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { dishes, categories } from '@/data/dishes';
import DishCard from '@/components/Dish/DishCard';
import { Grid } from '@mui/material';

export default function MenuPage() {
    const [searchTerm, setSearchTerm] = React.useState('');
    const [selectedCategory, setSelectedCategory] = React.useState('All');

    const filteredDishes = dishes.filter((dish) => {
        const matchesSearch = dish.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || dish.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <Container maxWidth="lg" sx={{ py: 8 }}>
            <Typography
                variant="h3"
                component="h1"
                align="center"
                sx={{ mb: 6, fontFamily: 'Playfair Display', fontWeight: 700, color: 'text.primary' }}
            >
                Our Menu
            </Typography>

            {/* Search and Filter */}
            <Box sx={{ mb: 6 }}>
                <Grid container spacing={4} justifyContent="center">
                    <Grid size={{ xs: 12, md: 6 }}>
                        <TextField
                            fullWidth
                            placeholder="Search for a dish..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            }}
                            sx={{ bgcolor: 'background.paper', borderRadius: 1 }}
                        />
                    </Grid>
                </Grid>
                <Stack
                    direction="row"
                    spacing={1}
                    sx={{ mt: 4, overflowX: 'auto', pb: 2, justifyContent: { md: 'center' } }}
                >
                    {categories.map((category) => (
                        <Chip
                            key={category}
                            label={category}
                            onClick={() => setSelectedCategory(category)}
                            color={selectedCategory === category ? 'primary' : 'default'}
                            variant={selectedCategory === category ? 'filled' : 'outlined'}
                            clickable
                            sx={{ fontWeight: 600 }}
                        />
                    ))}
                </Stack>
            </Box>

            {/* Dishes Grid */}
            <Grid container spacing={4}>
                {filteredDishes.length > 0 ? (
                    filteredDishes.map((dish) => (
                        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={dish.id}>
                            <DishCard dish={dish} />
                        </Grid>
                    ))
                ) : (
                    <Grid size={{ xs: 12 }}>
                        <Typography variant="h6" align="center" color="text.secondary">
                            No dishes found.
                        </Typography>
                    </Grid>
                )}
            </Grid>
        </Container>
    );
}
