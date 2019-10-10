import { Component, OnInit } from '@angular/core';
import { IdentificationService } from '../identification.service';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {

  constructor(private identity:IdentificationService) { }

  ngOnInit() {
  }

  toggleDropDown(){
    
    var element=<HTMLElement>document.getElementById("signupdropdown");
    element.classList.toggle('show');
    }


}
