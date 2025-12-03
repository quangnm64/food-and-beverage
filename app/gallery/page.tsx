'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1',
        title: 'BBQ',
    },
    {
        img: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe',
        title: 'Salad',
    },
    {
        img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38',
        title: 'Pizza',
    },
    {
        img: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445',
        title: 'Pancakes',
    },
    {
        img: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187',
        title: 'Cake',
    },
    {
        img: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543',
        title: 'Sandwich',
    },
    {
        img: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929',
        title: 'French Toast',
    },
    {
        img: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327',
        title: 'Steak',
    },
    {
        img: 'https://images.unsplash.com/photo-1529042410759-befb1204b468',
        title: 'Burger',
    },
    {
        img: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601',
        title: 'Pasta',
    },
    {
        img: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87',
        title: 'Drink',
    },
    {
        img: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f',
        title: 'Ice Cream',
    },
];

export default function GalleryPage() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.down('md'));

    const cols = isMobile ? 1 : isTablet ? 2 : 3;

    return (
        <Container maxWidth="lg" sx={{ py: 8 }}>
            <Typography variant="h2" component="h1" align="center" gutterBottom sx={{ fontFamily: 'Playfair Display', fontWeight: 700, mb: 2 }}>
                Gallery
            </Typography>
            <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6 }}>
                A visual feast of our culinary creations and ambiance.
            </Typography>

            <Box sx={{ overflowY: 'scroll' }}>
                <ImageList variant="masonry" cols={cols} gap={16}>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img} sx={{ overflow: 'hidden', borderRadius: 2 }}>
                            <Box
                                component="img"
                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                                sx={{
                                    transition: 'transform 0.3s ease-in-out',
                                    '&:hover': {
                                        transform: 'scale(1.1)',
                                        cursor: 'pointer',
                                    },
                                }}
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
        </Container>
    );
}
