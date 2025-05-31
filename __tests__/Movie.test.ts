import { Movie } from '../src/Movie';
import { ShoppingCart } from '../src/ShoppingCart';

describe('Movie and ShoppingCart', () => {
  let avengers: Movie;
  let cart: ShoppingCart;

  beforeEach(() => {
    avengers = new Movie(
      "The Avengers",
      2012,
      "USA",
      ["Action", "Adventure", "Sci-Fi"],
      "Avengers Assemble!",
      "Joss Whedon",
      ["Joss Whedon", "Zak Penn"],
      ["Kevin Feige"],
      "Seamus McGarvey",
      "Alan Silvestri",
      ["James Chinlund"],
      ["Jeffrey Ford", "Lisa Lassek"],
      220000000,
      623357910,
      1518812988,
      { "USA": 78.4, "Mexico": 15.9, "UK": 13.3 },
      43412056,
      new Date("2012-05-03"),
      true,
      true,
      new Date("2012-04-11"),
      new Date("2012-08-28"),
      new Date("2012-08-28"),
      "12+",
      "PG-13",
      143,
      19.99
    );
    cart = new ShoppingCart();
  });

  test('Movie creation', () => {
    expect(avengers.title).toBe("The Avengers");
    expect(avengers.year).toBe(2012);
    expect(avengers.price).toBe(19.99);
  });

  test('ShoppingCart operations', () => {
    cart.addItem(avengers);
    expect(cart.getTotalPrice()).toBeCloseTo(19.99);

    cart.removeItem(avengers);
    expect(cart.getTotalPrice()).toBe(0);
  });
});