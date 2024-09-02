import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { PowerBIEmbedModule } from 'powerbi-client-angular';

import { AppComponent } from './app.component';
import { ItemInputComponent } from './item-input.component';
import { ProfitCalculationComponent } from './profit-calculation.component';
import { PowerbiReportComponent } from './powerbi-report.component';
import { ItemService } from './item.service'; // Import the service

@NgModule({
  declarations: [
    AppComponent,
    ItemInputComponent,
    ProfitCalculationComponent,
    PowerbiReportComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PowerBIEmbedModule
  ],
  providers: [ItemService], // Provide the service
  bootstrap: [AppComponent]
})
export class AppModule { }
