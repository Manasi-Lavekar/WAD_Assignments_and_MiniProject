import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { __values } from 'tslib';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'] // Corrected styleUrl to styleUrls
})
export class RegisterComponent {
  registerForm: FormGroup;
  

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.registerForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      username: ['', Validators.required],
      gender: [''],
      dob: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      pincode: ['', Validators.required],
      hobbies:['']
    });
  }

  register() {
    const storedData2=localStorage.getItem('Registered');
    console.log(storedData2);
    if(storedData2){
      const data=JSON.parse(storedData2);
      if (this.registerForm.valid && data.email===this.registerForm.value.email) {
        console.log('Already Regsitered');
        this.registerForm.reset();
      }
      else{
        if (this.registerForm.valid) {
          localStorage.setItem('Registered', JSON.stringify(this.registerForm.value));
          const storedData=localStorage.getItem('Registered');
          this.router.navigate(['/login']);
        }
      }
    }
    
  }
}
