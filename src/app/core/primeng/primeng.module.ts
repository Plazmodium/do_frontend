import { NgModule, APP_INITIALIZER, } from '@angular/core';

import { PrimeNGConfig } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { CardModule } from 'primeng/card';
import { PasswordModule } from 'primeng/password';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { TabViewModule } from 'primeng/tabview';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

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
    InputTextModule,
    TabViewModule,
    MessagesModule,
    ToastModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeAppFactory,
      deps: [PrimeNGConfig],
      multi: true,
    },
    MessageService
  ]
})
export class PrimengModule { }
