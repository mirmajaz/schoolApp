import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';

/*
  Generated class for the SchoolDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SchoolDataProvider {
  schools : any;
  name : any;
   data :any[];
  constructor(public http: Http) {
  // this.schools=[
  //     {"school":"1001"},
  //     {"school":"1002"},
  //     {"school":"1045"}
  //   ];
  }
 public loadSchoolsLocally(){
   
  //   //http://shafihuzaib.com/temp/api.php?q=getSchools'
  //   this.http.get('assets/model/school.json').map(res => res.json()).subscribe(data => {
  //   console.log("here",data);
  //     //  var jsonObject = JSON.parse(data);
  //     //this.data = JSON.parse(data[1].id).results;
  //    // this.loadSchoolsLocall)
              
  //    this.data = data.data;
  //    resolve(this.data);
  //            console.log("id is",this.data);
  //            console.log("id comonj",this.data[2].id)
    
  //           })

  // }
}
public load(){
if(this.data){


  return Promise.resolve(this.data);
}
return new Promise(resolve => {
  // We're using Angular HTTP provider to request the data,
  // then on the response, it'll map the JSON data to a parsed JS object.
  // Next, we process the data and resolve the promise with the new data.
  this.http.get('assets/model/school.json')
    .map(res => res.json())
    .subscribe(data => {
      // we've got back the raw data, now generate the core schedule data
      // and save the data for later reference
      this.data = data.data;
      resolve(this.data);
    });
});
}
}
