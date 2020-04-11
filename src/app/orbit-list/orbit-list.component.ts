import { Component, OnInit, Input  } from '@angular/core';
import { Sattelite } from '../satellite';

@Component({
  selector: 'app-orbit-list',
  templateUrl: './orbit-list.component.html',
  styleUrls: ['./orbit-list.component.css']
})
export class OrbitListComponent implements OnInit {
  @Input()  sattelites: Sattelite[];

  constructor() { }

  ngOnInit(): void {
  }

}
