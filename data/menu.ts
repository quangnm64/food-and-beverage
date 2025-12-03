export type MenuItem = {
    id: string;
    name: string;
    description: string;
    price: string;
    category: string;
    image: string;
    featured?: boolean;
};

export const menuItems: MenuItem[] = [
    {
        id: '1',
        name: 'Signature Espresso',
        description: 'Rich and bold espresso blend with notes of dark chocolate.',
        price: '$4.50',
        category: 'Coffee',
        image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&q=80',
        featured: true,
    },
    {
        id: '2',
        name: 'Truffle Mushroom Pasta',
        description: 'Fresh tagliatelle with creamy truffle sauce and wild mushrooms.',
        price: '$18.00',
        category: 'Mains',
        image: 'https://images.unsplash.com/photo-1556760544-74068565f05c?w=500&q=80',
        featured: true,
    },
    {
        id: '3',
        name: 'Avocado Toast',
        description: 'Sourdough bread topped with smashed avocado, poached egg, and chili flakes.',
        price: '$12.00',
        category: 'Snacks',
        image: 'https://images.unsplash.com/photo-1588137372308-15f75323ca8d?w=500&q=80',
    },
    {
        id: '4',
        name: 'Berry Bliss Smoothie',
        description: 'A refreshing blend of strawberries, blueberries, and yogurt.',
        price: '$7.00',
        category: 'Juices',
        image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=500&q=80',
    },
    {
        id: '5',
        name: 'Classic Cheesecake',
        description: 'Creamy New York style cheesecake with berry compote.',
        price: '$8.50',
        category: 'Desserts',
        image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=500&q=80',
        featured: true,
    },
    {
        id: '6',
        name: 'Grilled Salmon',
        description: 'Atlantic salmon fillet with asparagus and lemon butter sauce.',
        price: '$22.00',
        category: 'Mains',
        image: 'https://images.unsplash.com/photo-1467003909585-2f8a7270028d?w=500&q=80',
    },
    {
        id: '7',
        name: 'Cappuccino',
        description: 'Espresso with steamed milk and a thick layer of foam.',
        price: '$5.00',
        category: 'Coffee',
        image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=500&q=80',
    },
    {
        id: '8',
        name: 'Chocolate Lava Cake',
        description: 'Warm chocolate cake with a molten center, served with vanilla ice cream.',
        price: '$9.00',
        category: 'Desserts',
        image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=500&q=80',
    },
];
