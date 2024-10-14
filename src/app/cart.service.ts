import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: any[] = [];
  
  // Create a BehaviorSubject to keep track of the cart item count
  private cartItemCount = new BehaviorSubject<number>(0);
  cartItemCount$ = this.cartItemCount.asObservable(); // Expose as observable

  addToCart(product: any): void {
    const existingProduct = this.cart.find((item) => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }
    this.updateCartItemCount(); // Update cart item count
  }

  getCartItems(): any[] {
    return this.cart;
  }

  removeFromCart(product: any): void {
    this.cart = this.cart.filter((item) => item.id !== product.id);
    this.updateCartItemCount(); // Update cart item count
  }

  clearCart(): void {
    this.cart = [];
    this.updateCartItemCount(); // Reset cart count to 0
  }

  private updateCartItemCount(): void {
    const totalCount = this.cart.reduce((sum, item) => sum + item.quantity, 0);
    this.cartItemCount.next(totalCount); // Emit the latest cart item count
  }
}
