import { Component, Input, inject } from '@angular/core';
import { Product } from '../products-list.component';
import { CartService } from '../../../services/cart.service';
import { PrimaryButtonComponent } from '../../../components/primary-button/primary-button.component';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [PrimaryButtonComponent],
  template: `
    <div class="bg-white shadow-md border rounded-xl p-6 flex flex-col gap-6 relative">
      <div class="mx-auto">
        <img
          [src]="product.image"
          class="w-[200px] h-[100px] object-contain"
          alt="Product Image"
        />
      </div>
      <div class="flex flex-col">
        <span class="text-md font-bold">{{ product.title }}</span>
        <span class="text-sm">{{ '$' + product.price }}</span>
        <app-primary-button
          [label]="'Add to Cart'"
          [disabled]="!product.stock"
          (btnClicked)="addToCart()"
          class="mt-3"
        ></app-primary-button>
      </div>

      <span
        class="absolute top-2 right-3 text-sm font-bold"
        [class]="product.stock ? 'text-green-500' : 'text-red-500'"
      >
        {{ product.stock ? product.stock + ' left' : 'Out of stock' }}
      </span>
    </div>
  `,
  styles: [],
})
export class ProductCardComponent {
  @Input() product!: Product; // Corrected to @Input() instead of input()
  cartService = inject(CartService);

  addToCart() {
    // Check if product exists and has stock
    if (this.product && this.product.stock && this.product.stock > 0) {
      this.cartService.addToCart(this.product);
      this.product.stock -= 1; // Decrease stock count
    }
  }
}
