import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private xy = 0;

  ngOnInit(): void {
    this.sliders();
  }

  sliders() {
    const x = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;

    // Check if the index is within the valid range
    if (x.length > 0) {
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
