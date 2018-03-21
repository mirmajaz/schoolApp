import { Component } from '@angular/core';
import { NavController,MenuController } from 'ionic-angular';
import { Profilepage } from '../profile/profile' 
import { Start } from '../start/start'

import {HomePage} from '../home/home'
@Component({
    selector: 'page-profile',
       templateUrl: 'password.html'      
    
  
    
  })
  export class PasswordPage{
      pin :any;
        i : any;
    constructor(public navCtrl : NavController,public menu : MenuController){
    //    localStorage.clear();
    
        if(localStorage.getItem("student_nickName0")==null){
            alert("you cannot set the password as no student is registered")
        this.navCtrl.setRoot(HomePage);
    }
    }
    ionViewDidEnter() {
         this.menu.swipeEnable(false);
    
        // If you have more than one side menu, use the id like below
        // this.menu.swipeEnable(false, 'menu1');
      }
pinSet(){
   // at first it will set the pin
    if ((localStorage.getItem("pin"))==null) {
       
      

        
            this.pin =   localStorage.setItem("pin",this.pin);
            alert("password is set");
            localStorage.setItem("checkPin",this.pin);
            this.navCtrl.setRoot(Profilepage); 
        
    }
 else{
     //if the pin is set it will check if the user is present or not if the user is not registered it will move to home page else profile page
        if(this.pin ==localStorage.getItem("pin")){
       
                localStorage.setItem("checkPin",this.pin);
                this.navCtrl.setRoot(Profilepage);
            }
               
        
        else{
           alert("password incorrect");
            console.log("incorrect password");
        }
 }
}   
}


  