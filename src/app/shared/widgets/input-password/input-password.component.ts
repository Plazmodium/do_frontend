import { Component, Input } from '@angular/core';

@Component({
  selector: 'input-password-widget',
  templateUrl: './input-password.component.html',
  styleUrls: ['./input-password.component.css']
})
export class InputPasswordComponent
{
  @Input()
  public title: string = "";
  @Input()
  public value: string = "";
  @Input()
  public required: boolean = true;
  @Input()
  public name: string = ""
}
