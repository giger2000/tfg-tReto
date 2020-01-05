import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

// Formularios
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Bootstrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Icons
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// firebase
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';


// consumir datos externos
import { HttpClientModule } from '@angular/common/http';

// Para formato fechas
import { LOCALE_ID } from '@angular/core';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';

// Componentes
import { NormasComponent } from './components/normas/normas.component';
import { NormaComponent } from './components/norma/norma.component';
import { RetoComponent } from './components/reto/reto.component';




// temporales
import {NormasService } from './services/normas.service';
import { UserService } from 'src/app/services/user.service';

registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [AppComponent,
                  NormaComponent,
                  NormasComponent,
                  RetoComponent
                  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features
  ],
  providers: [
    StatusBar,
    NormasService,
    UserService,
    {provide: LOCALE_ID, useValue: 'es'},
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
