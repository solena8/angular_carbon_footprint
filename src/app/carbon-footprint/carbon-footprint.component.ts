import { Component } from '@angular/core';
import {CarbonFootprintFormComponent} from '../carbon-footprint-form/carbon-footprint-form.component';
import {CarbonFootprintResultComponent} from '../carbon-footprint-result/carbon-footprint-result.component';
import {DecimalPipe, NgClass, NgForOf, NgIf, NgStyle} from '@angular/common';
import {CarbonFootprintComputeService} from '../services/carbon-footprint-compute.service';

@Component({
  selector: 'app-carbon-footprint',
  imports: [
    CarbonFootprintFormComponent,
    CarbonFootprintResultComponent,
    DecimalPipe,
    NgClass,
    NgStyle,
    NgIf,
    NgForOf
  ],
  templateUrl: './carbon-footprint.component.html',
  styleUrl: './carbon-footprint.component.css'
})
export class CarbonFootprintComponent {
  public distanceKm: number=150;
  public consommationPour100Km: number=10;
  public quantiteCO2Totale: number = 0;
  public voyages : Array<any> = [];
  public loadingVoyages = false;

constructor(private carbonFootprintComputeService: CarbonFootprintComputeService) {
  this.loadData();
}

  async loadData() {
    this.loadingVoyages = true;
    try {
      this.voyages = await this.carbonFootprintComputeService.getVoyages();
      await this.calculerTotalEtMoyenne();
    } catch(err) {
      console.error(err);
    } finally {
      this.loadingVoyages = false;
    }
  }

  ajouter100Km() {
    this.distanceKm += 100;
  }

  async genererVoyage() {
    const distance = Math.floor(Math.random() * 1000) + 1;
    const consommation = Math.floor(Math.random() * 10) + 1;
    await this.carbonFootprintComputeService.addVoyage({ distanceKm: distance, consommationPour100Km: consommation });
    this.voyages = await this.carbonFootprintComputeService.getVoyages();
    await this.calculerTotalEtMoyenne();
  }

  async calculerTotalEtMoyenne() {
    let resume = await this.carbonFootprintComputeService.getResumeVoyages();
    this.distanceKm = resume.distanceKm;
    this.consommationPour100Km = resume.consommationPour100Km;
    this.quantiteCO2Totale = resume.quantiteCO2Totale;
  }

  ngOnInit() {
    console.log('Le composant a été initialisé.');
  }

  ngOnDestroy() {
    console.log('Le composant a été détruit.');
  }

  ngAfterContentInit() {
    console.log('Le contenu du composant a été initialisé.');
  }

  ngAfterContentChecked() {
    console.log('Le contenu du composant est vérifié.');
  }

  ngAfterViewInit() {
    console.log('La vue du composant a été initialisée.');
  }

  ngAfterViewChecked() {
    console.log('La vue du composant a été vérifiée.');
  }

}
