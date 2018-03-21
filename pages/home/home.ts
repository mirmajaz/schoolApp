import { Component          } from '@angular/core';
import { NavController, Platform,LoadingController,Loading,Nav,MenuController,ToastController } from 'ionic-angular';
import { SchoolDataProvider }  from '../../providers/school-data/school-data';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service'
import { LoadedModule } from 'ionic-angular/util/module-loader';
import { Profilepage } from '../profile/profile'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [AuthServiceProvider,SchoolDataProvider]
  
})
export class HomePage {
    loadSchools : any ;
    student_id : any;
    student_password : any;
    student_nickName : any;
    student_School :  any;
    username='';
    student_SchoolName;
    dot : string="/" ;
    passvalue : number;
    public CValue:String;

constructor(public toastCtrl :ToastController,public nav :Nav,public platform:Platform,public menu :MenuController,public navCtrl: NavController,public schoolData : SchoolDataProvider ,public authService: AuthServiceProvider, public loadingCtrl: LoadingController) {


        // localStorage.clear();
 

    this.schoolData.load()
      .then(data => {
      this.loadSchools = data;
    console.log("testing",data[0].id); 

    });
  
   
   
  
  }

    logForm(value){
   
      var i;
      // details to be snd for post request
   
      let details = {
      school_id:this.student_School,
      student_id:this.student_id,    
      password: this.student_password  ,
      nickName : this.student_nickName
    };
    
  
     this.authService.createAccount(details).then((result) => {

      console.log(result);
      if(result["success"]== true){
    
        //using loop to prevent overloading of the local storage

        for(i =0;i<=4;i++){
          if((localStorage.getItem("student_id"+i))==null){
            console.log("inside the lopp");
            console.log("keyword1"+i);
            localStorage.setItem("student_id"+i,"inside the storage");
            localStorage.setItem("student_id"+i,this.student_id);
            localStorage.setItem("school_school"+i,this.student_School);
            localStorage.setItem("student_password"+i,this.student_password);
            localStorage.setItem("student_nickName"+i,this.student_nickName);
            localStorage.setItem("student_SchoolName"+i,this.student_SchoolName);
            this.passvalue = i;
            
            break;
          }
        
        }
        //send the index of the loop for registration so that it can be used for getItem
        this.navCtrl.setRoot(Profilepage,{"index":this.passvalue});

     
        window.location.reload()
   
      } 
      else if(result["success"]== false){
       alert("incorrect details");
        console.log("try again");
      }
    }, (err) => {
        
    });
 
  }
 
        
          onChange(CValue) {
            console.log(CValue);
          //split the schooldata into school id and school name
            let x = CValue.split("/");
            this.student_School= x[0]; 
            this.student_SchoolName=x[1];  
            console.log(x[0]);

        }
  }
  
  

