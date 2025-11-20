import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../services/user.service';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public login = "";
  public password = "";
  public error = "";

  constructor(private userService: UserService, private router: Router) {
  }
 async loginUser() {
    this.error = "";
    if (this.login.length < 3) {
      //alert("Le login doit faire au moins 3 caractères");
      this.error = "Le login doit faire au moins 3 caractères";
    } else if (this.password.length < 6) {
      //alert("Le mot de passe doit faire au moins 6 caractères");
      this.error = "Le mot de passe doit faire au moins 6 caractères";
    } else {
      try {
        await this.userService.login("Jean");
        /**
         * Dans Angular, router.navigate() retourne une Promise<boolean> qui indique si la navigation a réussi ou échoué.
         * Étant donné que la fonction loginUser() est async, WebStorm s'attend à ce que nous traitions cette Promise.
         * Il faut donc ajouter un await
         */
        await this.router.navigate(["summary"]);
      } catch (err) {
        console.error(err);
      }
    }
  }

}
