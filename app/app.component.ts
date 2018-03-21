import { Component, ViewChild } from '@angular/core';
import { Nav, Platform,NavController,NavParams,AlertController,ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { Profilepage } from '../pages/profile/profile';
import  {PasswordPage} from '../pages/password/password'
import { Start } from '../pages/start/start';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  name =[];

  b = [];
  loopVal : any;
  public myIndex: number = 0;

  @ViewChild(Nav) nav: Nav;

 
  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public alertCtrl:AlertController,public toastCtrl : ToastController,public platform: Platform,public statusBar: StatusBar, public splashScreen: SplashScreen) {
  
    this.initializeApp();
    
    var numbers;
    
       var i =0;
      
      for(i=0;i<=4;i++){
  if  ((localStorage.getItem("student_nickName"+i))!=null) {
        this.b[i] = i;
        this.name[i] = localStorage.getItem("student_nickName"+i);
      // this. name = "mj";
        console.log(this.name[i]);
            
     }}
     // used for an example of ngFor and navigation
    this.pages = [
                  { title:   'About',            component:Start },
                  { title:   'Profile',      component: Profilepage },
                  { title:  'password',      component:PasswordPage },
                  { title:  'ADD STUDENT',        component:HomePage }
                

    ];
// if(window.location.reload){
//   this.rootPage = PasswordPage;
// }

 if(localStorage.getItem("student_id0")==null){
  this.rootPage = Start;
}    
   else if(localStorage.getItem("pin")!=null){
   
      this.rootPage = PasswordPage;
      
    }
   else if(localStorage.getItem("student_id0")!=null) {
this.rootPage = Profilepage;
  }
 
    
}
  initializeApp() {
    
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
        
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.platform.registerBackButtonAction(() => {
        let alert;
        if(this.nav.canGoBack()){
          this.nav.pop();
        }else{
          if(alert){ 
            alert.dismiss();
            alert =null;     
          }else{
            this.showAlert();
           }
        }
      });
    });

  }

  showAlert() {
let alert = this.alertCtrl.create({
    title: 'Exit?',
    message: 'Do you want to exit the app?',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          alert =null;
        }
      },
      {
        text: 'Exit',
        handler: () => {
          this.platform.exitApp();
        }
      }
    ]
  });
  alert.present();
}

  showToast() {
    let toast = this.toastCtrl.create({
      message: 'Press Again to exit',
      duration: 2000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  } 
  

  

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
    
  }

  onChange(selectedValue: any) {
    let index = this.myIndex;
    console.log(index);

 this.loopVal = localStorage.getItem("student_nickName"+index);
 this.nav.setRoot(Profilepage,{"index":index});
}
}
