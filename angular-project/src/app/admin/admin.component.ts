import { Component, OnInit } from '@angular/core';

import { UserdetailsServiceService } from '../UserdetailsServiceService';

import { MentordetailsService } from '../mentordetails.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  type:any;
  constructor(private userService:UserdetailsServiceService,private mentorService:MentordetailsService) { }
  details:any;
  ngOnInit() {
    this.type="null"
  }

  users(event){
    this.type="users"
    this.userService.getUsers('http://localhost:8761/userapi/user/login').subscribe(data=>
      {
        this.details=data;
        console.log(data);
      })
  }

  mentors(event){
    this.type="mentors"
    this.userService.getUsers('http://localhost:8761/mentorapi/mentor/login').subscribe(data=>
      {
        this.details=data;
        console.log(data);
      })
  }

  unblock(event,i){
    if(this.type=='users'){
      this.userService.updateBlockStatus(this.details[i].email,"no").subscribe((data)=>
        this.userService.getUsers('http://localhost:8761/userapi/user/login').subscribe(data=>
      {
        this.details=data;
        console.log(data);
      })
      );
    }

    else if(this.type=='mentors'){
      this.mentorService.updateBlockStatus(this.details[i].email,"no").subscribe();
    }

  }

  block(event,i){
    if(this.type=='users'){
      this.userService.updateBlockStatus(this.details[i].email,"yes").subscribe();
    }

    else if(this.type=='mentors'){
      this.mentorService.updateBlockStatus(this.details[i].email,"yes").subscribe();
    }


  }

}
