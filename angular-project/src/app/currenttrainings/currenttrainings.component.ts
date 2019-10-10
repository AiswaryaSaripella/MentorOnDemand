import { Component, OnInit } from '@angular/core';
import { IdentificationService } from '../identification.service';
import { UserdetailsServiceService } from '../UserdetailsServiceService';
import { MentordetailsService } from '../mentordetails.service';
import { UserCurrentTrainings, MentorCurrentTrainings } from './currentTrainings';
import { Router } from '@angular/router';
import { NumberValueAccessor } from '@angular/forms';


@Component({
  selector: 'app-currenttrainings',
  templateUrl: './currenttrainings.component.html',
  styleUrls: ['./currenttrainings.component.css']
})
export class CurrenttrainingsComponent implements OnInit {
public baseUrl="http://localhost:8761/"
  role;
jsonURL;
details;
index;
width:Number[]=new Array();
mentorNewCourse=false;
paidStatus:string;
userCurrent:UserCurrentTrainings=null;
mentorCurrent:MentorCurrentTrainings=null;
length;
  i: number=0;
  widthOne: any;
  constructor(private route:Router,private identity:IdentificationService,private userservice: UserdetailsServiceService,private mentorservice:MentordetailsService) { }

  ngOnInit() {
    this.paidStatus=this.mentorservice.paymentStatus;
  this.role=this.identity.identity;
  if(this.role=='mentor'){
    this.mentorNewCourse=this.mentorservice.newCourseProposal;
    
       
    this.mentorservice.getCurrentTrainings().subscribe(data=>{
      this.mentorCurrent=data as MentorCurrentTrainings ;
      
      this.length=Object.keys(this.mentorCurrent).length;
      console.log(this.mentorCurrent);
    });
    
  }
  else if(this.role=='user'){
    
    this.userservice.getCurrentTrainings().subscribe(data=>{
      this.userCurrent=data as  UserCurrentTrainings;
      this.length=Object.keys(this.userCurrent).length;
      
      for(this.i=0;this.i<this.length;this.i++){
        
        console.log(this.userCurrent[this.i].progressStatus);
        this.width[this.i]=this.userCurrent[this.i].progressStatus;
        console.log( this.width[this.i]);
      }
      console.log(this.userCurrent);
    });
    
    
  }

this.index=this.identity.id;
  }
  

  move(event,i){
    console.log(i);
    var elem = document.getElementById("myBar");
    
    console.log(this.width[i]);
    if (this.width[i] < 100) {
      this.widthOne= this.width[i];
      this.widthOne=this.widthOne+5;
      elem.style.width = this.widthOne + '%';
      elem.innerHTML = this.widthOne * 1 + '%';
    }
    
    this.userservice.updateProgressStatus(this.userCurrent[i].mentorName,this.userCurrent[i].userName,this.userCurrent[i].courseName,this.widthOne).subscribe(data=>console.log(data));
    this.mentorservice.updateProgressStatus(this.userCurrent[i].mentorName,this.userCurrent[i].userName,this.userCurrent[i].courseName,this.widthOne).subscribe(data=>console.log(data));

    

  }

  onPay(event,i){
      this.identity.paymentId=i;
      this.route.navigate(['/homepage/payment-gateway']);
  }

  onAccept(event,i){
    console.log(this.mentorCurrent[i].mentorName,this.mentorCurrent[i].userName,this.mentorCurrent[i].courseName,"accepted");
    this.userservice.updateAcceptStatus(this.mentorCurrent[i].mentorName,this.mentorCurrent[i].userName,this.mentorCurrent[i].courseName,"accepted").subscribe(data=>console.log(data));
    this.mentorservice.updateAcceptStatus(this.mentorCurrent[i].mentorName,this.mentorCurrent[i].userName,this.mentorCurrent[i].courseName,"accepted").subscribe(data=>console.log(data));
}
  onReject(event,i){
    this.userservice.updateAcceptStatus(this.mentorCurrent[i].mentorName,this.mentorCurrent[i].userName,this.mentorCurrent[i].courseName,"rejected").subscribe(data=>console.log(data));
    this.mentorservice.updateAcceptStatus(this.mentorCurrent[i].mentorName,this.mentorCurrent[i].userName,this.mentorCurrent[i].courseName,"rejected").subscribe(data=>console.log(data));
  }
}
