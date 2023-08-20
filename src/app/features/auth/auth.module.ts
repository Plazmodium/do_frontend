import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule } from '@angular/forms';

import { AuthComponent } from './containers/auth/auth.component';
import { CoreModule } from "@core/core.module";

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
    CoreModule,
    FormsModule,
    AuthRoutingModule,
  ]
})
export class AuthModule { }
