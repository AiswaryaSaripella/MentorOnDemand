import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MentordetailsService } from '../mentordetails.service';



@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
mentor:any={

};
  constructor(private route:Router,private mentorService:MentordetailsService) { }

  ngOnInit() {
  }

  onSearch(){
    this.mentorService.mentorSearchValue=this.mentor.searchValue;
    this.mentorService.startTime=this.mentor.startTime;
    this.mentorService.endTime=this.mentor.endTime;
    console.log(this.mentor.startTime);
    this.route.navigate(['/homepage/searchbar/mentorsearch'])
  }

}
