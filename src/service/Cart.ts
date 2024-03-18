import Buyable from '../domain/Buyable';

export default class Cart {
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    this._items.push(item);
  }

  delete(id: number): void {
    this._items.splice(this._items.findIndex(i => i.id === id), 1);
  }

  get items(): Buyable[] {
    return [...this._items]; 
  }

  total(): number {
    return this._items.reduce((acc, i) => acc + i.price, 0);
  }

  totalWithDiscount(discount: number): number {
    return (this._items.reduce((acc, i) => acc + i.price, 0))*(1 - discount / 100);
  }
}
