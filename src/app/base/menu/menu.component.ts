import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  title = 'spelling';
  getStart = false

  constructor() { }

  ngOnInit(): void {
  }


  getStarted(){
    this.getStart = true;
  }

}
