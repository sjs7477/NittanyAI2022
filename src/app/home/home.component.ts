import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  selectedRole!: string;
  

  constructor() { }

  ngOnInit(): void {
    function click(){
      alert('clicled');
      const ele1 = document.getElementById("r1") as HTMLInputElement;
      const ele2 = document.getElementById("r2") as HTMLInputElement;
      var ele1check = ele1.checked;
      var ele2check = ele2.checked;
    }
  }

}
