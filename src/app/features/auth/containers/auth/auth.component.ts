import { Component, OnInit } from '@angular/core';
import { SupabaseService } from '@core/services';
import { Session } from '@supabase/supabase-js';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit
{
  public session: Session | null = null;

  public isRegisterSelected: boolean = true;
  public commitBtnTitle: string = "Login, I have an account";

  constructor(private readonly _supabase: SupabaseService)
  {
    this._supabase.authChanges((_, session) => this.session = session);
  }

  public ngOnInit(): void
  {
    console.log(this.session);
  }

  public onChangeAccessView(): void 
  {
    this.isRegisterSelected = !this.isRegisterSelected;

    this.commitBtnTitle = !this.isRegisterSelected ? "Create an account" : "Login, I have an account";
  }
}
