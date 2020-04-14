import { Satellite } from './satellite';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'orbit-report';
  
  sourceList : Satellite [];
  displayList: Satellite[];

  constructor (){
    this.sourceList = [];
    let satellitesUrl = 'https://handlers.education.launchcode.org/static/satellites.json';
 
    window.fetch(satellitesUrl).then(function(response) {
       response.json().then(function(data) {
 
          let satellites = data.satellites;
           // TODO: loop over satellites
          // TODO: create a Satellite object using new Satellite(fetchedSatellites[i].name, fetchedSatellites[i].type, fetchedSatellites[i].launchDate, fetchedSatellites[i].orbitType, fetchedSatellites[i].operational);
          // TODO: add the new Satellite object to sourceList using: this.sourceList.push(satellite);
          for(let i=0; i< satellites.length; i++){
            this.sourceList.push(
              new Satellite(
                satellites[i].name, 
                satellites[i].type, 
                satellites[i].launchDate, 
                satellites[i].orbitType,  
                satellites[i].operational
              )
            )
          }
          
          this.displayList = this.sourceList.slice(0);
       }.bind(this));

    }.bind(this));

 }

  ngOnInit () {

  }

  search(searchTerm: string): void {
    let matchingSatellites: Satellite[] = [];
    searchTerm = searchTerm.toLowerCase();
    for(let i=0; i < this.sourceList.length; i++) {
       let name = this.sourceList[i].name.toLowerCase();
       let type = this.sourceList[i].type.toLowerCase();
       let orbitType = this.sourceList[i].orbitType.toLowerCase();
       if (name.indexOf(searchTerm) >= 0 || orbitType.indexOf(searchTerm) >= 0 || type.indexOf(searchTerm) >= 0) {
          matchingSatellites.push(this.sourceList[i]);
       }
    }
    // assign this.displayList to be the the array of matching satellites
    // this will cause Angular to re-make the table, but now only containing matches
    this.displayList = matchingSatellites;
 }

}