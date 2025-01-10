import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule } from "@angular/forms";
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule, MatIconModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  user = {
    email: null,
    password: null
  };

  onSubmit(user: string) {
    console.log(user);
  }
}
