import { Component } from '@angular/core';

interface UserInfo {
  id: number;
  name: string;
  username: string;
  email: string;
  address: string;
  city: string;
  pincode: string;
  state: string;
  gender: string;
  dob: string;
  hobbies: string;
  // Define other properties as needed
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  infoValues: UserInfo[] = [];

  constructor() {
    const storedData = localStorage.getItem('Registered');
    const loggedData=localStorage.getItem('Logged');
    if (storedData && loggedData) {
      const datareg= JSON.parse(storedData);
      const datalog=JSON.parse(loggedData);
      if(datalog.email===datareg.email){
      this.infoValues.push(JSON.parse(storedData));
      }
    }
  }
}
