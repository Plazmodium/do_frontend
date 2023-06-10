import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';

import { AuthComponent } from './containers/auth/auth.component';
import { PrimengModule } from 'src/app/core/primeng/primeng.module';

import { FEATURE_COMPONENTS } from "./components"
import { WIDGETS } from "../../shared/widgets";

@NgModule({
  declarations: [
    AuthComponent,
    FEATURE_COMPONENTS,
    WIDGETS,
  ],
  imports: [
    CommonModule,
    PrimengModule,
    AuthRoutingModule,
  ]
})
export class AuthModule { }
