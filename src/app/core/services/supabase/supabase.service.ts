import { Injectable } from '@angular/core';
import { AuthChangeEvent, AuthSession, createClient, Session, SupabaseClient } from '@supabase/supabase-js'
import { environment } from "../../../../environments/environment"
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

    const { data } = await this._supabase.auth.getSession();
    this._session = data.session;
    return this._session;
  }

  public authChanges(callback: (event: AuthChangeEvent, session: Session | null) => void)
  {
    return this._supabase.auth.onAuthStateChange(callback);
  }

  public async signUpAsync(credentials: Credentials)
  {
    return await this._supabase.auth.signUp({
      email: credentials.email,
      password: credentials.password
    });
  }

  public async signIn(credentials: Credentials)
  {
    return await this._supabase.auth.signInWithPassword({
      email: credentials.email,
      password: credentials.password
    });
  }

  public async signOutAsync()
  {
    return await this._supabase.auth.signOut();
  }
}
