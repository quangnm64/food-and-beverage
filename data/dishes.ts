export interface Dish {
    id: string;
    slug: string;
    name: string;
    description: string;
    images: string[];
    category: string;
    rating: number;
    price: number;
    ingredients: string[];
}

export const categories = [
    'All',
    'Appetizers',
    'Main Courses',
    'Desserts',
    'Beverages',
    'Coffee',
    'Cocktails',
];

export const dishes: Dish[] = [
    {
        id: '1',
        slug: 'grilled-salmon',
        name: 'Grilled Salmon',
        description: 'Fresh Atlantic salmon grilled to perfection, served with asparagus and lemon butter sauce.',
        images: ['/images/salmon.jpg'],
        category: 'Main Courses',
        rating: 4.8,
        price: 25.0,
        ingredients: ['Salmon', 'Asparagus', 'Lemon', 'Butter', 'Garlic'],
    },
    {
        id: '2',
        slug: 'wagyu-steak',
        name: 'Wagyu Beef Steak',
        description: 'Premium A5 Wagyu beef, pan-seared and served with truffle mashed potatoes.',
        images: ['/images/steak.jpg'],
        category: 'Main Courses',
        rating: 5.0,
        price: 85.0,
        ingredients: ['Wagyu Beef', 'Potatoes', 'Truffle Oil', 'Cream', 'Rosemary'],
    },
    {
        id: '3',
        slug: 'caesar-salad',
        name: 'Classic Caesar Salad',
        description: 'Crisp romaine lettuce tossed in homemade Caesar dressing, topped with croutons and parmesan.',
        images: ['/images/salad.jpg'],
        category: 'Appetizers',
        rating: 4.5,
        price: 12.0,
        ingredients: ['Romaine Lettuce', 'Croutons', 'Parmesan Cheese', 'Caesar Dressing', 'Anchovies'],
    },
    {
        id: '4',
        slug: 'tiramisu',
        name: 'Tiramisu',
        description: 'Traditional Italian dessert made with ladyfingers dipped in coffee, layered with mascarpone cream.',
        images: ['/images/tiramisu.jpg'],
        category: 'Desserts',
        rating: 4.9,
        price: 10.0,
        ingredients: ['Ladyfingers', 'Mascarpone', 'Coffee', 'Cocoa Powder', 'Eggs'],
    },
    {
        id: '5',
        slug: 'mojito',
        name: 'Classic Mojito',
        description: 'Refreshing cocktail with white rum, sugar, lime juice, soda water, and mint.',
        images: ['/images/mojito.jpg'],
        category: 'Cocktails',
        rating: 4.7,
        price: 14.0,
        ingredients: ['White Rum', 'Lime', 'Mint', 'Sugar', 'Soda Water'],
    },
    {
        id: '6',
        slug: 'cappuccino',
        name: 'Cappuccino',
        description: 'Rich espresso topped with steamed milk and a thick layer of foam.',
        images: ['/images/cappuccino.jpg'],
        category: 'Coffee',
        rating: 4.6,
        price: 5.0,
        ingredients: ['Espresso', 'Milk', 'Foam'],
    },
];
