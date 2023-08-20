import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Credentials } from '@core/models';
import { FormBase } from '@shared/components';
import { SupabaseService } from '@core/services';
import { AuthResponse } from '@supabase/supabase-js';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent extends FormBase
{
  @ViewChild('myForm', { static: true }) myForm?: NgForm;

  public credentials: Credentials = { name: "", email: "", password: "" };
  public authResponse!: AuthResponse;

  constructor(private _supabase: SupabaseService) { super(); }

  protected async submitForm(formData: Credentials): Promise<void>
  {
    console.log(formData);
    this.authResponse = await this._supabase.signUpAsync(formData);
    console.log(this.authResponse);
  }
}
