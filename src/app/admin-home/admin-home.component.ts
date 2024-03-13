import { Component, OnInit } from '@angular/core';
import { AuthenticationserviceService } from '../authenticationservice.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {
  private xy = 0;
  name: string='';

  constructor(private session:AuthenticationserviceService){}

  ngOnInit(): void {
    this.sliders();
    this.name = this.session.getname; 

    
  }



  sliders() {
    const x = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;

    // Check if the index is within the valid range and if the element exists
    if (x.length > 0 && this.xy <= x.length) {
      for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }

      this.xy++;
      if (this.xy > x.length) {
        this.xy = 1;
      }

      // Ensure the index is within the valid range
      if (this.xy <= x.length) {
        x[this.xy - 1].style.display = "block";
        setTimeout(() => this.sliders(), 2000);
      }
    }
  }
}
