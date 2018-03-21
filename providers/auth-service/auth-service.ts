import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { SQLite,SQLiteObject} from '@ionic-native/sqlite';
import { Storage } from '@ionic/storage';
import { NavController} from 'ionic-angular';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {
  
 
  public token: any;
  public msgArray = [];
  public count :number = 0;
constructor( public http :Http, public storage:Storage,public navCtrl :NavController) {
 
  }
  createAccount(details){
 
    return new Promise((resolve, reject) => {
 
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

   
        // let details = {
        //   school_id:1001,
        //   student_id:432028,    
        //   password:1234566
        // };
   console.log("in the gdbdyddgh",JSON.stringify(details));
  //  console.log("in the gdbdyddgh",JSON.stringify(nickName));
        this.http.post('http://shafihuzaib.com/temp/api.php?q=register', JSON.stringify(details))
          .subscribe(res => {
 
            let data = res.json();
            this.token = data.token;
            localStorage.setItem('token', data.token);
            resolve(data);
         
             localStorage.setItem('details',JSON.stringify(details));
         var dataRetrieved ;

          dataRetrieved =localStorage.getItem('details');
          var movies2 = JSON.parse(dataRetrieved);
          var i = 0;
          // localStorage.setItem("keyword1"+i,movies2);
          // for(i =0;i<=4;i++){
          //   if((localStorage.getItem("keyword1"+i))==null){
          //     console.log("keyword1"+i);
          //     localStorage.setItem("keyword1"+i,dataRetrieved);
          //     console.log(localStorage.getItem("keyword1"+i));
          //     console.log(i);
          //     localStorage.setItem("keyword1"+i,dataRetrieved);
          //       break;
          //   }
          // }
            
    

          //  localStorage.setItem("key",JSON.stringify(details));
        // for(i =0;i<=4;i++){
        // this.storage.get("keyword1"+i).then((value)=>{
        //  console.log("please Allah",value);
        //   })}
        //   this.storage.get("keyword1"+i).then((value)=>{
        // //   //  if(value==null){
        // //   //    console.log(movies2);
        // //   // // value.push(dataRetrieved)
        // //   //   this.storage.set("key",value);
        // //   //  }
        // //   //   else{

        // //   //     let array=[];
        // //   //     array.push(value);
        // //   //     this.storage.set("key",array);
        // //     // }
        //   for(i =0;i<=4;i++){
        //     this.storage.get("keyword1"+i).then((value)=>{
        //       console.log("keyword1"+i);
        //       if(value==null)
        //     {
        //       console.log(value);
        //       console.log(i);
        //       this.storage.set("keyword1"+i,value);
             
            
            
        //     } 
            
        //   }
        //   )
           
            
        
        //   }
          

        //  })
        

            //  console.log("kskjls", localStorage.getItem(movies2['nickName']));

        //   console.log('movie',movies2,"hello",this.msgArray);
          // localStorage.setItem("details"+this.count,movies2);
          // console.log("the value of count :",this.msgArray);
          // this.count++;
      
          }, (err) => {
            reject(err);
          });
 
    });
 
  }
}
