import { Injectable } from '@angular/core';
import { AuthSession, createClient, SupabaseClient } from '@supabase/supabase-js'
import { environment } from "../../../../environments/environment"
// @ts-ignore
import { Credentials } from "@core/models";

@Injectable({
  providedIn: 'root'
})
export class SupabaseService
{
  private _supabase: SupabaseClient;
  private _session: AuthSession | null = null;

  constructor()
  {
    this._supabase = createClient(environment.supabase.url, environment.supabase.key)
  }

  public async getSession()
  {
    if (this._session)
    {
      return this._session;
    }

    const {data} = await this._supabase.auth.getSession();
    this._session = data.session;
    return this._session;
  }

  public async signUpAsync(credentials: Credentials)
  {
    return await this._supabase.auth.signUp({
      email: credentials.email,
      password: credentials.password
    });
  }
}
