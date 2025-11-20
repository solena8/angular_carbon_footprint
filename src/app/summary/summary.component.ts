import { Component } from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import {CarbonFootprintComponent} from '../carbon-footprint/carbon-footprint.component';
import {FooterComponent} from '../footer/footer.component';

@Component({
  selector: 'app-summary',
  imports: [
    HeaderComponent,
    CarbonFootprintComponent,
    FooterComponent
  ],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css'
})
export class SummaryComponent {

}
