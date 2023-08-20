import { Component } from '@angular/core';
import { AuthResponse } from '@supabase/supabase-js';

import { Credentials } from '@core/models';
import { SupabaseService } from '@core/services';
import { FormBase } from '@shared/components';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends FormBase
{
  public credentials: Credentials = { name: "", email: "", password: "" };
  public authResponse!: AuthResponse;

  constructor(private readonly _supabase: SupabaseService) { super(); }

  protected async onSubmitForm(formData: Credentials): Promise<void>
  {
    this.authResponse = await this._supabase.signIn(formData);
  }
}
