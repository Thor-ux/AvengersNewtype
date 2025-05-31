import { Cart } from '../src/Cart';

describe('Cart', () => {
  let cart: Cart;

  beforeEach(() => {
    cart = new Cart();
  });

  test('addItem adds an item to the cart', () => {
    const item = { id: 1, price: 10 };
    cart.addItem(item);
    expect(cart.getItems()).toContainEqual(item);
  });

  test('getItems returns a copy of the items array', () => {
    const item = { id: 1, price: 10 };
    cart.addItem(item);
    const items = cart.getItems();
    items.push({ id: 2, price: 20 });
    expect(cart.getItems()).toHaveLength(1);
  });

  test('getTotalCost calculates the total cost correctly', () => {
    cart.addItem({ id: 1, price: 10 });
    cart.addItem({ id: 2, price: 20 });
    expect(cart.getTotalCost()).toBe(30);
  });

  test('getTotalCostWithDiscount calculates the discounted total cost correctly', () => {
    cart.addItem({ id: 1, price: 100 });
    cart.addItem({ id: 2, price: 200 });
    expect(cart.getTotalCostWithDiscount(10)).toBe(270);
  });

  test('removeItemById removes the correct item', () => {
    cart.addItem({ id: 1, price: 10 });
    cart.addItem({ id: 2, price: 20 });
    cart.removeItemById(1);
    expect(cart.getItems()).toEqual([{ id: 2, price: 20 }]);
  });

  test('removeItemById does nothing if item not found', () => {
    cart.addItem({ id: 1, price: 10 });
    cart.removeItemById(2);
    expect(cart.getItems()).toEqual([{ id: 1, price: 10 }]);
  });

  test('getTotalCost returns 0 for empty cart', () => {
    expect(cart.getTotalCost()).toBe(0);
  });

  test('getTotalCostWithDiscount returns 0 for empty cart', () => {
    expect(cart.getTotalCostWithDiscount(10)).toBe(0);
  });
});