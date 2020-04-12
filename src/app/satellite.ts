export class Satellite {
 name : string;
 orbitType : string;
 type : string;
 operational : boolean;
 launchDate : string;

 constructor ( name, type, launchDate, orbitType,  operational ) {
    this.name = name;
    this.orbitType = orbitType;
    this.type = type;
    this.operational = operational;
    this.launchDate = launchDate;
}
 ngOnInit () {

 }

}