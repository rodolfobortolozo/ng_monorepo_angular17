import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponent } from '@my-app/modules/shared/ui';

@Component({
  selector: 'my-app-products',
  standalone: true,
  imports: [CommonModule, UiComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {}
