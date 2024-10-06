import { Component } from '@angular/core';
import { AuthResponse } from '@supabase/supabase-js';
import { MessageService } from 'primeng/api';

import { Credentials } from '@core/models';
import { SupabaseService } from '@core/services';
import { FormBase } from '@shared/components';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent extends FormBase {
  public credentials: Credentials = { name: '', email: '', password: '' };
  public authResponse!: AuthResponse;

  constructor(private readonly _supabase: SupabaseService, private _messageService: MessageService) {
    super();
  }

  protected async onSubmitForm(formData: Credentials): Promise<void> {
    this.authResponse = await this._supabase.signIn(formData);
    let severity = !this.authResponse.error ? 'success' : 'error';
    this._messageService.add({severity: severity, summary: 'Success', detail: 'Logged in'})
    console.log(this.authResponse)
    //this.messageService.add({severity: severity, })
  }
}
