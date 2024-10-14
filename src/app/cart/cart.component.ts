import { Component, OnInit, inject } from '@angular/core';
import { CartService } from '../cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  totalPrice: number = 0;

  private cartService = inject(CartService);

  ngOnInit(): void {
    this.loadCart();
  }

  // Load items and calculate total
  loadCart(): void {
    this.cartItems = this.cartService.getCartItems();
    this.calculateTotal();
  }

  // Calculate the total price
  calculateTotal(): void {
    this.totalPrice = this.cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }

  // Remove an item from the cart
  removeFromCart(product: any): void {
    this.cartService.removeFromCart(product);
    this.loadCart(); // Reload the cart after removing an item
  }

  // Checkout and clear the cart
  checkout(): void {
    if (this.cartItems.length > 0) {
      alert('Order placed successfully!');
      this.cartService.clearCart();
      this.loadCart();
    } else {
      alert('Your cart is empty.');
    }
  }
}
