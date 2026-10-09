import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular';
import { CarritoSignalsComponent } from './carrito-signals/carrito-signals.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, CarritoSignalsComponent],
})
export class AppComponent {
  constructor() {}
}