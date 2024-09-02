import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface Item {
  id: string;
  quantity: number;
  cost: number;
  sellingPrice: number;
}

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private itemsSubject = new BehaviorSubject<Item[]>([]);
  items$ = this.itemsSubject.asObservable();

  constructor() {}

  addItem(item: Item) {
    const currentItems = this.itemsSubject.value;
    this.itemsSubject.next([...currentItems, item]);
  }

  getItems() {
    return this.itemsSubject.asObservable();
  }
}
