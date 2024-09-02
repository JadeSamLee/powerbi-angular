import { Component } from '@angular/core';
import { ItemService } from './item.service'; // Adjust the path if necessary

@Component({
  selector: 'app-item-input',
  templateUrl: './item-input.component.html',
  styleUrls: ['./item-input.component.css']
})
export class ItemInputComponent {
  itemId: string = '';
  quantity: number = 0;
  cost: number = 0;
  sellingPrice: number = 0;

  constructor(private itemService: ItemService) {}

  addItem() {
    const item = {
      id: this.itemId,
      quantity: this.quantity,
      cost: this.cost,
      sellingPrice: this.sellingPrice
    };

    // Use the service to add the item
    this.itemService.addItem(item);

    // Clear input fields
    this.itemId = '';
    this.quantity = 0;
    this.cost = 0;
    this.sellingPrice = 0;
  }
}
