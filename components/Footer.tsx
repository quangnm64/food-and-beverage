'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                py: 6,
                px: 2,
                mt: 'auto',
                backgroundColor: 'primary.dark',
                color: 'primary.contrastText',
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid size={{ xs: 12, sm: 4 }}>
                        <Typography variant="h6" gutterBottom sx={{ fontFamily: 'Playfair Display' }}>
                            Contact Us
                        </Typography>
                        <Typography variant="body2">
                            123 Culinary Avenue, Food City
                        </Typography>
                        <Typography variant="body2">
                            Phone: (123) 456-7890
                        </Typography>
                        <Typography variant="body2">
                            Email: info@gourmethaven.com
                        </Typography>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 4 }}>
                        <Typography variant="h6" gutterBottom sx={{ fontFamily: 'Playfair Display' }}>
                            Opening Hours
                        </Typography>
                        <Typography variant="body2">
                            Mon - Fri: 10:00 AM - 10:00 PM
                        </Typography>
                        <Typography variant="body2">
                            Sat - Sun: 09:00 AM - 11:00 PM
                        </Typography>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 4 }}>
                        <Typography variant="h6" gutterBottom sx={{ fontFamily: 'Playfair Display' }}>
                            Follow Us
                        </Typography>
                        <Box>
                            <IconButton color="inherit" aria-label="Facebook">
                                <FacebookIcon />
                            </IconButton>
                            <IconButton color="inherit" aria-label="Instagram">
                                <InstagramIcon />
                            </IconButton>
                            <IconButton color="inherit" aria-label="Twitter">
                                <TwitterIcon />
                            </IconButton>
                        </Box>
                    </Grid>
                </Grid>
                <Box sx={{ mt: 4, textAlign: 'center' }}>
                    <Typography variant="body2" color="inherit" sx={{ opacity: 0.7 }}>
                        {'© '}
                        {new Date().getFullYear()}
                        {' Gourmet Haven. All rights reserved.'}
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}
