import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-icon',
  standalone: true,
  templateUrl: './cart-icon.component.html',
  styleUrls: ['./cart-icon.component.css'],
})
export class CartIconComponent implements OnInit {
  itemCount = 0; // Track the cart item count

  constructor(private cartService: CartService) {}

  ngOnInit() {
    // Subscribe to cart item count changes
    this.cartService.cartItemCount$.subscribe((count) => {
      this.itemCount = count;
    });
  }
}
