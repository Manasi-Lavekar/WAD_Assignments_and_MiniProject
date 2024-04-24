import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  info: string[]=[];
  constructor(private formBuilder: FormBuilder,private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['',[ Validators.required,Validators.email]],
      password: ['', Validators.required ]
    });
  }

  login() {
    if (this.loginForm.valid) {
      const value=localStorage.getItem('Registered');
      if(value){
      const data=JSON.parse(value);
      if(data.email===this.loginForm.value.email){
        localStorage.setItem('Logged',JSON.stringify(this.loginForm.value));
        this.router.navigate(['/']);
      }
      else{
        this.loginForm.reset();
      }
      
      }
    }
  }
}
