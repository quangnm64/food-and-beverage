'use client';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { useOrder } from '@/context/OrderContext';
import { useRouter } from 'next/navigation';

const pages = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Bookings', path: '/booking' }, // Changed from Reservation to Booking to match request
    { name: 'Reviews', path: '/reviews' }, // Added Reviews as requested
];

const settings = ['Profile', 'My Bookings', 'Logout'];

function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const { user, logout } = useAuth();
    const { orderItems } = useOrder();
    const router = useRouter();

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleUserMenuClick = (setting: string) => {
        handleCloseUserMenu();
        if (setting === 'Logout') {
            logout();
            router.push('/');
        } else if (setting === 'Profile') {
            router.push('/profile');
        } else if (setting === 'My Bookings') {
            router.push('/my-bookings');
        }
    };

    const cartCount = orderItems.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <AppBar position="sticky" sx={{ backgroundColor: 'background.paper', color: 'text.primary' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* Desktop Logo */}
                    <Typography
                        variant="h6"
                        noWrap
                        component={Link}
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'Playfair Display',
                            fontWeight: 700,
                            letterSpacing: '.1rem',
                            color: 'primary.main',
                            textDecoration: 'none',
                        }}
                    >
                        FANDB
                    </Typography>

                    {/* Mobile Menu */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.name} onClick={handleCloseNavMenu} component={Link} href={page.path}>
                                    <Typography textAlign="center">{page.name}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    {/* Mobile Logo */}
                    <Typography
                        variant="h5"
                        noWrap
                        component={Link}
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'Playfair Display',
                            fontWeight: 700,
                            letterSpacing: '.1rem',
                            color: 'primary.main',
                            textDecoration: 'none',
                        }}
                    >
                        FANDB
                    </Typography>

                    {/* Desktop Navigation */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page.name}
                                component={Link}
                                href={page.path}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'text.primary', display: 'block', fontWeight: 600 }}
                            >
                                {page.name}
                            </Button>
                        ))}
                    </Box>

                    {/* Right Side: Cart & User */}
                    <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center', gap: 2 }}>
                        <IconButton aria-label="cart" component={Link} href="/checkout">
                            <Badge badgeContent={cartCount} color="primary">
                                <ShoppingCartIcon />
                            </Badge>
                        </IconButton>

                        {user ? (
                            <>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <Avatar alt={user.name} src="/static/images/avatar/2.jpg" />
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    sx={{ mt: '45px' }}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                    {settings.map((setting) => (
                                        <MenuItem key={setting} onClick={() => handleUserMenuClick(setting)}>
                                            <Typography textAlign="center">{setting}</Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </>
                        ) : (
                            <Button component={Link} href="/login" variant="outlined" color="primary">
                                Login
                            </Button>
                        )}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;
