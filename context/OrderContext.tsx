'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export interface OrderItem {
    id: string;
    name: string;
    price: number;
    image: string;
    quantity: number;
}

interface OrderContextType {
    orderItems: OrderItem[];
    addToOrder: (item: OrderItem) => void;
    removeFromOrder: (id: string) => void;
    clearOrder: () => void;
    total: number;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export function OrderProvider({ children }: { children: React.ReactNode }) {
    const [orderItems, setOrderItems] = useState<OrderItem[]>([]);

    useEffect(() => {
        const storedOrder = localStorage.getItem('orderItems');
        if (storedOrder) {
            setOrderItems(JSON.parse(storedOrder));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('orderItems', JSON.stringify(orderItems));
    }, [orderItems]);

    const addToOrder = (item: OrderItem) => {
        setOrderItems((prev) => {
            const existing = prev.find((i) => i.id === item.id);
            if (existing) {
                return prev.map((i) =>
                    i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
                );
            }
            return [...prev, item];
        });
    };

    const removeFromOrder = (id: string) => {
        setOrderItems((prev) => prev.filter((i) => i.id !== id));
    };

    const clearOrder = () => {
        setOrderItems([]);
    };

    const total = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <OrderContext.Provider value={{ orderItems, addToOrder, removeFromOrder, clearOrder, total }}>
            {children}
        </OrderContext.Provider>
    );
}

export function useOrder() {
    const context = useContext(OrderContext);
    if (context === undefined) {
        throw new Error('useOrder must be used within an OrderProvider');
    }
    return context;
}
