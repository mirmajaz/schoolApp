import { Component } from '@angular/core';
import { NavController, LoadingController,Loading,NavParams,Nav,Navbar,Platform} from 'ionic-angular';
import {HomePage} from '../home/home'
import {PasswordPage} from '../password/password'
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {MyApp} from '../../app/app.component'
import { App } from 'ionic-angular';
import { Start } from '../start/start';
@Component({
    selector: 'page-profile',
    templateUrl: 'profile.html'
    
  })
  export class Profilepage {
    student_id :       any ;
    student_password : any;
    student_nickName : any;
    student_School   : any;
    school_id       : any;
      user : any;
      i : number ;
      j : number = 1;
      k : number = 2;
      l : number = 3;

    chec:boolean;
      constructor(public appCtrl :App,public platform: Platform,public nav: Nav,public navCtrl : NavController,public navParams : NavParams){
//if no user is registered
        var count =0;
if (localStorage.getItem("student_id0")==null) {
     alert("NO USER FOUND")
     this.navCtrl.setRoot(HomePage);
      }
     
      
      
       
      
       
      this.i = this.navParams.get("index");

   
        //get the values of different field set in registered page 
     
        console.log("the value of navparams",this.i);
        this.student_id        =localStorage.getItem("student_id"+this.i);
        this.student_nickName  =  localStorage.getItem("student_nickName"+this.i);
        this.student_School  =  localStorage.getItem("student_SchoolName"+this.i);
        this.school_id  =  localStorage.getItem("school_school"+this.i);
        //if the app restarts get the value of the student
       if( this.navParams.get("index")==null){
        this.student_id        =localStorage.getItem("student_id"+0);
        this.student_nickName  =  localStorage.getItem("student_nickName"+0);
        this.student_School  =  localStorage.getItem("student_SchoolName"+0);
        this.school_id  =  localStorage.getItem("student_SchoolName"+0);
       }
       }


}