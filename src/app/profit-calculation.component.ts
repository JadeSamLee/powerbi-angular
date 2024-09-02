import { Component, OnInit } from '@angular/core';
import { ItemService } from './item.service'; // Adjust the path if necessary

@Component({
  selector: 'app-profit-calculation',
  templateUrl: './profit-calculation.component.html',
  styleUrls: ['./profit-calculation.component.css']
})
export class ProfitCalculationComponent implements OnInit {
  items: Array<{ id: string, quantity: number, cost: number, sellingPrice: number }> = [];
  totalProfit: number = 0;

  constructor(private itemService: ItemService) {}

  ngOnInit() {
    // Subscribe to items from the service
    this.itemService.getItems().subscribe(items => {
      this.items = items;
      this.calculateProfit(); // Recalculate profit whenever items change
    });
  }

  calculateProfit() {
    this.totalProfit = this.items.reduce((profit, item) => {
      return profit + ((item.sellingPrice - item.cost) * item.quantity);
    }, 0);
  }
}
