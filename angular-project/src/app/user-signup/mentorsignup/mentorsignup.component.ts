import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MentorDetails } from './MentorDetails';
import { UserdetailsServiceService } from 'src/app/UserdetailsServiceService';
import { Course } from './Course';
import { IdentificationService } from 'src/app/identification.service';

@Component({
  selector: 'app-mentorsignup',
  templateUrl: './mentorsignup.component.html',
  styleUrls: ['./mentorsignup.component.css']
})
export class MentorsignupComponent implements OnInit {


  course:Course;
  mentorDetails:MentorDetails;
  details:any={
    
  }
  constructor(private route:Router,private userDetailsService:UserdetailsServiceService,private identity:IdentificationService) { }

  ngOnInit() {
    this.details.startDate= new Date();
    this.details.endDate=new Date();
    this.details.startTime=new Date();
    this.details.endTime=new Date();
  }

  onSignUp(){
    if(this.details.password==this.details.cpassword)
    this.saveMentor();
  }

  saveMentor(){
    this.mentorDetails=new MentorDetails();
    this.course=new Course();
    this.mentorDetails.firstName=this.details.fname;
    this.mentorDetails.lastName=this.details.lname;
    this.mentorDetails.email=this.details.email;
    this.mentorDetails.password=this.details.password;
    this.mentorDetails.linkedInUrl=this.details.linkedin;
    this.mentorDetails.courseName=this.details.courseName;
    this.mentorDetails.yearOfExperience=this.details.yearOfExperience;
    this.mentorDetails.materialsUsed=this.details.materialsUsed;
    this.course.startDate=this.details.startDate;
    this.course.endDate=this.details.endDate;
    this.course.startTime=this.details.startTime;
    this.course.endTime=this.details.endTime;
    this.course.courseName=this.details.courseName;
    this.course.mentorName=this.details.email;
    this.course.fees=this.details.fees;
    //console.log(this.details.startDate);
    this.save();
  }

  save(){
    this.identity.identity="mentor";
    this.identity.routeStatus=true;
    this.route.navigate(['/homepage']);
    this.userDetailsService.createMentor(this.mentorDetails)  
      .subscribe(data =>console.log(data), error => console.log(error));  
      console.log(this.userDetailsService);
    this.userDetailsService.createCourse(this.course)  
      .subscribe(data =>console.log(data), error => console.log(error));  
      console.log(this.userDetailsService);
  }
  }

  

