import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  public isRegisterSelected: boolean = true;
  public commitBtnTitle: string = "Login, I have an account";

  public onChangeAccessView() {
    this.isRegisterSelected = !this.isRegisterSelected;
    
    this.commitBtnTitle = !this.isRegisterSelected ? "Create an account" : "Login, I have an account";
  }
}
