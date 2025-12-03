'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export interface User {
    id: string;
    name: string;
    email: string;
    myBookings: any[]; // Define Booking interface later
    loyaltyPoints: number;
}

interface AuthContextType {
    user: User | null;
    login: (email: string) => void;
    logout: () => void;
    register: (name: string, email: string) => void;
    updateUser: (user: User) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = (email: string) => {
        // Mock login
        const mockUser: User = {
            id: '1',
            name: 'John Doe',
            email,
            myBookings: [],
            loyaltyPoints: 100,
        };
        setUser(mockUser);
        localStorage.setItem('user', JSON.stringify(mockUser));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    const register = (name: string, email: string) => {
        const newUser: User = {
            id: Math.random().toString(36).substr(2, 9),
            name,
            email,
            myBookings: [],
            loyaltyPoints: 0,
        };
        setUser(newUser);
        localStorage.setItem('user', JSON.stringify(newUser));
    };

    const updateUser = (updatedUser: User) => {
        setUser(updatedUser);
        localStorage.setItem('user', JSON.stringify(updatedUser));
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, register, updateUser }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
