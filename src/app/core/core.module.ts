import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from 'src/app/core/primeng/primeng.module';
import { SERVICES } from "./services";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [SERVICES],
  exports: [PrimengModule]
})
export class CoreModule { }
