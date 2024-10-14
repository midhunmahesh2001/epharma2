import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-medicine-shopping',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './medicine-shopping.component.html',
  styleUrls: ['./medicine-shopping.component.css'],
})
export class MedicineShoppingComponent {
  medicines = [
    { 
      name: 'Paracetamol', 
      price: 50, 
      imageUrl: '/images/paracetamol.jpg' 
    },
    { 
      name: 'Ibuprofen', 
      price: 100, 
      imageUrl: '/images/Ibuprofen.jpg' 
    },
    { 
      name: 'Aspirin', 
      price: 75, 
      imageUrl: '/images/aspirin.jpg' 
    }
  ];

  constructor(private cartService: CartService) {}

  // Add item to the cart using the CartService
  addToCart() {
    this.cartService.addToCart(this.medicines);
  }

  // Clear the cart using the CartService
  clearCart() {
    this.cartService.clearCart();
  }
}
