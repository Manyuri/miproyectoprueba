import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService} from './in-memory-data.service';
import { ContactoService } from './contacto.service';

import { AboutPage } from '../pages/about/about';
import { EditarPage } from '../pages/editar/editar';
import { ContactosPage } from '../pages/contactos/contactos';
import { HomePage } from '../pages/home/home';
import { NuevocontactoPage } from '../pages/nuevocontacto/nuevocontacto';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactosPage,
    HomePage,
    TabsPage,
    NuevocontactoPage,
    EditarPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  
  ],

  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactosPage,
    HomePage,
    TabsPage,
    NuevocontactoPage,
    EditarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ContactoService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
