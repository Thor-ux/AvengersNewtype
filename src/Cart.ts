import { ShoppingCart } from "./ShoppingCart";

interface CartItem {
    id: number;
    price: number;
  }
  
  export class Cart {
    private items: CartItem[] = [];
  
    addItem(item: CartItem): void {
      this.items.push(item);
    }
  
    getItems(): CartItem[] {
      return [...this.items];
    }
  
    getTotalCost(): number {
      return this.items.reduce((total, item) => total + item.price, 0);
    }
  
    getTotalCostWithDiscount(discount: number): number {
      const totalCost = this.getTotalCost();
      return totalCost - (totalCost * discount / 100);
    }
  
    removeItem(item: CartItem): void {
      this.items = this.items.filter(cartItem => cartItem.id !== item.id);
    }
  }