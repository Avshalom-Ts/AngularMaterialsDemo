import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progres-spiner',
  templateUrl: './progres-spiner.component.html',
  styleUrls: ['./progres-spiner.component.css']
})
export class ProgresSpinerComponent implements OnInit {
  showSpiner = false;
  constructor() { }

  ngOnInit(): void {
  }
  onLoadData() {
    this.showSpiner = true;
    setTimeout(() => {
      this.showSpiner = false;
    },5000)
  }
}
