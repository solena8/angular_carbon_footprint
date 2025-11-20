import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  public nomUtilisateur = "";

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadData();
  }

  async loadData() {
    this.nomUtilisateur = await this.userService.getUsername();
  }
}
