import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {CarbonFootprintComponent} from './carbon-footprint/carbon-footprint.component';
import {CarbonFootprintComputeService} from './services/carbon-footprint-compute.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  providers: [CarbonFootprintComputeService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calcul-empreinte-carbone';
}
