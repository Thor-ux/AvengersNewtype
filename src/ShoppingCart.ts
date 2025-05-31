import { Movie } from './Movie';

export class ShoppingCart {
  private items: Movie[] = [];

  addItem(movie: Movie): void {
    this.items.push(movie);
  }

  removeItem(movie: Movie): void {
    const index = this.items.indexOf(movie);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }

  getTotalPrice(): number {
    return this.items.reduce((total, movie) => total + movie.price, 0);
  }
}