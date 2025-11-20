import { Injectable } from '@angular/core';

//Depuis Angular 6, il est recommandé d'utiliser l'injection de dépendances au niveau du root directement dans le service
@Injectable({
  providedIn: 'root'// Rend le service accessible globalement
})
export class CarbonFootprintComputeService {

  private  voyages=[
    {distanceKm:50,consommationPour100Km:3.5, quantiteCO2: 0},
    {distanceKm:150,consommationPour100Km:4.5, quantiteCO2: 0},
    {distanceKm:250,consommationPour100Km:3.5, quantiteCO2: 0},
    {distanceKm:350,consommationPour100Km:3.5, quantiteCO2: 0},
    {distanceKm:450,consommationPour100Km:3.5, quantiteCO2: 0},
  ];

  constructor() { }

  async getVoyages(): Promise<Array<any>> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.voyages);
      }, 5000);
    });
  }

  async addVoyage(voyage: any): Promise<void> {
    return new Promise((resolve, reject) => {
    if (!voyage.typeVoyage) {
      voyage.typeVoyage = 'voiture';
    }
    if (voyage.typeVoyage === 'voiture') {
      voyage.quantiteCO2 = (voyage.distanceKm * voyage.consommationPour100Km) / 100 * 2.3;
    } else if (voyage.typeVoyage === 'avion') {
      voyage.quantiteCO2 = voyage.distanceKm * 0.03;
    } else if (voyage.typeVoyage === 'train') {
      voyage.quantiteCO2 = voyage.distanceKm * 0.2;
    }

    console.log(voyage);
    this.voyages.push(voyage);
      resolve();
    });
  }


  getResumeVoyages(): Promise<any> {
    return new Promise((resolve, reject) => {
    let distanceKm = 0;
    let consommationPour100Km = 0;
    let quantiteCO2Totale = 0;
    this.voyages.forEach(voyage => {
      distanceKm += voyage.distanceKm;
      consommationPour100Km += voyage.consommationPour100Km;
      quantiteCO2Totale += voyage.quantiteCO2;
    });
      resolve({ distanceKm, consommationPour100Km, quantiteCO2Totale });
    });
  }
}
