import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const locations = [
    {
        name: 'Downtown Branch',
        address: '123 Main St, Downtown',
        phone: '(555) 123-4567',
    },
    {
        name: 'Riverside Branch',
        address: '456 River Rd, Riverside',
        phone: '(555) 987-6543',
    },
    {
        name: 'Uptown Branch',
        address: '789 Hill Top, Uptown',
        phone: '(555) 246-8135',
    },
];

export default function LocationsPage() {
    return (
        <Container maxWidth="lg" sx={{ py: 8 }}>
            <Typography
                variant="h3"
                component="h1"
                align="center"
                sx={{ mb: 6, fontFamily: 'Playfair Display', fontWeight: 700 }}
            >
                Our Locations
            </Typography>
            <Grid container spacing={4}>
                {locations.map((loc) => (
                    <Grid size={{ xs: 12, md: 4 }} key={loc.name}>
                        <Card sx={{ height: '100%', borderRadius: 2, boxShadow: 2 }}>
                            <CardContent>
                                <Typography variant="h5" component="div" gutterBottom fontWeight="bold">
                                    {loc.name}
                                </Typography>
                                <Typography color="text.secondary" paragraph>
                                    {loc.address}
                                </Typography>
                                <Typography variant="body2">
                                    Phone: {loc.phone}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
