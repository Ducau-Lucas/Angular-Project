import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent implements OnInit {
  images = ['../../assets/image1.jpg', '../../assets/image2.jpg'];
  currentSlide = 0;

  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      this.currentSlide = ++this.currentSlide % this.images.length;
    }, 5000)
  }
}
