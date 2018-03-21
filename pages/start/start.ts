import { Component } from '@angular/core';
import {  NavController } from 'ionic-angular';
import {HomePage} from '../home/home';
@Component({
templateUrl: 'start.html'
})
export class Start {
 
  constructor(public navCtrl: NavController) {
 
  }
 
  goToHome(){
    this.navCtrl.setRoot(HomePage);
  }
 }