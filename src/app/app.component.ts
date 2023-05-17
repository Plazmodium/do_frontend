import { Component } from '@angular/core';
import { environment } from "../environments/environment"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'do_frontend';
  public env: any;

  constructor() {
    this.env = environment;
  }
}
