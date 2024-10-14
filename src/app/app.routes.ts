import { Routes } from '@angular/router';
import { MedicineShoppingComponent } from './medicine-shopping/medicine-shopping.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';

export const routes: Routes = [
  { path: '', redirectTo: 'medicines', pathMatch: 'full' },
  { path: 'medicines', component: MedicineShoppingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HeaderComponent },
  { path: '', component: ProductComponent },
  { path: 'cart', component: CartComponent }
];
