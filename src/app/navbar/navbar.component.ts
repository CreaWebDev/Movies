import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title: string;
  
  constructor() { }


  ngOnInit() {
    this.title = "MOViE IT";
  }

  getTitle() {
    return this.title;
  }
}
