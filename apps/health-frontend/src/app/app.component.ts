import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from '@health-frontend/app/nx-welcome.component';
import { SseSignalComponent } from "@health-frontend/app/components/sse-signal/sse-signal.component";

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, SseSignalComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'health-frontend';
}
