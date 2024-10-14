import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: any[] = [];

  private http = inject(HttpClient); // Use inject for HttpClient
  private cartService = inject(CartService); // Inject CartService

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.http.get<any[]>('http://localhost:5000/api/products').subscribe((data) => {
      this.products = data;
    });
  }

  addToCart(product: any): void {
    this.cartService.addToCart(product); // Add product to cart
    alert(`${product.name} has been added to the cart!`);
  }
}
