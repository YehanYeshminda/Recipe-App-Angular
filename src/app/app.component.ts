import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // the default to be laaded in
  loadedType = 'recipe';

  // receives the where we should navigate information
  onNavigate(event: string) {
    this.loadedType = event;
  }
}
