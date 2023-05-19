import { NgModule, APP_INITIALIZER, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PrimeNGConfig } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple'


const initializeAppFactory = (primeConfig: PrimeNGConfig) => () => {
  primeConfig.ripple = true;
};

@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
  ],
  exports: [
    BrowserAnimationsModule,
    RippleModule,
    ButtonModule,
  ],
  providers: [
    {
       provide: APP_INITIALIZER,
       useFactory: initializeAppFactory,
       deps: [PrimeNGConfig],
       multi: true,
    },
 ]
})
export class PrimengModule { }
