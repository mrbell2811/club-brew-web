export interface Member {
  id: number;
  name: string;
  isActive: boolean;
  email?: string;
  joinDate?: Date;
  totalPurchases?: number;
}

export interface Beverage {
  id: number;
  name: string;
  price: number;
  category: BeverageCategory;
  isActive: boolean;
  description?: string;
  imageUrl?: string;
}

export interface Transaction {
  id: number;
  memberId: number;
  beverageId: number;
  quantity: number;
  timestamp: Date;
  totalAmount: number;
  memberName?: string;
  beverageName?: string;
}

export type BeverageCategory = 'beer' | 'wine' | 'spirits' | 'soft-drinks' | 'water' | 'coffee' | 'other';

export interface CartItem {
  beverage: Beverage;
  quantity: number;
  totalPrice: number;
}

export interface Order {
  member: Member;
  items: CartItem[];
  totalAmount: number;
  timestamp: Date;
}