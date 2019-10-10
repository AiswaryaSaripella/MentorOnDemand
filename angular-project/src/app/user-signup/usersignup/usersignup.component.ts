import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './User';
import { UserdetailsServiceService } from 'src/app/UserdetailsServiceService';
import { IdentificationService } from 'src/app/identification.service';

@Component({
  selector: 'app-usersignup',
  templateUrl: './usersignup.component.html',
  styleUrls: ['./usersignup.component.css']
})


export class UsersignupComponent implements OnInit {

  user:User=new User();
  details:any={
    
  }
  constructor(private userDetailsService:UserdetailsServiceService,private router:Router,private identity:IdentificationService) { }

  ngOnInit() {
  }
  onSignUp(){
    if(this.details.password==this.details.cpassword)
    this.saveUser();
  }
  saveUser(){
    if(this.details.password==this.details.cpassword){
    this.user=new User();
    this.identity.identity="user";
    this.identity.routeStatus=true;
    this.router.navigate(['/homepage']);
    this.user.firstName=this.details.fname;
    this.user.lastName=this.details.lname;
    this.user.email=this.details.email;
    this.user.password=this.details.password;
    this.user.confirm_password=this.details.cpassword;
    this.save();
    }
  }

  save(){
    this.userDetailsService.createUser(this.user)  
      .subscribe(data =>console.log(data), error => console.log(error));  
      console.log(this.userDetailsService);
  }

  }


