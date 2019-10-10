import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { UserdetailsServiceService } from "../UserdetailsServiceService";
import { IdentificationService } from '../identification.service';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {


  baseURL:any;
  details:any;
  index: any;
  validStatus: boolean;
  isMatched: boolean;
  constructor(private route: Router, private userservice: UserdetailsServiceService, private identityService: IdentificationService) {

  }
  model: any = {
    username: String,
    password: String,
    errorMessage: String,
    invalidStatus: Boolean
  };




  ngOnInit() {
    this.details=null;
    this.model.username = "";
    this.model.password = "";
    this.model.errorMessage = "";
    this.model.invalidStatus = false;
  }

  toggleDropDown() {

    var element = <HTMLElement>document.getElementById("logindropdown");
    element.classList.toggle('show');
  }

  identify(event) {

    console.log(event.target.id);

    if (event.target.id == "User") {
      this.baseURL='http://localhost:8761/userapi/user/login';
      this.identityService.identity = "user";
      this.userservice.getUsers(this.baseURL).subscribe((data => {
        this.details=data;
        console.log(this.details);
      }))
    }
    else if (event.target.id == "Mentor") {
      this.baseURL='http://localhost:8761/mentorapi/mentor/login';
      this.identityService.identity = "mentor";
      this.userservice.getMentors(this.baseURL).subscribe((data => {
        this.details=data;
       console.log(this.details);
      }))
    }
    
    
  }
  onLogin() {
    for (this.index = 0; this.index < this.details.length; this.index++) {
      if (this.details[this.index].email == this.model.username && this.details[this.index].password == this.model.password) {
        this.isMatched = true;
        this.identityService.userName=this.details[this.index].email;
          this.identityService.id=this.index;
        break;
      }
      else {
        this.isMatched = false;
      }
    }

    if (this.isMatched) {
      
      this.identityService.routeStatus = true;
      this.route.navigate(['/homepage']);
      document.getElementById("login").click();
      
    }
    else if (!this.isMatched) {
      this.identityService.routeStatus = false;
      this.model.errorMessage = "Username or Password Mismatch";
    }
  }







}

