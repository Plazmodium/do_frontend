import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

// import { AngularFireModule } from '@angular/fire';
// import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from "../environments/environment"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//FEATURES
import { AuthModule } from './features/auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    AuthModule
    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
