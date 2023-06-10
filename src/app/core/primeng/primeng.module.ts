import { NgModule, APP_INITIALIZER, } from '@angular/core';

import { PrimeNGConfig } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { CardModule } from 'primeng/card';
import { PasswordModule } from 'primeng/password';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';

const initializeAppFactory = (primeConfig: PrimeNGConfig) => () =>
{
  primeConfig.ripple = true;
};

@NgModule({
  declarations: [],
  imports: [
  ],
  exports: [
    RippleModule,
    ButtonModule,
    CardModule,
    PasswordModule,
    InputNumberModule,
    InputTextModule
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
