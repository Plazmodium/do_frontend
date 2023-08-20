import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthResponse } from '@supabase/supabase-js';

import { Credentials } from '@core/models';
import { FormBase } from '@shared/components';
import { SupabaseService } from '@core/services';

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

  constructor(private readonly _supabase: SupabaseService) { super(); }

  protected async onSubmitForm(formData: Credentials): Promise<void>
  {
    this.authResponse = await this._supabase.signUpAsync(formData);
  }
}
