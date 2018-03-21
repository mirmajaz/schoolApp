import { BrowserModule} from '@angular/platform-browser';
import { ErrorHandler,NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {Profilepage} from '../pages/profile/profile'
import {Start} from '../pages/start/start'
import { IonicStorageModule } from '@ionic/storage';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SchoolDataProvider } from '../providers/school-data/school-data';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import {PasswordPage} from'../pages/password/password'
import { Menu } from 'ionic-angular/components/menu/menu';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    Profilepage,
    PasswordPage,
    Start
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
  
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    Profilepage,
    PasswordPage,
    Start
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SchoolDataProvider,
    AuthServiceProvider,
  Menu,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
    
  ]
})
export class AppModule {}
