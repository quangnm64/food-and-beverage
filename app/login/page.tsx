'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

export default function LoginPage() {
    const { login } = useAuth();
    const router = useRouter();
    const searchParams = useSearchParams();
    const redirect = searchParams.get('redirect') || '/';
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            login(email);
            router.push(redirect);
        }
    };

    return (
        <Suspense fallback={<div>Đang tải...</div>}>
            <Container maxWidth="sm" sx={{ py: 12 }}>
                <Paper sx={{ p: 4, borderRadius: 2, boxShadow: 3 }}>
                    <Typography
                        variant="h4"
                        component="h1"
                        align="center"
                        sx={{ mb: 4, fontFamily: 'Playfair Display', fontWeight: 700 }}
                    >
                        Login
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit}>
                        <TextField
                            fullWidth
                            label="Email Address"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            margin="normal"
                            required
                        />
                        <TextField
                            fullWidth
                            label="Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            margin="normal"
                            required
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            size="large"
                            sx={{ mt: 4, mb: 2, py: 1.5 }}
                        >
                            Login
                        </Button>
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography variant="body2" color="text.secondary">
                                Dont have an account?
                                <Link href={`/register?redirect=${redirect}`} style={{ color: '#FF5722', textDecoration: 'none', fontWeight: 600 }}>
                                    Register
                                </Link>
                            </Typography>
                        </Box>
                    </Box>
                </Paper>
            </Container>
        </Suspense>
    );
}
