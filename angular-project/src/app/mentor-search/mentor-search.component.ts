import { Component, OnInit } from '@angular/core';
import { MentordetailsService } from '../mentordetails.service';
import { Router } from '@angular/router';
import { MentorDetails } from '../user-signup/mentorsignup/MentorDetails';
import { Course } from '../user-signup/mentorsignup/Course';
import { IdentificationService } from '../identification.service';
import { MentorCurrentTrainings, UserCurrentTrainings } from '../currenttrainings/currentTrainings';
import { UserdetailsServiceService } from '../UserdetailsServiceService';

@Component({
  selector: 'app-mentor-search',
  templateUrl: './mentor-search.component.html',
  styleUrls: ['./mentor-search.component.css']
})

export class MentorSearchComponent implements OnInit {

mentorCurrent:MentorCurrentTrainings;
userCurrent:UserCurrentTrainings;
mentorDetails:MentorDetails=null;
mentors:Course=null;
keys:Object;
length:any;
routestatus;
status=false;
  i: any;
  role:any;
  constructor(private route:Router,private mentorservice:MentordetailsService,private identity: IdentificationService,private userservice:UserdetailsServiceService ) { 
    
  }

  ngOnInit() {
    this.routestatus=true;
    this.role=this.identity.identity;

    this.mentorservice.getCourseDetails().subscribe((data => {
       this.mentors=data as Course;
     // console.log(this.mentors);

this.mentorservice.getMentorDetails().subscribe((data=>{
        
        this.mentorDetails=data as MentorDetails;
        //console.log(this.mentorDetails);
      this.length=Object.keys(this.mentors).length;
      

      this.routestatus=false;
      this.status=true;
      
      
  }))

 
  }
    ))


}
onProposal(event,i){
 console.log(this.identity.userName);
  console.log(i);
  console.log(this.mentors[i].courseName);
  if(this.identity.identity!='user')
  this.routestatus=false;
  else if(this.identity.identity=='user')
  {
    
    
  this.routestatus=true;
  
   this.mentorCurrent= new MentorCurrentTrainings();
   this.userCurrent=new UserCurrentTrainings();
  this.mentorCurrent.courseName=this.mentors[i].courseName;
  this.mentorCurrent.paymentStatus="false";
  this.mentorCurrent.progressStatus=0;
  this.mentorCurrent.userName=this.identity.userName;
  this.mentorCurrent.acceptStatus="proposed";
  this.mentorCurrent.mentorName=this.mentorDetails[i].email;
  this.userCurrent.courseName=this.mentors[i].courseName;
  this.userCurrent.mentorName=this.mentorDetails[i].email;
  this.userCurrent.acceptStatus="proposed";
  this.userCurrent.payment="false";
  this.userCurrent.progressStatus=0;
  this.userCurrent.userName=this.identity.userName;
  this.mentorservice.sendCourseProposal(this.mentorCurrent).subscribe(data=>(console.log(data)));
  this.userservice.sendCurrentTraining(this.userCurrent).subscribe(data=>(console.log(data)));
  }
  this.mentorservice.newCourseProposal=true;

}

forOpen(event,id){
  this.i=id;

}

}