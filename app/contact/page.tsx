import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function ContactPage() {
    return (
        <Container maxWidth="md" sx={{ py: 8 }}>
            <Typography
                variant="h3"
                component="h1"
                align="center"
                sx={{ mb: 6, fontFamily: 'Playfair Display', fontWeight: 700 }}
            >
                Contact Us
            </Typography>
            <Grid container spacing={4}>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Typography variant="h6" gutterBottom>
                        Get in Touch
                    </Typography>
                    <Typography paragraph color="text.secondary">
                        Have a question or feedback? We'd love to hear from you.
                    </Typography>
                    <Typography variant="body1" fontWeight="bold">
                        Address:
                    </Typography>
                    <Typography paragraph color="text.secondary">
                        123 Culinary Avenue, Food City, FC 12345
                    </Typography>
                    <Typography variant="body1" fontWeight="bold">
                        Email:
                    </Typography>
                    <Typography paragraph color="text.secondary">
                        info@fandb.com
                    </Typography>
                    <Typography variant="body1" fontWeight="bold">
                        Phone:
                    </Typography>
                    <Typography paragraph color="text.secondary">
                        (123) 456-7890
                    </Typography>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Box component="form" noValidate autoComplete="off">
                        <TextField fullWidth label="Name" margin="normal" />
                        <TextField fullWidth label="Email" margin="normal" />
                        <TextField fullWidth label="Message" multiline rows={4} margin="normal" />
                        <Button variant="contained" size="large" sx={{ mt: 2 }}>
                            Send Message
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}
