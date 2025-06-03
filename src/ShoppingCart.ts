import { Movie } from './Movie';

export class ShoppingCart {
  private items: Movie[] = [];

  addItem(movie: Movie): void {
    this.items.push(movie);
  }

  removeItem(movie: Movie): void {
    this.items = this.items.filter(Movie => movie !== movie);
  }

  getTotalPrice(): number {
    return this.items.reduce((total, movie) => total + movie.price, 0);
  }
}