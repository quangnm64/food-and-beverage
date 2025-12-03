'use client';

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions, Button, Box, Rating } from '@mui/material';
import Link from 'next/link';
import { Dish } from '@/data/dishes';
import { useOrder } from '@/context/OrderContext';

interface DishCardProps {
    dish: Dish;
}

export default function DishCard({ dish }: DishCardProps) {
    const { addToOrder } = useOrder();

    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault(); // Prevent navigation if clicking the button
        e.stopPropagation();
        addToOrder({
            id: dish.id,
            name: dish.name,
            price: dish.price,
            image: dish.images[0],
            quantity: 1,
        });
    };

    return (
        <Card sx={{ maxWidth: 345, height: '100%', display: 'flex', flexDirection: 'column', transition: '0.3s', '&:hover': { transform: 'translateY(-5px)', boxShadow: 6 } }}>
            <CardActionArea component={Link} href={`/menu/${dish.slug}`}>
                <CardMedia
                    component="img"
                    height="200"
                    image={dish.images[0]}
                    alt={dish.name}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                        <Typography gutterBottom variant="h6" component="div" sx={{ fontFamily: 'Playfair Display', fontWeight: 700 }}>
                            {dish.name}
                        </Typography>
                        <Typography variant="h6" color="primary.main" fontWeight="bold">
                            ${dish.price}
                        </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                        {dish.description}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Rating value={dish.rating} precision={0.1} readOnly size="small" />
                        <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                            ({dish.rating})
                        </Typography>
                    </Box>
                </CardContent>
            </CardActionArea>
            <CardActions sx={{ p: 2, pt: 0 }}>
                <Button size="small" variant="contained" color="primary" fullWidth onClick={handleAddToCart}>
                    Add to Order
                </Button>
            </CardActions>
        </Card>
    );
}
