import { Component } from '@angular/core';
import { CoreModule } from "@core/core.module";
import { RouterOutlet, RouterLink } from "@angular/router"

@Component({
  selector: 'app-email-confirmation',
  standalone: true,
  imports: [CoreModule, RouterOutlet, RouterLink],
  templateUrl: './email-confirmation.component.html',
  styleUrl: './email-confirmation.component.css'
})
export class EmailConfirmationComponent {

}
