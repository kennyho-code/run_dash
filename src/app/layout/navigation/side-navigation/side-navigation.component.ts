import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.css']
})
export class SideNavigationComponent implements OnInit {

  @Output()
  closeSidenav = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onClose(){
    this.closeSidenav.emit();
  }
  
}
