import { Component, OnInit } from '@angular/core';
import { IdentificationService } from '../identification.service';
import { UserdetailsServiceService } from '../UserdetailsServiceService';
import { UserCurrentTrainings, MentorCurrentTrainings } from '../currenttrainings/currentTrainings';
import { MentordetailsService } from '../mentordetails.service';

@Component({
  selector: 'app-completedtrainings',
  templateUrl: './completedtrainings.component.html',
  styleUrls: ['./completedtrainings.component.css']
})
export class CompletedtrainingsComponent implements OnInit {
role;
jsonURL;
details;
index;
length;
userCurrent:UserCurrentTrainings=null;
mentorCurrent:MentorCurrentTrainings=null;
  constructor(private identity:IdentificationService,private userservice: UserdetailsServiceService,private mentorservice:MentordetailsService) { }

  ngOnInit() {
  this.role=this.identity.identity;
  if(this.role=='mentor'){
   
       
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
      console.log(this.userCurrent);
    });
    this.index=this.identity.id;
    
  }
}
}


  
