import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  clicked(): void {
    window.alert("Crap, you clicked!")
  }


}
