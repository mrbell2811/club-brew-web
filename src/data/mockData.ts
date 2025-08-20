import { Member, Beverage, Transaction } from '../types';

export const mockMembers: Member[] = [
  { id: 1, name: 'Alex Weber', isActive: true, email: 'alex@club.com', totalPurchases: 156 },
  { id: 2, name: 'Sarah Schmidt', isActive: true, email: 'sarah@club.com', totalPurchases: 89 },
  { id: 3, name: 'Michael Müller', isActive: true, email: 'michael@club.com', totalPurchases: 234 },
  { id: 4, name: 'Lisa Chen', isActive: true, email: 'lisa@club.com', totalPurchases: 67 },
  { id: 5, name: 'Thomas Bauer', isActive: true, email: 'thomas@club.com', totalPurchases: 123 },
  { id: 6, name: 'Emma Fischer', isActive: true, email: 'emma@club.com', totalPurchases: 198 },
  { id: 7, name: 'David Kim', isActive: true, email: 'david@club.com', totalPurchases: 45 },
  { id: 8, name: 'Anna Schneider', isActive: true, email: 'anna@club.com', totalPurchases: 167 },
  { id: 9, name: 'Marco Rossi', isActive: true, email: 'marco@club.com', totalPurchases: 89 },
  { id: 10, name: 'Sophie Dubois', isActive: true, email: 'sophie@club.com', totalPurchases: 134 },
  { id: 11, name: 'Jan Kowalski', isActive: true, email: 'jan@club.com', totalPurchases: 76 },
  { id: 12, name: 'Ingrid Larsson', isActive: true, email: 'ingrid@club.com', totalPurchases: 145 },
  { id: 13, name: 'Carlos Silva', isActive: true, email: 'carlos@club.com', totalPurchases: 98 },
  { id: 14, name: 'Yuki Tanaka', isActive: true, email: 'yuki@club.com', totalPurchases: 112 },
  { id: 15, name: 'Elena Popov', isActive: true, email: 'elena@club.com', totalPurchases: 87 },
  { id: 16, name: 'Oliver Smith', isActive: true, email: 'oliver@club.com', totalPurchases: 156 },
  { id: 17, name: 'Marie Dubois', isActive: true, email: 'marie@club.com', totalPurchases: 203 },
  { id: 18, name: 'Hans Zimmermann', isActive: true, email: 'hans@club.com', totalPurchases: 78 },
  { id: 19, name: 'Lucia Gonzalez', isActive: true, email: 'lucia@club.com', totalPurchases: 134 },
  { id: 20, name: 'Erik Nilsson', isActive: true, email: 'erik@club.com', totalPurchases: 91 }
];

export const mockBeverages: Beverage[] = [
  { id: 1, name: 'Pilsner', price: 3.50, category: 'beer', isActive: true, description: 'Classic German pilsner' },
  { id: 2, name: 'Weizen', price: 4.00, category: 'beer', isActive: true, description: 'Traditional wheat beer' },
  { id: 3, name: 'IPA', price: 4.50, category: 'beer', isActive: true, description: 'India Pale Ale with hop flavor' },
  { id: 4, name: 'Lager', price: 3.20, category: 'beer', isActive: true, description: 'Light and crisp lager' },
  { id: 5, name: 'Riesling', price: 6.00, category: 'wine', isActive: true, description: 'Dry white wine' },
  { id: 6, name: 'Merlot', price: 7.50, category: 'wine', isActive: true, description: 'Full-bodied red wine' },
  { id: 7, name: 'Prosecco', price: 8.00, category: 'wine', isActive: true, description: 'Italian sparkling wine' },
  { id: 8, name: 'Vodka', price: 5.00, category: 'spirits', isActive: true, description: 'Premium vodka shot' },
  { id: 9, name: 'Whiskey', price: 6.50, category: 'spirits', isActive: true, description: 'Single malt whiskey' },
  { id: 10, name: 'Gin Tonic', price: 7.00, category: 'spirits', isActive: true, description: 'Classic gin & tonic' },
  { id: 11, name: 'Cola', price: 2.50, category: 'soft-drinks', isActive: true, description: 'Refreshing cola' },
  { id: 12, name: 'Orange Juice', price: 3.00, category: 'soft-drinks', isActive: true, description: 'Fresh orange juice' },
  { id: 13, name: 'Sparkling Water', price: 2.00, category: 'water', isActive: true, description: 'Carbonated mineral water' },
  { id: 14, name: 'Still Water', price: 1.50, category: 'water', isActive: true, description: 'Natural mineral water' },
  { id: 15, name: 'Espresso', price: 2.80, category: 'coffee', isActive: true, description: 'Double shot espresso' },
  { id: 16, name: 'Cappuccino', price: 3.50, category: 'coffee', isActive: true, description: 'Italian cappuccino' }
];

export const formatPrice = (price: number): string => {
  return `€${price.toFixed(2)}`;
};

export const getCategoryIcon = (category: string): string => {
  const icons = {
    beer: '🍺',
    wine: '🍷',
    spirits: '🥃',
    'soft-drinks': '🥤',
    water: '💧',
    coffee: '☕',
    other: '🥤'
  };
  return icons[category as keyof typeof icons] || '🥤';
};