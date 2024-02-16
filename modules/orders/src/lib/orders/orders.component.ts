import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponent } from '@my-app/modules/shared/ui';

@Component({
  selector: 'my-app-orders',
  standalone: true,
  imports: [CommonModule, UiComponent],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css',
})
export class OrdersComponent {}
