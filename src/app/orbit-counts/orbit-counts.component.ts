import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {

  @Input("sattelites")  sattelites: Satellite[];

  constructor() { }

  ngOnInit(): void {
  }

  count(type: string): number {
    // array.sort modifies the array, sorting the items based on the given compare function
    return this.sattelites.filter( item => {
      return item.type.toLowerCase() == type.toLowerCase()
    }).length;

 }


}
