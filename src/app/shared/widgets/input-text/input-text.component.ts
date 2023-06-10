import { Component, Input } from '@angular/core';

@Component({
  selector: 'input-text-widget',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent 
{
  @Input()
  public title: string = "";
}
