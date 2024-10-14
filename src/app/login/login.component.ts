import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  action: string = 'Login'; // Default action
  user = { name: '', email: '', password: '' }; // Store input values

  setAction(action: string) {
    this.action = action; // Switch between Login and Sign Up
  }

  submit() {
    if (this.validateInputs()) {
      console.log(`${this.action} Successful`, this.user);
      alert(`${this.action} Successful!`);
      // Save user data (e.g., localStorage) or call an API here
      localStorage.setItem('user', JSON.stringify(this.user));
    } else {
      alert('Please fill in all fields.');
    }
  }

  validateInputs(): boolean {
    const { name, email, password } = this.user;
    if (this.action === 'Sign Up' && !name) return false;
    return email.trim() !== '' && password.trim() !== '';
  }
}
