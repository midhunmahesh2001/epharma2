import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://localhost:5000/api/products';

  constructor(private http: HttpClient) {}

  // Get all products
  getProducts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Get total items
  getTotalItems(): Observable<any> {
    return this.http.get(`${this.apiUrl}/total`);
  }

  // Order a product
  orderProduct(id: number, quantity: number): Observable<any> {
    return this.http.post('http://localhost:5000/api/order', { id, quantity });
  }
}
