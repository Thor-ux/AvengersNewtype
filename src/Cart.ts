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
  
    removeItemById(id: number): void {
      const index = this.items.findIndex(item => item.id === id);
      if (index !== -1) {
        this.items.splice(index, 1);
      }
    }
  }