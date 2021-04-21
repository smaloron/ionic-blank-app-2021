// Importation des composants pour l'affichage 
// et la gestion de l'écran
import { Component } from '@angular/core';

// Décorateur
// permet d'indiquer le rôle de l'élément qui suit
// et de le paramètre
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public name = 'Seb';

  public preferedColor = 'warning';

  public isListHidden = true;

  public countryList = [
    { name: 'France', mainCity: 'Paris', flag: 'french-flag.jpg', population: 67 },
    { name: 'Irelande', mainCity: 'Dublin', flag: 'irish-flag.jpg', population: 5 },
    { name: 'Allemagne', mainCity: 'Berlin', flag: null, population: 85 }
  ];

  constructor() { }
  
  public showHideList() {
    /*
    if (this.isListHidden) {
      this.isListHidden = false;
    } else {
      this.isListHidden = true;
    } */
    this.isListHidden = !this.isListHidden;
  }

}
