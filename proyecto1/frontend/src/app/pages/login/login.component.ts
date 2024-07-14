import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  router = inject(Router);
  admin = {
    email: "admin@gmail.com",
    password: "123"
  };

  email: string = '';
  password: string = '';

  iniciarSesion(){
    if (this.admin.email === this.email && this.admin.password === this.password) {
      alert('Login exitoso');
      this.router.navigate(['/admin']);
    } else {
      alert('Error al iniciar sesión');
    }
  }

}
