import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartIconComponent } from "../cart-icon/cart-icon.component";



@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterModule, CartIconComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
}
