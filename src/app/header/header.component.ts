import { Component } from '@angular/core';
import { MedicineShoppingComponent } from '../medicine-shopping/medicine-shopping.component';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MedicineShoppingComponent, FooterComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
