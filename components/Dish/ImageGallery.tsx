'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface ImageGalleryProps {
    images: string[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    if (!images || images.length === 0) return null;

    return (
        <Box sx={{ position: 'relative', width: '100%', height: 400, borderRadius: 4, overflow: 'hidden', boxShadow: 3 }}>
            <Box
                component="img"
                src={images[currentIndex]}
                alt={`Dish image ${currentIndex + 1}`}
                sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease-in-out',
                }}
            />
            {images.length > 1 && (
                <>
                    <IconButton
                        onClick={handlePrev}
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: 16,
                            transform: 'translateY(-50%)',
                            bgcolor: 'rgba(255,255,255,0.7)',
                            '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' },
                        }}
                    >
                        <ArrowBackIosNewIcon />
                    </IconButton>
                    <IconButton
                        onClick={handleNext}
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            right: 16,
                            transform: 'translateY(-50%)',
                            bgcolor: 'rgba(255,255,255,0.7)',
                            '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' },
                        }}
                    >
                        <ArrowForwardIosIcon />
                    </IconButton>
                </>
            )}
        </Box>
    );
}
