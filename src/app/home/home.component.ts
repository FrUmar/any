import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images = ['assets/all.png','assets/images (3).png','assets/download2.png','assets/images1.png'];
  constructor() { }

  ngOnInit(): void {
  }

}
