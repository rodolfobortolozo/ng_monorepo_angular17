import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HelloWorldComponent } from './hello-world/hello-world.component';

@Component({
  standalone: true,
  imports: [HelloWorldComponent, RouterModule],
  selector: 'my-app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'my-app';
}
